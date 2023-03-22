import React from 'react'

const Resume = ({resume}) => {
  return (
    <div className="resume-container">
      <object className="resume" width="100%" height="400" data={resume} type="application/pdf">   
      </object>
    </div>
  )
}

export default Resume

