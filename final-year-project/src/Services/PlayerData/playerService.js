// import React, { useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// // import firebase from "firebase/app";
// import "firebase/database";
// // v9 compat packages are API compatible with v8 code

// import firebase from "firebase/compat/app";

// import "firebase/compat/auth";
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBNRynRskEMrHDDxJuDME1Xa6MNLTDKXsg",
//   authDomain: "final-year-project-f139c.firebaseapp.com",
//   databaseURL:
//     "https://final-year-project-f139c-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "final-year-project-f139c",
//   storageBucket: "final-year-project-f139c.appspot.com",
//   messagingSenderId: "1037159617922",
//   appId: "1:1037159617922:web:f40a90ce5f8f1edf76ab9b",
// };
// firebase.initializeApp(firebaseConfig); // TO DO move this

// const loadJsonFile = async () => {
//   try {
//     const response = await fetch("./nbaPlayers.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
//     const db = getDatabase();
//     const dbRef = ref(db, "players");
//     set(dbRef, jsonData);
//     return jsonData;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const PlayerService = {
//   loadJsonFile,
// };
// export default PlayerService;
