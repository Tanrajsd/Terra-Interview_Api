const db = require("../firebase/firebaseSetup");
const {
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");

async function registerUser() {
  //TODO
}

async function getUser() {
  //TODO
}

module.exports = {
  registerUser,
  getUser,
};
