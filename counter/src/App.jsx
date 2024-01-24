import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let value=5
  let [value,setValue] = useState(0)
  return (
    <>
    <h1>Counter value: {value}</h1>
    <button onClick={()=>{value=value+1
                          setValue(value)
                          console.log(value)}}>Increase value</button>
    <button onClick={()=>{value=value-1
                          setValue(value)}}>Decrease value</button>
    <p>footer {value}</p>
    </>
  )
}

export default App
