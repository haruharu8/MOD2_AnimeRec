import React, { useContext } from 'react'
import './index.css'
import { AnimeDataContext } from '../../App'

// √√√ this handles the 'breadcrumbs' bar on  the top

// **get logic to append all of the answers that the user clicked**
// needs to add all history to an array 

const Breadcrumbs = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
    const {answersArray} = useContext(AnimeDataContext)
    console.log(answersArray)
  return (
    <div>
        <p id="bready">
        this tracks history below
        </p>
        <h4>{answerBreadcrumbs}</h4>
        {/* map thru array to show all previous answers */}
    </div>
  )
}

export default Breadcrumbs