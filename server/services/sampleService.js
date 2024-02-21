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

const sampleCollection = collection(db, "sample");

async function getSampleData(properties) {
  let q = query(sampleCollection);

  // hasOwnProperty required to skip all default fields in an object like toString:func
  for (const field in properties) {
    if (properties.hasOwnProperty(field)) {
      q = query(q, where(field, "==", properties[field]));
    }
  }

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const sampleData = querySnapshot.docs[0].data();
    return sampleData;
  } else {
    return null;
  }
}

module.exports = {
  getSampleData,
};
