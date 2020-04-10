const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain : 'eur3',
  projectId : 'stud-loc'
});

const db = firebase.firestore();

export default db;

// Standard
// db.collection("User").get().then(doc => doc.forEach(d => console.log(d.data())))
// Where
// db.collection("User").where("ID", "==", "Cc0YbyxXPSckFWjXcj2bduNwAVS2").get().then(doc => doc.forEach(d => console.log(d.data())))