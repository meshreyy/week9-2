import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  function increase()
  {
    setCount(count=>count+1);
  }
  function decrease()
  {
    setCount2(count=>count-1);
  }
  
  return (
    <div>
      <Counter count={count} count2={count2}></Counter>
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
    </div>
  )

}

function Counter(props)
{
    useEffect(function(){
      console.log("mounts");

      return function(){
        console.log("unmounts");
      }
    },[]);

    useEffect(function(){
      console.log("count changed!!")
    },[props.count])

    return(
      <div>
        Counter1 {props.count} <br></br>
        Counter2 {props.count2} <br></br>
      </div>
    )
}






export default App
