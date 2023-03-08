// import React, { useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; // Import the compat version of the database module

// import "firebase/database";
// // v9 compat packages are API compatible with v8 code

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

export const getNBAData = async () => {
  try {
    const response = await fetch("./nbaPlayers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);

    // how to load json data to firebase - something like this
    //     const db = getDatabase();
    // const dbRef = ref(db, "players");
    //     set(dbRef, jsonData);

    return jsonData;
  } catch (error) {
    console.error(error);
  }
};
export const getNFLData = async () => {
  try {
    const response = await fetch("./nflPlayers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export const getPremData = async () => {
  try {
    const response = await fetch("./premPlayers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export const getPlayersSelectedForWeek = async () => {
  try {
    const playerSelectedForWeekRef = firebase
      .database()
      .ref("/users/VxcdhdZjK6TT8XVk7HOR79pdeRa2/playersSelected/20221106"); // TO DO USE CURRENT DATE

    const playersSelected = [];
    playerSelectedForWeekRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      playersSelected.push(snapshot.val());
    });

    // wait for the listener to finish and then return the array
    await new Promise((resolve) => {
      playerSelectedForWeekRef.once("value", resolve);
    });
    console.log(playersSelected[0]);
    return playersSelected[0];
  } catch (error) {
    console.error(error);
  }
};

export const savePlayerSelectionForWeek = async (playerIdsSelected) => {
  try {
    //    const user = firebase.auth().currentUser;
    console.log(playerIdsSelected);
    const userRef = firebase
      .database()
      .ref("/users/YxrrikWnVcOkvfbaMhf2i9Fj4Sn2"); // TO DO replace with id of currently logged in user

    userRef.set({
      playersSelected: {
        20221106: playerIdsSelected,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
//TO DO take in week key
export const getPointsScoredByPlayersSelected = async (playersSelected) => {
  try {
    //    const user = firebase.auth().currentUser;
    const weekRef = firebase.database().ref("/weeklyResults/20221106"); // TO DO replace with id of currently logged in user
    weekRef.on("child_added", (snapshot) => {
      const childData = snapshot.val();
      // perform the necessary operations on the child node data
      if (childData) {
        console.log(childData);
        // loop through the numbers and check if they exist in point_scorers
        for (let number of playersSelected) {
          if (childData.point_scorers && childData.point_scorers[number]) {
            console.log(`Number ${number} found in node ${snapshot.key}`);
            console.log(childData.point_scorers[number]);
            // if they score a touchdown
            // add 10 points to total score (get points awarded from the scoring system)

            /**
             * for each player selected:
             * create summary
             * total points
             * events
             *
             */
          } else {
            console.log(`Number ${number} not found in node ${snapshot.key}`);
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const PlayerService = {
  getNBAData,
  getNFLData,
  getPremData,
  savePlayerSelectionForWeek,
  getPlayersSelectedForWeek,
  getPointsScoredByPlayersSelected,
};
export default PlayerService;
