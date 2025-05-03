import {useState} from 'react'
import './App.css'
import Navbar from "./components//Navbar/Navbar.jsx"

function App() {

 return (
  <div>
   <Navbar title="roBlog" />
   <Navbar title="GoBugy" />
   <Navbar title="SiRobo" />
  </div>
 );
}

export default App