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
        <span className='proj-technologies'>RUBY ON RAILS // REACT // CUSTOM CSS + MUI</span><br/>
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
          <br/>
          <strong>About Ocular</strong>
          <p className='proj-desc'>
          Ocular provides a space for students, doctors and all who are interested in the field of optometry and eye health. Users can create profiles, read medical terms and definitions in the ocular dictionary, save them as favorites to their profile, read & create posts in the community forum, learn about eye anatomy, and more.
          </p>
          <strong>Features & Capabilities</strong>
          <ul className="proj-features">
            <li>User Authentication & Authorization with bcrypt</li>
            <li>RESTful site routing with react router</li>
            <li>Custom backend API built on Rails</li>
            <li>Frontend application built using React</li>
            <li>Full CRUD + database persistence</li>
            <li>Custom CSS</li>
          </ul>
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
          <br/>
          <strong>Game Description</strong>
          <p className='proj-desc'>
          In this video game, players are thrown into a mystery at a library. The game is filled with romance, betrayal, and secrets. As players navigate through the library, they must uncover clues and solve puzzles to unravel the mystery. Along the way, they will encounter a cast of characters, each with their own stories to tell.
Is something supernatural going on, or have you read one too many scary stories?
          </p>
          <strong>Features & Capabilities</strong>
          <ul className="proj-features">
            <li>User Authentication & Authorization with bcrypt</li>
            <li>RESTful site routing with react router</li>
            <li>Custom backend API built on Rails</li>
            <li>Built in Google Books API search engine</li>
            <li>Frontend application built using React</li>
            <li>Full CRUD + database persistence</li>
            <li>Multiple mini-games/puzzles</li>
            <li>React drag and drop features</li>
            <li>Custom CSS</li>
            <li>Custom digital art, storyline, & character design</li>
          </ul>
        </div>
        </div>
        <span onClick={() => window.open('https://github.com/genevievesuder/rosewood_mystery_front', '_blank')} className="visit">Visit github repo</span>
      </div>

      <div className="project-card">
        <div className="proj-header">
       <span className='proj-name'>Hotel Azure</span>
       <span  className='proj-timeframe'>Timeframe: 2 weeks // Group Project</span><br/>
        </div>
        <span className='proj-technologies'>RUBY // SINATRA // REACT // CUSTOM CSS</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <h4>Screenshots</h4>
        <label>reservation page - room select</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az6.png"} alt="ocular site screenshot"/>
        <label>reservation page - date select</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az1.png"} alt="ocular site screenshot"/>
        <label>login/signup page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az2.png"} alt="ocular site screenshot"/>
        <label>amenities page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az3.png"} alt="ocular site screenshot"/>
        <label>amenities page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az4.png"} alt="ocular site screenshot"/>
        <label>user reservations page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/az5.png"} alt="ocular site screenshot"/>
        </div>
        <div className='proj-right'>
          <h3>Hotel website & reservation booking engine</h3>
          <hr/>
          <br/>
          <strong>About Hotel Azure</strong>
          <p className='proj-desc'>
          Hotel Azure is a small, upscale hotel in some city somewhere. Azure's website allows users to view the hotel's amenities, create reservations, sign up for an account, and sign <i>into</i> their account where they can view and manage their existing reservations.

This single page application was built on a Ruby/Sinatra backend and a Reactjs frontend.</p>
          <strong>Features & Capabilities</strong>
          <ul className="proj-features">
            <li>User Authentication & Authorization with bcrypt</li>
            <li>RESTful site routing with react router</li>
            <li>Custom backend API built on Sinatra</li>
            <li>Frontend application built using React</li>
            <li>Full CRUD + database persistence</li>
            <li>Custom CSS</li>
          </ul>
        </div>
        </div>
        <span onClick={() => window.open('https://github.com/genevievesuder/phase-3-frontend', '_blank')} className="visit">Visit github repo</span>
      </div>
      <br/>

      <div className="project-card">
        <div className="proj-header">
       <span className='proj-name'>National Parks Website</span>
       <span  className='proj-timeframe'>Timeframe: 2 weeks // Group Project</span><br/>
        </div>
        <span className='proj-technologies'>REACT // JSON // CUSTOM CSS // MUI</span><br/>
        <div className="proj-main">
        <div className='proj-left'>
        <h4>Screenshots</h4>
        <label>site main</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np1.png"} alt="ocular site screenshot"/>
        <label>explore page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np2.png"} alt="ocular site screenshot"/>
        <label>park search</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np3.png"} alt="ocular site screenshot"/>
        <label>park details card</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np4.png"} alt="ocular site screenshot"/>
        <label>reviews page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np5.png"} alt="ocular site screenshot"/>
        <label>park trivia page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np6.png"} alt="ocular site screenshot"/>
        <label>trivia question</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np7.png"} alt="ocular site screenshot"/>
        <label>game over page</label>
        <img className="proj-img" src={process.env.PUBLIC_URL+"/np8.png"} alt="ocular site screenshot"/>
        </div>
        <div className='proj-right'>
          <h3>National Park travel guide, reviews + trivia</h3>
          <hr/>
          <br/>
          <strong>About Hotel Azure</strong>
          <p className='proj-desc'>

          This National Park website is a single-page React application which allows users to learn about and discover new national parks, submit reviews about their visits and play fun park-related trivia. Users can also book a reservation at one of the 63 US National Parks, view a list of all National Parks and learn more about each park's climate, location, and more.</p>
          <strong>Features & Capabilities</strong>
          <ul className="proj-features">
            <li>RESTful site routing with react router</li>
            <li>Custom JSON data as mock API</li>
            <li>Frontend application built using React</li>
            <li>Custom CSS</li>
          </ul>
        </div>
        </div>
        <span onClick={() => window.open('https://github.com/andrrowens/phase-2-group-project', '_blank')} className="visit">Visit github repo</span>
      </div>

    </div>
  )
}

export default Projects