import { useState } from 'react'

import './App.css'
import Todos from './Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos></Todos>
    </>
  )
}

export default App
