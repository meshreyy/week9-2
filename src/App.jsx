import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


function App() {
  //App stores a list of todos

  return (
    <div>
      <Todo />
    </div>
  );

};

//Todo displays the title and whether it's done or not

function Todo() {
  return (
    <div style={{backgroundColor:'blue', color:'pink', fontSize:'50px'}} >
      Hello, World!
    </div>
  )
}


export default App
