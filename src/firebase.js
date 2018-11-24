import firebase from 'firebase';
import config from './config/config';

const firebaseConfig = {
    apiKey: config.FIREBASE_APIKEY,
    authDomain: config.FIREBASE_AUTHDOMAIN,
    databaseURL: config.FIREBASE_DATABASEURL,
    projectId: config.FIREBASE_PROJECTID,
    storageBucket: config.FIREBASE_STORAGEBUCKET,
    messagingSenderId: config.FIREBASE_MESSAGINGSENDERID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
});

export { db, firebase };
