import React, { useContext, useState } from 'react'
import './index.css'
import { AnimeDataContext } from '../../App'
import { apiData } from '../../flowchart'

const Questions = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
  console.log(apiData)

// import context to use for future
    const { animeData, setAnimeData,currentHead, setCurrentHead  } = useContext(AnimeDataContext)

    const [currentTails, setCurrentTails] = useState(0);

    let currentObject = undefined;

    for (let i=0; i<animeData.length; i++){
        if (animeData[i].head === currentHead) {
            currentObject = animeData[i];
            console.log(animeData[i])
            break
        }
      }

      //grabs the data(tails) of the button object
      // maybe if I '+'= it will add it the list or we can apped it to an array
      const handleClick = (answerObject) => {
        setanswerBreadcrumbs(answerObject.ans)
        console.log(answerObject) 
        console.log(answerObject.tail) 
        setCurrentHead(answerObject.tail);
      }

        console.log(answerBreadcrumbs)
      /*  ***** when we click this button (any button), we should change the current head to be whatever this answer's tails is
      
      handleClick event {
        let currentHead = answerObject.tail
      }

      some button onClick={handleClick} <-- this should change it to tails
      */
  return (
    <div className='questionHere'>
        <h3> {currentObject.ques} </h3>
        <div>
            {
            currentObject.tails.map( (answerObject) => {
            return <button onClick={ () => handleClick(answerObject)} key={JSON.stringify(answerObject)}>{answerObject.ans}</button>
        } ) 
            }
        </div>
    </div>
  )
}

export default Questions