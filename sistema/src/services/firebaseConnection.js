
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRouWhEWNvGWxsPUY62FrlKMfjDE9t1lI",
    authDomain: "tickets-78810.firebaseapp.com",
    projectId: "tickets-78810",
    storageBucket: "tickets-78810.appspot.com",
    messagingSenderId: "34562948199",
    appId: "1:34562948199:web:85a4428a3695c8539668c2",
    measurementId: "G-X332Q8SGBX"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };