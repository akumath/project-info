import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfkJSsJOcafD7dHjUue3yshiXCr1u6Yqw",
    authDomain: "project-info-7d2ca.firebaseapp.com",
    databaseURL: "https://project-info-7d2ca.firebaseio.com",
    projectId: "project-info-7d2ca",
    storageBucket: "project-info-7d2ca.appspot.com",
    messagingSenderId: "697458646292",
    appId: "1:697458646292:web:981ab3ccac54d8a9f73601",
    measurementId: "G-YR6W8HD59N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore.settings({timestampsInSnapshots: true});

  export default firebase;