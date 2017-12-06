import {
    BaseService
} from './base.service';

import {
    DataProvider
} from '../dataprovider/dataprovider';

import {
    injectable,
    inject
} from 'inversify';

import {
    Group
} from '../dataprovider/entities/entities.index';

@injectable()
export class GroupService extends BaseService {

    constructor(@inject(DataProvider) dataProvider: DataProvider) { 
        super(dataProvider);
    }

    // all groups
    getAll(): Promise<Group[]> {
        return this.dataProvider.getAllGroups()
            .then(groups => {
                return groups;
            });
    }
}