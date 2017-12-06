import {
    DataProvider
} from '../dataprovider/dataprovider';

import {
    inject, 
    injectable
} from 'inversify';

@injectable()
export class BaseService {

    protected dataProvider: DataProvider;

    constructor(@inject(DataProvider) dataProvider: DataProvider) { 
        this.dataProvider = dataProvider;
    }

}