import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref as fbref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAF6mqMdbHOiho-mlRcFmEarTATt41a2go",
    authDomain: "markmarijnissen.firebaseapp.com",
    databaseURL: "https://markmarijnissen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "markmarijnissen",
    storageBucket: "markmarijnissen.appspot.com",
    messagingSenderId: "315677463019",
    appId: "1:315677463019:web:259613d97dfd2e454ac9ae",
    measurementId: "G-F5FHVPS4P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const getValue = (id) => {
    const r = fbref(db, `micromeditation/accounts/${id}`);
    return new Promise((resolve, reject) => {
        onValue(r, snap => {
            const val = snap.val();
            if (val) {
                resolve(val);
            }
        }, reject, { onlyOnce: true });
    });
}

export const setValue = (id, value) => {
    const r = fbref(db, `micromeditation/accounts/${id}`);
    return set(r, value);
}