import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import EmptyDiv from './components/EmptyDiv';
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

  function makeDivs() {
    const divArr = []
      for (let i = 0; i < 2300; i++) {
      divArr.push(<EmptyDiv key={i}/>)
    }
    return divArr
  }

  return (
    <div className="App">
      <Header />
      <div className='backgroundImage'>{makeDivs()}</div>
      <Footer />
    </div>
  );
}

export default App;
