import { doc, setDoc, addDoc, getDoc, getDocs, collection, query, where, serverTimestamp } from "firebase/firestore"
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3foDoxAconP0el1rJEf_4KlWc-gLDW_Q",
    authDomain: "robandingridgetmarried.firebaseapp.com",
    projectId: "robandingridgetmarried",
    storageBucket: "robandingridgetmarried.appspot.com",
    messagingSenderId: "595569693535",
    appId: "1:595569693535:web:943f3a66ef926dea1b1cea",
    measurementId: "G-BEVBWW852Z"
  };

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

var groups = [
  {
    "name": "Aiken",
    "people":	[
      "Robert Aiken",
      "Allison Aiken"
    ]
  },
  {
    "name": "Barltrop",
    "people":	[
      "Rachel Barltrop",
      "Sam Barltrop",
      "Erin Barltrop",
      "Willow Barltrop"
    ]
  },
  { 
    "name": "Beacom",
    "people":	[
      "Sandra Beacom",
      "Basil Beacom"
    ]
  },
  {
    "name": "Aiken",
    "people":	[
      "Mary Aiken"
    ]
  },
  {
    "name": "Beacom",
    "people":	[
      "Clarissa Beacom"
    ]
  },
  {
    "name": "Beacom",
    "people":	[
      "Lee Beacom",
      "Stephanie Beacom",
      "Baby Beacom"
    ]
  },
  {
    "name": "Beacom",
    "people":	[
      "Kyle Beacom",
      "Sarah-Jane Beacom",
      "Oscar Beacom",
      "Baby Beacom"
    ]
  },
  {
    "name": "Robinsson",
    "people":	[
      "Yvonne Robinsson",
      "Dean Robinsson",
      "Jodie Robinsson",
      "Tommy Robinsson",
      "Aaron Robinsson",
      "Baby Robinsson"
    ]
  },
  {
    "name": "Barr",
    "people":	[
      "John Barr",
      "Desna Barr"
    ]
  },
  {
    "name": "McMaster",
    "people":	[
      "Louise McMaster",
      "Louie McMaster",
      "Jesse McMaster",
      "Remi McMaster"
    ]
  },
  {
    "name": "Barr",
    "people":	[
      "Stephen Barr",
      "Miriam Barr",
      "Eve Barr",
      "Michael Barr",
      "Aria Barr"
    ]
  },
  {
    "name": "Deering",
    "people":	[
      "Susan Deering",
      "Paul Deering",
      "Lily-Kate Deering",
      "Elise Deering",
      "Micah Deering"
    ]
  },
  {
    "name": "Aiken-Wood",
    "people":	[
      "Marina Aiken-Wood",
      "Julian Aiken-Wood",
      "Mary Aiken-Wood",
      "Archie Aiken-Wood",
      "Lola Aiken-Wood"
    ]
  },
  {
    "name": "McClintock",
    "people":	[
      "Anne McClintock",
      "Frank McClintock"
    ]
  },
  {
    "name": "Shaw",
    "people":	[
      "Denise Shaw",
      "Mervyn Shaw"
    ]
  },
  {
    "name": "Shaw",
    "people":	[
      "Peter Shaw",
      "Stephanie Shaw",
      "Charlotte Shaw",
      "Joshua Shaw"
    ]
  },
  {
    "name": "Mitchell",
    "people":	[
      "Julia Mitchell",
      "Peter Mitchell"
    ]
  },
  {
    "name": "McClintock",
    "people":	[
      "Simon McClintock",
      "Ann-Marie McClintock"
    ]
  },
  {
    "name": "Shaw",
    "people":	[
      "Gary Shaw",
      "Karen Shaw"
    ]
  },
  {
    "name": "Manning",
    "people": [
      "Lloyd Manning",
      "Will Manning"
    ]
  },
  {
    "name": "Roberts & Dagger",
    "people": [
      "Adam Roberts",
      "Emily Dagger"
    ]
  },
  {
    "name": "Granville",
    "people": [
      "Denise Granville",
      "Blair Granville"
    ]
  },
  {
    "name": "Roberts",
    "people": [
      "Megan Roberts"
    ]
  },
  {
    "name": "Thompson",
    "people": [
      "Luke Thompson"
    ]
  },
  {
    "name": "Overall",
    "people": [
      "Karen Overall",
      "Mike Overall"
    ]
  },
  {
    "name": "Lack",
    "people": [
      "Karin Lack",
      "Steve Lack",
      "Ruth Lack",
      "Mike Lack"
    ]
  },
  {
    "name": "Mortimer",
    "people": [
      "Clare Mortimer",
      "Colin Mortimer",
      "Evie Mortimer",
      "Austin Mortimer"
    ]
  },
  {
    "name": "Hassard",
    "people": [
      "Harold Hassard",
      "Sarah Hassard"
    ]
  }
];

async function formatGuestList(guests) {

  for (let group of guests) {
    let people = [];
    let displayNames = [];

    for (let person of group["people"]) {
      let newPerson = {
        name: person,
        rsvp: null,
        diet: null,
        songRequest: null,
        timestamp: serverTimestamp(),
      };
      people.push(newPerson);

      let firstName = person.split(" ")[0];
      displayNames.push(firstName);
    }

    let newGroup = {
      name: group["name"],
      displayNames: displayNames.join(", "),
      guests: group["people"].length,
      timestamp: serverTimestamp(),
    };

    // const rsvpDoc = await addDoc(collection(db, "rsvp"), newGroup);

    for (let person of people) {
      let personId = group["name"] + ", " + person["name"].split(" ")[0]
      // await addDoc(collection(db, "rsvp", rsvpDoc.id, "people"), person);
      await setDoc(doc(db, "replies", personId), person);
    }
  }
}

async function populateReplies() {

  let rsvpGroups = await getDocs(collection(db, "rsvp"));
  rsvpGroups.forEach(async (rsvpDoc) => {

    let rsvpPeople = await getDocs(collection(db, "rsvp", rsvpDoc.id, "people"));
    rsvpPeople.forEach(async (peopleDoc) => {

      // console.log(peopleDoc.id, " => ", peopleDoc.data());

      let q = query(collection(db, "replies"), where("name", "==", peopleDoc.data().name));
      let replies = await getDocs(q);

      replies.forEach(async (repliesDoc) => {
        // console.log(repliesDoc.id, " => ", repliesDoc.data());
        let docParams = {
          diet: (peopleDoc.data().diet !== "") ? peopleDoc.data().diet : null,
          rsvp: peopleDoc.data().rsvp,
          songRequest: (peopleDoc.data().songRequest !== "") ? peopleDoc.data().songRequest : null,
          timestamp: serverTimestamp()
        };
        console.log(docParams)
        await setDoc(doc(db, "replies", repliesDoc.id), docParams, { merge: true });
      });

    });
  });
}

// var output = await formatGuestList(groups);
var output = await populateReplies();

export {};
