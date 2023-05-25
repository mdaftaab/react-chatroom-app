import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwvw5ZViADgD9gO8Kg_hSpdd8jqUMMe0",
  authDomain: "react-chat-app-b9585.firebaseapp.com",
  databaseURL: "https://react-chat-app-b9585-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-b9585",
  storageBucket: "react-chat-app-b9585.appspot.com",
  messagingSenderId: "753479411052",
  appId: "1:753479411052:web:dd2d52c25e6ff30aac7f49",
  measurementId: "G-8Q76MEHVKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
