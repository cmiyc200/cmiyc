import * as restify from 'restify';
import * as firebase from 'firebase';
import 'firebase/firestore';    
import 'rxjs';

export class Server {

    public server: restify.Server;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {

        this.useFirebase();

        this.server = restify.createServer({
            name: 'server',
            version: '1.0.0'
        });

        this.server.get('/api/v1', (request: restify.Request, response: restify.Response) => {
            response.json({
                message: 'test'
            });
        });

        let db = firebase.firestore();

        db.collection('users').get().then((query) =>{
            query.forEach(doc =>{
                console.log(JSON.stringify(doc.data()));
            });
        });

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