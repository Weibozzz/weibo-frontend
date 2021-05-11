import React, { useState } from 'react'
import './App.css'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test test={'props data'}></Test>
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <ul>
        <li>12</li>
        <li>12</li>
        <li>12</li>
      </ul>
    </div>
  )
}

export default App
