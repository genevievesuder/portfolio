import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{lineHeight:7}} className="not-found">
      <h2>Uh oh! You appear to be lost.</h2>
      <button className="gohome" onClick={() => navigate("/")}>← Let's get you back home</button>
    </div>
  )
}

export default NotFound