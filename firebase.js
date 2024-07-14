
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBRMa52DcIeKDQM6YhIQC_ouE_kjqB2JRE",
    authDomain: "noteswap-722db.firebaseapp.com",
    projectId: "noteswap-722db",
    storageBucket: "noteswap-722db.appspot.com",
    messagingSenderId: "486605276506",
    appId: "1:486605276506:web:3691109eddf4489ef55f63",
    measurementId: "G-5WQPKL9YV2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, storage }; 