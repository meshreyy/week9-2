import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


function App() {

  return <div style={{ display: "flex" }}>
    <Card children={"hi there"}></Card>
    <Card children={<div style={{ color: "green" }}>
      What do you want to post?<br/><br/>
      <input type={"text"}></input></div>}></Card>

  </div>
}


function Card({ children }) {
  return <div style={{
    backgroundColor: "black", color: "white",
    padding: 10, margin:10, borderRadius:10
  }}>
    {children}
  </div>

}







export default App
