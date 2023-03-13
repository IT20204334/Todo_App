import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGbveg54f7L7x4jCPOy6nf_05uLzjXv0E",
  authDomain: "todor-75fd3.firebaseapp.com",
  projectId: "todor-75fd3",
  storageBucket: "todor-75fd3.appspot.com",
  messagingSenderId: "848022697577",
  appId: "1:848022697577:web:4405c8af431933491754f8",
  measurementId: "G-86MJ8JQ65Q"

};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export{firebase};