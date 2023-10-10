import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { AnimeDataContext } from '../../App'
import { apiData } from '../../flowchart'

const Questions = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
  console.log(apiData)

// √√√ import context to use for future
    const { animeData, setAnimeData,currentHead, setCurrentHead, answersArray, setanswersArray  } = useContext(AnimeDataContext)

    const [animeTitle, setAnimeTitle] = useState('');

    let currentObject = undefined;

    for (let i=0; i<animeData.length; i++){
        if (animeData[i].head === currentHead) {
            currentObject = animeData[i];
            console.log(animeData[i])
            break
        }
      }

      answersArray.map(() => {})


      // do api thing here ******
      // https://api.jikan.moe/v4/anime/{id}/pictures
      // api for Jikan Moe to get images
      useEffect(() => {
        if (currentObject.type === 'a') {
          // Make an API call using currentObject.tails[0] (if needed)
        }
      
        // Use a single fetch statement for the animeTitle API call
        fetch(`https://api.jikan.moe/v4/anime?q=${animeTitle}&limit=3`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Handle the fetched data as needed
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            // Handle the error as needed
          });
      }, [animeTitle, currentObject.type]);
      


      // √√√ grabs the data(tails) of the button object
      // maybe if I '+'= it will add it the list or we can apped it to an array
      const handleClick = (answerObject) => {
        setanswerBreadcrumbs(answerObject.ans)
        setanswersArray([...answersArray, answerObject.ans])
        console.log(answerObject) 
        console.log(answerObject.tail) 
        setCurrentHead(answerObject.tail);
        setAnimeTitle(answerObject.tails);
      }
      // √√√ now the handleClick updates!!!
      // can't read last data type since not num, it is a string****
        console.log(answersArray)
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