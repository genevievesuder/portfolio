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
            I am a full-stack developer and recent graduate from Flatiron School's software engineering immersive bootcamp. I am skilled in JavaScript, React, Ruby on Rails & Object Oriented Programming.<br/>
            <span className="dots">● ● ●</span>
            <br/>
            I pride myself on finding innovative solutions to complex problems, creating dynamic high-quality apps, and writing clean and meaningful code.<br/>
            <span className="dots">● ● ●</span>
            <br/>
            Software engineering has provided me a creative outlet which utilizes both sides of my mind, creative and logical.<br/>

            I am currently seeking a remote or hybrid software engineering position in the greater Portland area.
          </p>
        </div>
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
            Prior to delving into tech, I gathered over 9 years of experience in customer service and leadership with Nordstrom.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
             Starting my first job as a barista at the Nordstrom E-bar in 2010, I worked my way up the ladder to service experience manager. My experience at Nordstrom was truly invaluable, as I gained my confidence in professionalism. I developed strong skills in problem-solving, communication, leadership, and teamwork. I grew to be adaptable, forward-thinking, analytical, and bold.
             <br/>
            <span className="dots">● ● ●</span>
            <br/>
            I had success in many roles during my time with the company, including Full-line salesperson at beauty brands Bare Minerals and Clinique, counter manager at Bobbi Brown, service experience assistant manager, and Rack accessories/home/handbags/lingerie manager, and service experience manager.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            I was also awarded the Nordstrom customer service all-star award, which is the most prestigious award given to any Nordstrom employee.
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
            Seeking more professional independence and desire to apply my creativity to my career, I operated various online shops and worked as a freelance artist. I have always been creatively driven, with a passion for art. If something interests me, I must discover everything I can about it. What others see as a challenge, I see as a welcoming opportunity to learn. I have tought myself digital art, animation, photography, film making, furniture making, painting, drawing, sewing, embroidery and cross stitch, sculpting, jewelry making, and so much more.
            <br/>
            <span className="dots">● ● ●</span>
            <br/>
            Working independently gave me the flexibility to do more of what I love, travel, and spend more time with my friends and family. It also taught me preserverence, and to be more self-motivated and industrious. 
          <br/>
          </p>    
        </div>
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
      </div>
    </div>
  )
}

export default About