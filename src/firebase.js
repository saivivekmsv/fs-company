
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAe-OnP_QpMPv_q-9ioYzO8_yCwP_1VeGo",
  authDomain: "fs-company.firebaseapp.com",
  projectId: "fs-company",
  storageBucket: "fs-company.appspot.com",
  messagingSenderId: "577343918423",
  appId: "1:577343918423:web:0df835c41534a62573ee12",
  measurementId: "G-4MPKMKBSEF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);