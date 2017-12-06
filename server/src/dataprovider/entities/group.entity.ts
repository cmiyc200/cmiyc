import {
    BaseEntity
} from './base.entity';

import * as firebase from 'firebase';
import 'firebase/firestore';

export class Group extends BaseEntity {
    
    owner: string;
    members: string[];
    
    get accessable(): boolean {
        return this.members.length >= 3;
    }

    constructor() {
        super();
        this.members = [];
    }

    populateFromDocumentData(data: firebase.firestore.DocumentData) {
        this.owner = data.owner;
        this.members = this.fetchMap(data.members);
    }
}