import * as restify from 'restify';
import * as firebase from 'firebase';
import 'firebase/firestore';    
import 'rxjs';
import { inject, injectable, Container } from 'inversify';
import 'reflect-metadata';
import { DataProvider } from './dataprovider/dataprovider';
import { UserService, GroupService } from './services/services.index';
import container from './inversify.config';
import { Routing } from './routing/routing';

export class ServerFactory {

    public setup(): Server {
        return container.get(Server);
    }
}

@injectable()
export class Server {

    public server: restify.Server;

    constructor() { 

        this.useFirebase();

        let routing = container.get(Routing);

        this.server = restify.createServer({
            name: 'server',
            version: '1.0.0'
        });

        let userService = container.get(UserService);
        let groupService = container.get(GroupService);

        routing.setServer(this.server)
            .registerUserRoutes(userService)
            .registerGroupRoutes(groupService);

        this.server.listen(8080, () => {
            console.log('server listening on port 8080');
        });

    }

    private useFirebase(): Server {
        firebase.initializeApp({
            apiKey: "AIzaSyCWQmjfn5nsX34OsNCutMGU9aAGJrM7lpQ",
            authDomain: "cmiyc-83b69.firebaseapp.com",
            databaseURL: "https://cmiyc-83b69.firebaseio.com",
            projectId: "cmiyc-83b69",
            storageBucket: "cmiyc-83b69.appspot.com",
            messagingSenderId: "514756831597"
        });
        return this;
    }

}