import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCE-DFC-ZpVnx7uRiBYBwSQ7NmLtkTJdbw",
  authDomain: "hangry-19068.firebaseapp.com",
  databaseURL: "https://hangry-19068.firebaseio.com",
  projectId: "hangry-19068",
  storageBucket: "hangry-19068.appspot.com",
  messagingSenderId: "503124064095",
  appId: "1:503124064095:web:5b6a49f8887742eefd68ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
