import firebase from 'firebase';

var config = {
 
  apiKey: "AIzaSyDyKxFIt9zkgq3Aa0Do6cCc2nrEKMz2woM",
    authDomain: "campus-99590.firebaseapp.com",
    databaseURL: "https://campus-99590.firebaseio.com",
    storageBucket: "campus-99590.appspot.com",
    messagingSenderId: "427301038369"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
