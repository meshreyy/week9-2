import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counterVisible, setCounterVisible] = useState(true);

   useEffect(function () {
    setInterval(function () {
      setCounterVisible(count => !count);
    },5000);
  },[])


  return (
    <div>
      CLOCK
      {counterVisible ? <Counter></Counter> : null}
      THE END
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);


  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
    }, 1000)
    console.log("clock is increasing")
  }, [])


  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}






export default App
