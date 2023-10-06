import React from 'react'
import './index.css'

// this handles the 'breadcrumbs' bar on  the top

// **get logic to append all of the answers that the user clicked**

const Breadcrumbs = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
  return (
    <div>
        <p id="bready">
        this tracks history below
        {/* put in  */}
        </p>
        <h4>{answerBreadcrumbs}</h4>
    </div>
  )
}

export default Breadcrumbs