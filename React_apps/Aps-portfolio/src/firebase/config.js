import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAi4mEbSwFzVHr8GR2pSvtN9hlJZNOJQ24",
  authDomain: "abhishek-portfolio-1090b.firebaseapp.com",
  projectId: "abhishek-portfolio-1090b",
  storageBucket: "abhishek-portfolio-1090b.appspot.com",
  messagingSenderId: "189791546938",
  appId: "1:189791546938:web:e4ad208556ffc787ff0f03",
  measurementId: "G-N6XXG16JCL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
