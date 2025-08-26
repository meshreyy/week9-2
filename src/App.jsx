import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//every 5 sec it goes

function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect (function(){
    setInterval(function(){
      setCounterVisible(count=> !count)
    },5000);
  },[])

  return (
    <>
      <div>
        hi
        {counterVisible ? <Counter></Counter> : null}
        hello
      </div>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
    }, 1000)
    console.log("mounted");
  }, []); //dependancy array

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  )
}

export default App
