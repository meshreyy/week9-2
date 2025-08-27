import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //consitional rendering
  let [counterVisible, setCounterVisible] = useState(true);

   useEffect(function () {
    setInterval(function () {
      setCounterVisible(count => !count);
    },5000);
  },[])


  return (
    <div>
      CLOCK
      {counterVisible && <Counter></Counter>}
      THE END
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);


  //mounting
  useEffect(function () {
    console.log("mounting");
    let clock = setInterval(function () {
      console.log("ticking");
      setCount(count => count + 1);
    }, 1000);

    //unmounting or cleanup
    return function() {
      console.log("unmounted");
      clearInterval(clock);
    }
    
  }, [])


  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}






export default App
