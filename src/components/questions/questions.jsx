import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { AnimeDataContext } from '../../App'
import { apiData } from '../../flowchart'

const Questions = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
  console.log(apiData)

// √√√ import context to use for future
    const { animeData, setAnimeData,currentHead, setCurrentHead, answersArray, setanswersArray  } = useContext(AnimeDataContext)

    const [currentTails, setCurrentTails] = useState(0);

    let currentObject = undefined;

    for (let i=0; i<animeData.length; i++){
        if (animeData[i].head === currentHead) {
            currentObject = animeData[i];
            console.log(animeData[i])
            break
        }
      }

      // do api thing here ******
      useEffect(() => {
        if (currentObject.type === 'a'){
            //make api call using currentObject.tails[0]
        }
      }, [currentObject])

      // √√√ grabs the data(tails) of the button object
      // maybe if I '+'= it will add it the list or we can apped it to an array
      const handleClick = (answerObject) => {
        setanswerBreadcrumbs(answerObject.ans)
        setanswersArray([...answersArray, answerObject.ans])
        console.log(answerObject) 
        console.log(answerObject.tail) 
        setCurrentHead(answerObject.tail);
      }
      // √√√ now the handleClick updates!!!
      // can't read last data type since not num, it is a string****

        console.log(answerBreadcrumbs)
      /* √√√   when we click this button (any button), we should change the current head to be whatever this answer's tails is
      
      handleClick event {
        let currentHead = answerObject.tail
      }

      some button onClick={handleClick} <-- this should change it to tails
      */
  return (
    <div className='questionHere'>
        <h3> {currentObject.ques} </h3>
        <div>
            {currentObject.type === "q" ? 
            currentObject.tails.map( (answerObject) => {
            return <button onClick={ () => handleClick(answerObject)} key={JSON.stringify(answerObject)}>{answerObject.ans}</button>
        } ) : <div>{currentObject.tails}</div>
            }
        </div>
    </div>
  )
}

export default Questions