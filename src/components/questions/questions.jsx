import React, { useContext } from 'react'
import './index.css'
import { AnimeDataContext } from '../../App'

const Questions = () => {
    let answers = ['yes','no','maybe so']
// import context to use for future
    const { animeData, setAnimeData,currentHead, setCurrentHead } = useContext(AnimeDataContext)
    let currentObject = undefined;

    for (let i=0; i<animeData.length; i++){
        if (animeData[i].head === currentHead) {
            currentObject = animeData[i];
            console.log(animeData[i])
            break
        }
      }

      // whene we click this button (any button), we should change the 
      // current head to be whatever this answer's tails is
  return (
    <div className='questionHere'>
        <h3> {currentObject.ques} </h3>
        <div>
            {
            currentObject.tails.map( (answerObject) => {
            return <button key={JSON.stringify(answerObject)}>{answerObject.ans}</button>
        } ) 
            }
        </div>
    </div>
  )
}

export default Questions