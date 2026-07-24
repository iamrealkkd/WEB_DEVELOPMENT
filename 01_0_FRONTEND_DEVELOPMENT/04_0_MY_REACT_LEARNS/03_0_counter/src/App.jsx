import { useState } from 'react'
import './App.css'
function App() {

// let counter = 15
const[counter, setCounter] = useState(0)

const addValue = () =>{
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
 // No matter how many setCounter calls there are, React doesn't care because it batches everything together and runs them at once.
  
}
const removeValue = () =>{
  setCounter(counter - 1)
  
}


  return (
    <>
    <h1>Krishna {counter}</h1>
    <h2>Counter value: {counter} </h2>
    <button 
    onClick={addValue}
    >Add value</button>{" "}
    <button
     onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>

      )
}

export default App
