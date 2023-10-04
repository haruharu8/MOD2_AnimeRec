import { useState, createContext } from 'react'

import './App.css'
import Opaque from './components/opaque/opaque'
import Questions from './components/questions/questions'
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'

function App() {
  {/* here goes the logic */}
  {/* setup context for children
      Probably should have state to set up changing
      anime titles or so */}
  const AnimeDataContext = createContext()

  // probably will take an array of objects
  const [animeData, setAnimeData] = useState ({})

  // probably need something that handles clicks
  

  return (
    <div className='app'>
      {/* return all props here */}
      {/*give all kids context for them to use
        AnimeDataContext probably needs a state value?? */}
      <AnimeDataContext.Provider value={{animeData, setAnimeData}} >
        <Breadcrumbs />
        <Questions />
        <Opaque />
      </AnimeDataContext.Provider>
    </div>
  )
}

export default App
