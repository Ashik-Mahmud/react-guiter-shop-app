import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5oKcHGzO1kVXWurlJpOIDT_IDU5Gxzy4",
    authDomain: "guitar-sign-in.firebaseapp.com",
    projectId: "guitar-sign-in",
    storageBucket: "guitar-sign-in.appspot.com",
    messagingSenderId: "1012740515089",
    appId: "1:1012740515089:web:0364bec3af382df43898b0",
    measurementId: "G-6QKDZL5GJ2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const getAuthentication = getAuth(app)

  