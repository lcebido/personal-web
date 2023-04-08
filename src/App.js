import React from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./sass/global.scss"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ozJhYROgp9DAgz0WcUYVOSdlAgt9D9U",
  authDomain: "lcebido-personalweb.firebaseapp.com",
  projectId: "lcebido-personalweb",
  storageBucket: "lcebido-personalweb.appspot.com",
  messagingSenderId: "1003980046880",
  appId: "1:1003980046880:web:a6e07768d407eb21dfb245",
  measurementId: "G-9Z0N334ZLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Home />
      <Header />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
