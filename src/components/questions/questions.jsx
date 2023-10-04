import React, { useContext } from 'react'
import './index.css'

const Questions = () => {
    let answers = ['yes','no','maybe so']
// import context to use for future
    const { animeData, setAnimeData } = useContext(AnimeDataContext)

  return (
    <div className='questionHere'>
        <h3>Questions go here</h3>
        <div>
            {
            answers.map( (answer) => {
            return <button>{answer}</button>
        } ) 
            }
        </div>
    </div>
  )
}

export default Questions