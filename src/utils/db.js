import React from 'react';
import * as firebase from 'firebase';

//you can move this config to env variable or some place else safe.
const firebaseConfig = {
    apiKey: "AIzaSyCpgM5_GHaMfIHQ91eTaQ2LeDChInJO_Ms",
    authDomain: "piquisfirebase.firebaseapp.com",
    databaseURL: "https://piquisfirebase.firebaseio.com",
    projectId: "piquisfirebase",
    storageBucket: "piquisfirebase.appspot.com",
    messagingSenderId: "79746012643"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export function emailSignUp({email, password}, callback) {
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => callback(null, user))
  .catch((err) => callback(err, null))
}

export function emailSignIn({email, password}, callback) {
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((user) => callback(null, user))
    .catch((err) => callback(err, null))
}

export function signout(done) {
  firebaseApp.auth().signOut().then(() => done()).catch((error) => done(error))
}