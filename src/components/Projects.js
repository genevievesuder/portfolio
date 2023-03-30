import React from 'react'

const Projects = () => {
  return (
    <div className="projects-container">

      <div className="project-card">
        <div className="proj-header-1">
        <span className='proj-name-1'>Mystery at Rosewood</span><span  className='proj-timeframe'>Timeframe: 3 weeks</span><br/>
        </div>
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <label>site main</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw1.png"} alt="rosewood site screenshot"/>
        <label>gameplay</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw9.png"} alt="rosewood site screenshot"/>
        <label>start your new job at rosewood public library</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw2.png"} alt="rosewood site screenshot"/>
        <label>track clues and keep notes in your journal</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw7.png"} alt="rosewood site screenshot"/>
        <label>search the library database</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw3.png"} alt="rosewood site screenshot"/>
        <label>explore the library</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw4.png"} alt="rosewood site screenshot"/>
        <label>meet interesting characters & learn their stories</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw5.png"} alt="rosewood site screenshot"/>
        <label>investigate objects</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw6.png"} alt="rosewood site screenshot"/>
        <label>discover hints from helpful customers</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/rw8.png"} alt="rosewood site screenshot"/>
        </div>
        <div className='proj-right'>
          <p className='proj-desc'>project description</p>
        </div>
        </div>
        <span className="visit">Visit github repo</span>
      </div>

      
      <div className="project-card">
        <div className="proj-header-2">
        <span className='proj-name-2'>Ocular </span><span  className='proj-timeframe'>Timeframe: 2 weeks</span><br/>
        </div>
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <label>site main</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc1.png"} alt="ocular site screenshot"/>
        <label>navbar</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc2.png"} alt="ocular site screenshot"/>
        <label>customizable user profile</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc3.png"} alt="ocular site screenshot"/>
        <label>public forum</label>
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