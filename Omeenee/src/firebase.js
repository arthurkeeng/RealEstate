// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM_86dSMuQeLfsPCP5DGi4L8UDx8oD5Eo",
  authDomain: "omeenee-59739.firebaseapp.com",
  projectId: "omeenee-59739",
  storageBucket: "omeenee-59739.appspot.com",
  messagingSenderId: "515921284419",
  appId: "1:515921284419:web:b04cbc3511e5502c9973f6",
  measurementId: "G-5JL4FQW74J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
