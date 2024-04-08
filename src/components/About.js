import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const About = () => {
  return (
    <div className="about">
      <div className="bio">
        <img className="hello"src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVsbG8uIA/buljirya-personal-use.png" alt="Fancy fonts"/>
        <img className="img-circle" src={process.env.PUBLIC_URL+"/circle.png"} alt="circle"/>
        <img className="imgg" src="https://see.fontimg.com/api/renderfont4/w1pm9/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SSdtIEdpZ2k/regikan.png" alt="Serif fonts"/><br/>
        <span className="smiley">☺</span>
        <img className="gg" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
        <div className="bio-div">
          <h3>About Me</h3>
          <p>
          I am a full stack developer & graduate of Flatiron School with a background in customer relations, leadership, and management.
            <br/><span className="dots">● ● ●</span>
            <br/>
            As a junior software developer with a unique blend of artistic abilities and people management skills, I bring a fresh perspective to the world of technology. With a passion for art and a penchant for problem solving, I approach software development as both a technical challenge and a creative endeavor.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            In my portfolio, you will find examples of my work that showcase both my technical proficiency and my creative approach to problem-solving.
            <br/>
            <br/>
          </p>
        </div>
          <h2 className="technical-skills">//TECHNICAL SKILLS</h2>
        <div className="tech-logo-div">
          <Tooltip title="React">
          <img src={process.env.PUBLIC_URL+"/logos/react.JPG"} className="tech-logos" alt="react"/>
          </Tooltip>
          <Tooltip title="Ruby">
          <img src={process.env.PUBLIC_URL+"/logos/ruby.JPG"} className="tech-logos" alt="ruby"/>
          </Tooltip>
          <Tooltip title="Rails">
          <img src={process.env.PUBLIC_URL+"/logos/rails.JPG"} className="tech-logos" alt="rails"/>
          </Tooltip>
          <Tooltip title="JavaScript">
          <img src={process.env.PUBLIC_URL+"/logos/js.JPG"} className="tech-logos" alt="javascript"/>
          </Tooltip>
          <Tooltip title="HTML">
          <img src={process.env.PUBLIC_URL+"/logos/html.JPG"} className="tech-logos" alt="html"/>
          </Tooltip>
          <Tooltip title="CSS">
          <img src={process.env.PUBLIC_URL+"/logos/css.JPG"} className="tech-logos" alt="css"/>
          </Tooltip>
          <Tooltip title="Sinatra">
          <img src={process.env.PUBLIC_URL+"/logos/sinatra.JPG"} className="tech-logos" alt="sinatra"/>
          </Tooltip>
          <Tooltip title="SQlite">
          <img src={process.env.PUBLIC_URL+"/logos/sqlite.JPG"} className="tech-logos" alt="sqlite"/>
          </Tooltip>
          <Tooltip title="Postgresql">
          <img src={process.env.PUBLIC_URL+"/logos/postgres.JPG"} className="tech-logos" alt="postgres"/>
          </Tooltip>
          <Tooltip title="MUI">
          <img src={process.env.PUBLIC_URL+"/logos/mui.JPG"} className="tech-logos" alt="mui"/>
          </Tooltip>
          <Tooltip title="Procreate">
          <img src={process.env.PUBLIC_URL+"/logos/procreate.JPG"} className="tech-logos" alt="procreate"/>
          </Tooltip>
        </div>
      </div>
      <div className="bio2">
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
        <br/>
        <div className="bio-div">
          <h3>Professional Experience</h3>
          <p>
            
Before venturing into the tech industry, I accumulated over nine years of experience in customer service and leadership roles. 
	       <br/>
           <span className="dots">● ● ●</span>
         <br/>
         This tenure served as a cornerstone in shaping my professional confidence. Throughout my journey, I evolved into an adaptable, forward-thinking, analytical, and bold individual, honing a robust skill set in problem-solving, communication, leadership, teaching & training, teamwork, and customer support.
          </p>
        </div>
        <br/>
        <img className="gg6" src={process.env.PUBLIC_URL+"/winter.jpg"} alt="gigi"/>
        <br/>
        <div className="bio-div">
        <h3>More about Genevieve</h3>
          <p>
            I was born and raised in Alaska, where I grew up four-wheeling, camping, fishing, and enjoying the land of the midnight sun--while not-so-much enjoying the seven months of brisk winter and darkness.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            In my spare time, I love getting lost in fantasy books, cozy video games, or my sketch book.
          </p>    
        </div>
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
      </div>
    </div>
  )
}

export default About