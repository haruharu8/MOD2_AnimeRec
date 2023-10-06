import { useState, createContext } from 'react'

import './App.css'
import Opaque from './components/opaque/opaque'
import Questions from './components/questions/questions'
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'
import { apiData } from './flowchart'
export const AnimeDataContext = createContext()


function App() {
  {/* here goes the logic */}
  {/* setup context for children
      Probably should have state to set up changing
      anime titles or so */}
  const [answerBreadcrumbs, setanswerBreadcrumbs] = useState("")

  // probably will take an array of objects
  const [animeData, setAnimeData] = useState(apiData)
  // interate thru animeData for head:20 
      // for (let i=0; i<animeData.length; i++){
      //   if (animeData[i].head === 20) {
      //       console.log(animeData[i])
      //   }
      // }

      console.log(animeData)
  // probably need something that handles clicks
  const [currentHead, setCurrentHead] = useState(0)

  return (
    <div className='app'>
      {/* return all props here */}
      {/*give all kids context for them to use
        AnimeDataContext probably needs a state value?? */}
      <AnimeDataContext.Provider value={{animeData, setAnimeData,currentHead, setCurrentHead}} >
        <Breadcrumbs answerBreadcrumbs = {answerBreadcrumbs}setanswerBreadcrumbs = {setanswerBreadcrumbs} />
        <Questions answerBreadcrumbs = {answerBreadcrumbs}setanswerBreadcrumbs = {setanswerBreadcrumbs}/>
        <Opaque />
      </AnimeDataContext.Provider>
    </div>
  )
}

export default App
