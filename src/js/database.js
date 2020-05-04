const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain : "stud-loc.firebaseapp.com",
  projectId : 'stud-loc'
});

const db = firebase.firestore();

export {
  db,
  firebase
}