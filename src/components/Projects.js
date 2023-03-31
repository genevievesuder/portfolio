import React from 'react'
const Projects = () => {
  return (
    <div className="projects-container">
    <div className="portfolio-header">
    <img className="portfolio-title" src={process.env.PUBLIC_URL+"/port.png"} alt="project portfolio"/>
    </div>
     
<br/>
      <div className="project-card">
        <div className="proj-header">
       <span className='proj-name'>Ocular</span>
       <span  className='proj-timeframe'>Timeframe: 2 weeks</span><br/>
        </div>
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <h4>Screenshots</h4>
        <label>site main</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc1.png"} alt="ocular site screenshot"/>
        <label>navbar</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc2.png"} alt="ocular site screenshot"/>
        <label>customizable user profile</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc3.png"} alt="ocular site screenshot"/>
        <label>public forum</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc4.png"} alt="ocular site screenshot"/>
        <label>dictionary</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/oc5.png"} alt="ocular site screenshot"/>
        </div>
        <div className='proj-right'>
          <h3>An optometry resource app + community forum</h3>
          <hr/>
          <p className='proj-desc'>project description</p>
        </div>
        </div>
        <span onClick={() => window.open('https://github.com/genevievesuder/ocular-2-frontend', '_blank')} className="visit">Visit github repo</span>
      </div>
      <br/>
      <div className="project-card">
        <div className="proj-header">
      <span className='proj-name'>Mystery at Rosewood</span>
       <span  className='proj-timeframe'>Timeframe: 3 weeks</span><br/>
        </div>
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <h4>Screenshots</h4>
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
          <h3>A point-and-click adventure game</h3>
          <hr/>
          <p className='proj-desc'>project description</p>
        </div>
        </div>
        <span onClick={() => window.open('https://github.com/genevievesuder/rosewood_mystery_front', '_blank')} className="visit">Visit github repo</span>
      </div>

    </div>
  )
}

export default Projects