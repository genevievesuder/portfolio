import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="bio">
      <img className="hello"src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVsbG8uIA/buljirya-personal-use.png" alt="Fancy fonts"/>
        {/* <img className="about-img1" src={process.env.PUBLIC_URL+"/photo.jpg"} alt="Genevieve"/>*/}        
        <img className="img-circle" src={process.env.PUBLIC_URL+"/circle.png"} alt="circle"/>
        <img className="imgg" src="https://see.fontimg.com/api/renderfont4/w1pm9/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SSdtIEdpZ2k/regikan.png" alt="Serif fonts"/><br/>
        <span className="smiley">☺</span>
        {/* <img className="imgg" src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SW0gR2lnaQ/buljirya-personal-use.png" alt="Fancy fonts"/> */}
        <img className="gg" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
        <div className="bio-div">
          <p>About section</p>  
        </div>
      </div>
      <div className="bio2">
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
        <img className="gg2" src={process.env.PUBLIC_URL+"/homer.jpg"} alt="gigi"/>
        <img className="gg3" src={process.env.PUBLIC_URL+"/cannon.jpg"} alt="gigi"/>
        <img className="gg4" src={process.env.PUBLIC_URL+"/ror.jpg"} alt="gigi"/>
        <br/>
        <div className="bio-div">
          <p>About section</p>  
        </div>
        <img className="gg5" src={process.env.PUBLIC_URL+"/sylvie.jpg"} alt="gigi"/>
        <img className="gg6" src={process.env.PUBLIC_URL+"/winter.jpg"} alt="gigi"/>
        <br/>
        <div className="bio-div">
          <p>About section</p>  
        </div>
        {/* <img className="gg7" src={process.env.PUBLIC_URL+"/cabin.jpg"} alt="gigi"/>
        <img className="gg8" src={process.env.PUBLIC_URL+"/epcot.jpg"} alt="gigi"/>
        <div className="bio-div">
          <p>About section</p>  
        </div>
        <img className="gg9" src={process.env.PUBLIC_URL+"/koty.jpg"} alt="gigi"/>
        <img className="gg10" src={process.env.PUBLIC_URL+"/renfaire.jpg"} alt="gigi"/> */}
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
      </div>
    </div>
  )
}

export default About