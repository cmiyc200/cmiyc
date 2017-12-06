import * as restify from 'restify';

import {
    injectable
} from 'inversify';

import {
    GroupService,
    UserService
} from '../services/services.index';

@injectable()
export class Routing {

    private server: restify.Server;

    public setServer(server: restify.Server): Routing {
        this.server = server;
        return this;
    }

    public registerUserRoutes(service: UserService): Routing {
        
        this.server.get('/api/v1/users/:name', (request: restify.Request, response: restify.Response) => {
            service.get(request.params.name)
                .then(user => {
                    response.json({
                        user
                    })
                })
        });

        this.server.get('/api/v1/users/:name/groups', (request: restify.Request, response: restify.Response) => { 
            service.groups(request.params.name)
                .then(groups => {
                    response.json({
                        groups
                    })
                })
        });

        return this;
    }

    public registerGroupRoutes(service: GroupService) {

        this.server.get('/api/v1/groups', (request: restify.Request, response: restify.Response) => {
            service.getAll()
                .then(groups => {
                    response.json({
                        groups
                    });
                });
        });

        return this;
    }
}