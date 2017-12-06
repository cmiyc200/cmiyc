import * as firebase from 'firebase';
import 'firebase/firestore';
import { injectable } from 'inversify';
import * as Rx from 'rxjs';
import { User, Group } from './entities/entities.index';
import * as http from 'http';

@injectable()
export class DataProvider {
    
    protected database: firebase.firestore.Firestore;

    constructor() {
        this.database = firebase.firestore();
    }

    getUserByName(toUser: string): Promise<User> {
        return this.database.doc(`users/${toUser}`)
            .get()
            .then(doc => {
                let user = new User();
                user.populateFromDocumentData(doc.data());
                return user;
            });
    }

    getGroupsToUser(toName: string): Promise<Group[]> {
        return this.database.collection('groups').where(`members.${toName}`, '==', true)
            .get()
            .then(snapshot => { 
                let groups: Group[] = [];
                snapshot.docs.forEach(doc => {
                    let group = new Group();
                    group.populateFromDocumentData(doc.data());
                    groups.push(group);
                });
                return groups;
            });
    }

    getAllGroups(): Promise<Group[]> {
        return this.database.collection('groups')
            .get()
            .then(snapshot => {
                let groups: Group[] = [];
                snapshot.docs.forEach(doc => {
                    let group = new Group();
                    group.populateFromDocumentData(doc.data());
                    groups.push(group);
                });
                return groups;
            });
    }

}