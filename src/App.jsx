import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <i><b>
          Clock
        </b></i>
        <Counter></Counter>
      </div>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  setInterval (function () {
    setCount(count+1);
  },1000)

return (
    <div>
      <h1 id="text">{count}</h1>


    </div>
  )
}

export default App
