import {
    BaseEntity
} from './base.entity';

import * as firebase from 'firebase';
import 'firebase/firestore';

export class User extends BaseEntity {
    name: string;
    groups: string[];

    constructor() {
        super();
        this.groups = [];
    }

    populateFromDocumentData(data: firebase.firestore.DocumentData) {
        this.name = data.name;
        this.groups = this.fetchMap(data.groups);
    }
}