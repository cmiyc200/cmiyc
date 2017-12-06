import 'rxjs';

import {
    BaseService
} from './base.service';

import {
    inject, injectable
} from 'inversify';

import {
    DataProvider
} from '../dataprovider/dataprovider';

import {
    User,
    Group
} from '../dataprovider/entities/entities.index';

@injectable()
export class UserService extends BaseService {

    constructor(@inject(DataProvider) dataProvider: DataProvider) {
        super(dataProvider);
    }

    // user details
    get(name: string): Promise<User> {
        return this.dataProvider.getUserByName(name)
            .then(user => {
                return user;
            });
    }

    // groups the user already liked
    groups(name: string): Promise<Group[]> {
        return this.dataProvider.getGroupsToUser(name)
            .then(groups => {
                return groups;
            });
    }

}