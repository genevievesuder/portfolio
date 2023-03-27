import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="bio">
      <img className="hello"src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVsbG8uIA/buljirya-personal-use.png" alt="Fancy fonts"/>
        {/* <img className="about-img1" src={process.env.PUBLIC_URL+"/photo.jpg"} alt="Genevieve"/>
        <img className="img-circle" src={process.env.PUBLIC_URL+"/circle.png"} alt="circle"/> */}
        <img className="imgg" src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SW0gR2lnaQ/buljirya-personal-use.png" alt="Fancy fonts"/>
        <img className="gg" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
        <div className="bio-div">
          <p>About section</p>  
        </div>
      </div>
      <div className="bio2">
        <img className="gg2" src={process.env.PUBLIC_URL+"/homer.jpg"} alt="gigi"/>
        <img className="gg3" src={process.env.PUBLIC_URL+"/eugene.jpg"} alt="gigi"/>
        <img className="gg4" src={process.env.PUBLIC_URL+"/ror.jpg"} alt="gigi"/>
        <br/>
        <img className="gg5" src={process.env.PUBLIC_URL+"/sylvie.jpg"} alt="gigi"/>
        <img className="gg6" src={process.env.PUBLIC_URL+"/winter.jpg"} alt="gigi"/>
        <br/>
        <img className="gg7" src={process.env.PUBLIC_URL+"/cabin.jpg"} alt="gigi"/>
        <img className="gg8" src={process.env.PUBLIC_URL+"/epcot.jpg"} alt="gigi"/>
      </div>
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
    </div>
  )
}

export default About