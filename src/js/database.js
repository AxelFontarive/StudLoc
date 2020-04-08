const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey : 'AIzaSyDTH7irET9rJsD5LR03QNlKlNjEY0Py8t8',
  authDomain : 'eur3',
  projectId : 'stud-loc'
});

const db = firebase.firestore();

export default db;

// Standard
// db.collection("User").get().then(doc => doc.forEach(d => console.log(d.data())))
// Where
// db.collection("User").where("ID", "==", "Cc0YbyxXPSckFWjXcj2bduNwAVS2").get().then(doc => doc.forEach(d => console.log(d.data())))