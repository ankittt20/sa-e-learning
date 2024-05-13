import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsBTnMtBVBx4N3qq0CaoZ7wbxRlXSPqDg",
  authDomain: "sae-learning.firebaseapp.com",
  projectId: "sae-learning",
  storageBucket: "sae-learning.appspot.com",
  messagingSenderId: "153524780175",
  appId: "1:153524780175:web:2e10f30d065a7bea5d04fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
