import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


function App() {

  const todos = [{
    title: "Go to gym",
    done: false
  },
  {
    title: "eat lunch",
    done: true
  }];

  const TodoComponent = todos.map(todo => <Todo title={todo.title} done={todo.done} />)
  return (
    <div>
      {TodoComponent}
    </div>
  );

};

function Todo({title, done }) {
  return <div>
    {title} - {done ? "Done!" : "Not Done!"}
  </div>
}







export default App
