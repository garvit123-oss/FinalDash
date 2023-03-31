import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAkdWcsyvd7lONmIpT7Pd56XVFO5RFH4Jk",

  authDomain: "taskace.firebaseapp.com",

  databaseURL: "https://taskace-default-rtdb.firebaseio.com",

  projectId: "taskace",

  storageBucket: "taskace.appspot.com",

  messagingSenderId: "737545777185",

  appId: "1:737545777185:web:53d19121582e1bb0cdb360",

  measurementId: "G-77F1KVM1LN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth();

export { app, auth };
