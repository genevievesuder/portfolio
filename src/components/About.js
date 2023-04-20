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
          I am a full stack developer with a background in customer support, leadership, and management. I recently graduated from Flatiron School's software engineering immersive boot camp, which provided me with a solid foundation in Object Oriented Programming, React, JavaScript, Ruby, and Rails.
            <br/><span className="dots">● ● ●</span>
            <br/>
            I pride myself on finding innovative solutions to complex problems, creating dynamic, high-quality apps, and writing clean and meaningful code.<br/>
            <span className="dots">● ● ●</span>
            <br/>
            At my core, I am an artist and visionary thinker with a need to create. I love learning new skills and undertaking new challenges. Software engineering has provided me with a creative outlet that utilizes both sides of my mind, imaginative and logical. Learning to code has been a wonderful and rewarding challenge which I have gladly welcomed, and I look forward to increasing my knowledge and further developing my technical skillset.       
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            <span className="current"><b>I am currently seeking a software engineering position within the greater Seattle area.</b></span>
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
        <img className="gg2" src={process.env.PUBLIC_URL+"/homer.jpg"} alt="gigi"/>
        <img className="gg3" src={process.env.PUBLIC_URL+"/cannon.jpg"} alt="gigi"/>
        <img className="gg4" src={process.env.PUBLIC_URL+"/ror.jpg"} alt="gigi"/>
        <br/>
        <div className="bio-div">
          <h3>Professional Experience</h3>
          <p>
          Before delving into tech, I gathered over nine years of experience in customer service and leadership with Nordstrom, where I built a solid foundation for my professional confidence.
	       <br/>
           <span className="dots">● ● ●</span>
         <br/>
            I grew to be adaptable, forward-thinking, analytical, and bold as I developed strong skills in problem-solving, communication, leadership, teaching & training, teamwork, and customer support, which awarded me the Nordstrom customer service all-star award, the most prestigious award given to any Nordstrom employee.
          </p>
        </div>
        <img className="gg5" src={process.env.PUBLIC_URL+"/sylvie.jpg"} alt="gigi"/>
        <img className="gg6" src={process.env.PUBLIC_URL+"/winter.jpg"} alt="gigi"/>
        <br/>
        <div className="bio-div">
        <h3>Following that</h3>
          <p>
            While there was opportunity for a great future within the company, I knew that retail was not my passion, and I began my search for a new career in 2019.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            Seeking more professional independence and a desire to apply my creativity to my career, I operated various online shops and worked as a freelance artist and an art instructor at an elementary school in Hawaii, teaching grades 3 & 5. 
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            Working independently gave me the flexibility to do more of what I love, travel, and spend more time with my friends and family, while also teaching me to be more industrious and self-motivated.
          </p>    
        </div>
        <br/>
        <div className="bio-div">
        <h3>More about Genevieve</h3>
          <p>
            When I'm not keeping busy with coding, I'm most likely trying out new art techniques, hunting for vintage finds at thrift stores, or spending time with my wonderful family.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            I was born and raised in Alaska, where I grew up four-wheeling, camping, fishing, and enjoying the land of the midnight sun--while not-so-much enjoying the seven months of brisk winter and darkness.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            I love to travel, explore new places, and spend time in nature. I enjoy getting lost in a great book, a captivating tv show, or a fantastic videogame.
          </p>    
        </div>
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
      </div>
    </div>
  )
}

export default About