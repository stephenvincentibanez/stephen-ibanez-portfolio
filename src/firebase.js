import firebase from 'firebase';
import db from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyApxRGEXXzjnVhRYv2-RXDhCkNHlzbrQ4Y",
    authDomain: "stephen-ibanez-portfolio.firebaseapp.com",
    projectId: "stephen-ibanez-portfolio",
    storageBucket: "stephen-ibanez-portfolio.appspot.com",
    messagingSenderId: "673676532139",
    appId: "1:673676532139:web:1ff7cc2358e72c4d989aee",
    measurementId: "G-36D7Z7P7F9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

export default db;