import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter></Counter>
      </div>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  {/*once on first render it gets initialized to 0 
  this will not re-initialize count to 0
*/}


{/*
useEffect will render in loop but not the logic inside it
Guarding our setInterval from re-renders
*/}


useEffect(function() {
   setInterval(function () {
    setCount(count => count + 1);
  }, 1000)
  console.log("mounted");
}, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  )
}

export default App
