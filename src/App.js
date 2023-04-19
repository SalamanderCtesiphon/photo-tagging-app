import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import GridSquare from './components/GridSquare';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9VGZM9yQQe1lMQ9jxHD7lRZX5owCCTM",
  authDomain: "photo-tagging-app-438b7.firebaseapp.com",
  projectId: "photo-tagging-app-438b7",
  storageBucket: "photo-tagging-app-438b7.appspot.com",
  messagingSenderId: "737957340387",
  appId: "1:737957340387:web:00353f548551c5de0711d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [gridSquares, setGridSquares] = useState([])

  function makeDivs() {
    for (let i = 0; i < 945; i++) {
      const id = i
      const newGridSquare = {id}

      gridSquares.push(newGridSquare)
      setGridSquares([gridSquares])
    }
    return gridSquares
  }
  
  return (
    <div className="App">
      <Header makeDivs={makeDivs}/>
      <div className='backgroundImage'>
        {gridSquares.map((gridSquare) => {
          return <GridSquare className='grid' gridSquares={gridSquare}/>
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
