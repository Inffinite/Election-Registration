import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBe7iz-9j4WhTwfQHYyvskccxXGdmAL-04",
    authDomain: "election-317719.firebaseapp.com",
    projectId: "election-317719",
    storageBucket: "election-317719.appspot.com",
    messagingSenderId: "181955416002",
    appId: "1:181955416002:web:53d9b976f97c52dddc505b",
    measurementId: "G-89WX0WTMEL"
};

firebase.initializeApp(config);
firebase.analytics();