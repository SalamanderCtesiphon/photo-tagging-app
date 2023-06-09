import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import GridSquare from './components/GridSquare';
import gridSquares from './data/GridSquares';
import SelectionList from './components/SelectionList';

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

  function showDropDown(id) {
    const drop = document.getElementById('drop')
    drop.style.visibility = 'visible'
  }
  
  return (
    <div className="App">
      <Header/>
      <div className='backgroundImage'>
        {gridSquares.map((item) => {
          return <GridSquare 
                    key={item.id} 
                    className='grid' 
                    item={item}
                    />
        })}
        <div id='pennsylvester' onClick={() => showDropDown()}></div>
        <div id='baby-wizard' onClick={() => showDropDown()}></div>
        <div id='ghost-in-a-jar' onClick={() => showDropDown()}></div>
        <SelectionList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
