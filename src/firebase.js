// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzU4mQRal3L_VnGuA2F_-FRYj-mn3hrWY",
  authDomain: "aquaapp-2fbd7.firebaseapp.com",
  projectId: "aquaapp-2fbd7",
  storageBucket: "aquaapp-2fbd7.appspot.com",
  messagingSenderId: "1047900454560",
  appId: "1:1047900454560:web:5685fec9d33505599193c5",
  measurementId: "G-DLV1GV2RGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);