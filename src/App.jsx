import { useState } from 'react'

import './App.css'
import Opaque from './components/opaque/opaque'
import Questions from './components/questions/questions'
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Breadcrumbs />
      <Questions />
      <Opaque />
    </>
  )
}

export default App
