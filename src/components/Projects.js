import React from 'react'

const Projects = () => {
  return (
    <div className="projects-container">

      <div className="project-1">
        <div className="proj-header">
        <span className='proj-name'>Ocular</span><span  className='proj-timeframe'>Timeframe: 2 weeks</span><br/>
        </div>
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc1.png"} alt="ocular site screenshot"/>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc2.png"} alt="ocular site screenshot"/>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc3.png"} alt="ocular site screenshot"/>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc4.png"} alt="ocular site screenshot"/>
        </div>
        <div className='proj-right'>
          <p className='proj-desc'>project description</p>
        </div>
        </div>
        <span className="visit">Visit github repo</span>
      </div>





    </div>
  )
}

export default Projects