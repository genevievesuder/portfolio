import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="bio">
      <img className="hello"src="https://see.fontimg.com/api/renderfont4/Yz06j/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVsbG8uIA/buljirya-personal-use.png" alt="Fancy fonts"/>
        {/* <img className="about-img1" src={process.env.PUBLIC_URL+"/photo.jpg"} alt="Genevieve"/>
        <img className="img-circle" src={process.env.PUBLIC_URL+"/circle.png"} alt="circle"/> */}
        <img className="gg" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
        <p className="bio-p">I'm Genevieve. </p>
      </div>
      <div className="bio2">
        <img className="gg2" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
        <img className="gg3" src={process.env.PUBLIC_URL+"/gg2.jpg"} alt="gigi"/>
      </div>
      <img className="design" src={process.env.PUBLIC_URL+"/design.png"} alt="line"/>
    </div>
  )
}

export default About