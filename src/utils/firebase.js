// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8mKCuiEnY1WFUSRrM_Ns9rOnwDfS_BcU",
  authDomain: "my-netflix-gpt-app.firebaseapp.com",
  projectId: "my-netflix-gpt-app",
  storageBucket: "my-netflix-gpt-app.appspot.com",
  messagingSenderId: "548677024328",
  appId: "1:548677024328:web:519a386c1ee9584d28b67d",
  measurementId: "G-Z87DF9T254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
