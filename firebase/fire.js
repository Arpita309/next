import {Config}from './config';
import firebase from 'firebase/app';
import 'firebase/auth';        
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';

if (!firebase.apps.length) {
    firebase.initializeApp(Config);
    }

export const auth=firebase.auth();
export  const fireauth=firebase.auth;
export const firestore=firebase.firestore();
export const firebasestore=firebase.firestore;
export const database=firebase.database();