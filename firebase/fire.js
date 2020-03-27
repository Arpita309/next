import {Config}from './config';
import firebase from 'firebase';

firebase.initializeApp(Config);

export const auth=firebase.auth();
export  const fireauth=firebase.auth;
export const firestore=firebase.firestore();
export const firebasestore=firebase.firestore;