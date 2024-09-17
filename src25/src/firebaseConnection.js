import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDidPYH1TthO3ZWnKnyDWWfnddUP_szA7Q",
  authDomain: "curso-8d14f.firebaseapp.com",
  projectId: "curso-8d14f",
  storageBucket: "curso-8d14f.appspot.com",
  messagingSenderId: "4106288507",
  appId: "1:4106288507:web:7700a91483f557780d51de",
  measurementId: "G-RESK2GYT6C"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };