import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


function App() {

  return (<div>
    <Card>
      <h1>Card Title</h1>
      <p>This is some content inside card</p>
    </Card>
    <Card>
      <h1>Another card</h1>
      <p>This card has different content!</p>
    </Card>
  </div>)

}


function Card({ children }) {
  return (<div style={{
    border:'1px solid #ccc',
    color:"black",
    boxShadow:'2px 2px 5px rgba(0,0,0,0.1)',
    padding:'10px',
    margin:'10px'
  }}>
    {children}
  </div>);

};







export default App
