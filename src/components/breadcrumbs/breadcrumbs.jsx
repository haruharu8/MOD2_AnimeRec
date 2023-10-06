import React from 'react'
import './index.css'

// this handles the 'breadcrumbs' bar on  the top

// **get logic to append all of the answers that the user clicked**

const Breadcrumbs = ({answerBreadcrumbs, setanswerBreadcrumbs}) => {
  return (
    <div>
        <p id="bready">
        breadcrumbs
        {/* put in  */}
        </p>
        <h3>{answerBreadcrumbs}</h3>
    </div>
  )
}

export default Breadcrumbs