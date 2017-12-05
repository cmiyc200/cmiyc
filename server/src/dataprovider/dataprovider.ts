import * as firebase from 'firebase';
import 'firebase/firestore';
import { injectable } from 'inversify';
import * as Rx from 'rxjs';
import { User } from './entities/entities.index';
import * as http from 'http';

@injectable()
export class DataProvider {
    
    protected database: firebase.firestore.Firestore;

    constructor() {
        this.database = firebase.firestore();
    }

    getUser(toUser: string): Promise<User> {
        debugger;
        return this.database.doc('users/kristof')
            .get()
            .then(snapshot => {
                return snapshot.data() as User;
            });
    }
}