import { useState } from 'react'

import './App.css'
import Opaque from './components/opaque/opaque'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Opaque />

    </>
  )
}

export default App
