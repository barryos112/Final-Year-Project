// import React, { useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; // Import the compat version of the database module

// import "firebase/database";
// // v9 compat packages are API compatible with v8 code
const USER_ID = "0IEGzKfvX5WrunXeRGeJQBwV4Z73";
export const getNBAData = async () => {
  try {
    const response = await fetch("./nbaPlayers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
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

    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export const getPlayersSelectedForWeek = async () => {
  try {
    const playerSelectedForWeekRef = firebase
      .database()
      .ref("/users/0IEGzKfvX5WrunXeRGeJQBwV4Z73/playersSelected/20221106"); // TO DO USE CURRENT DATE

    const playersSelected = [];
    playerSelectedForWeekRef.on("value", (snapshot) => {
      playersSelected.push(snapshot.val());
    });

    // wait for the listener to finish and then return the array
    await new Promise((resolve) => {
      playerSelectedForWeekRef.once("value", resolve);
    });
    return playersSelected[0];
  } catch (error) {
    console.error(error);
  }
};

export const savePlayerSelectionForWeek = async (playerIdsSelected) => {
  try {
    //    const user = firebase.auth().currentUser;
    const userRef = firebase
      .database()
      .ref("/users/0IEGzKfvX5WrunXeRGeJQBwV4Z73"); // TO DO replace with id of currently logged in user

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

    const resultsForPlayersSelected = new Array(6);

    // player id - points scored
    /**
     *
     * player id
     * total points scored
     * touchdowns
     * yards
     * fumbles
     */

    weekRef.on("child_added", (snapshot) => {
      const childData = snapshot.val();
      const sport = childData.sport;
      const scoringSystemRef = firebase
        .database()
        .ref("/scoringSystem/" + sport);

      // perform the necessary operations on the child node data
      if (childData) {
        // loop through the numbers and check if they exist in point_scorers
        for (let number of playersSelected) {
          // player number
          if (childData.point_scorers && childData.point_scorers[number]) {
            const eventsForPlayer = childData.point_scorers[number];
            const playerPointsSummary = {
              playerId: number,
            };
            // if they score a touchdown
            // add 10 points to total score (get points awarded from the scoring system)

            /**
             * for each player selected:
             * create summary
             * total points
             * events
             *
             */
            scoringSystemRef.on("value", (scoringSnapshot) => {
              const scoringData = scoringSnapshot.val();
              Object.keys(eventsForPlayer).forEach((scoringEvent) => {
                // console.log(
                //   "Player scored: ",
                //   `${scoringEvent}: ${eventsForPlayer[scoringEvent]}`
                // );
                const numberOfEventsScored = eventsForPlayer[scoringEvent];
                // Assume you have a key named "fumbles" - find out how many points that earns
                const key = scoringEvent;
                // Get a reference to the node with the same name as the key
                const nodeRef = scoringSystemRef.child(key);
                nodeRef.on("value", (snapshot) => {
                  const pointsForEvent = snapshot.val();
                  const pointsEarnedFromEvent =
                    numberOfEventsScored * pointsForEvent;
                  playerPointsSummary[key] = pointsEarnedFromEvent;
                  console.log("playerPointsSummary", playerPointsSummary);
                });
              });
            });
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
