import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div className="connect">
        <img className="con-1"src="https://see.fontimg.com/api/renderfont4/BWVKV/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjQ0NCQzVBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGV0J3MgY29ubmVjdC4/minomu-black.png" alt="Sans Serif fonts"/>
      </div>
      <div className="connect-links">
        <span className="connect-link2">linkedin ☚</span>
        <span className="connect-link1">email</span> 
        <span className="connect-link3">☛ calendly</span>
      </div>
        <img className="design-con" src={process.env.PUBLIC_URL+"/bg2.png"} alt="line"/>
    </div>
  )
}

export default Contact