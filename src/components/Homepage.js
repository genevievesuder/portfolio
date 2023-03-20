import Cards from "./Cards"

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left-container">
        <div className="welcome-box">
            <p className="hi">Hi 👋, I'm</p>
            <img className="name" src={process.env.PUBLIC_URL+"/genevieve.png"} alt="Genevieve"/><br/>
            <span className="fsd">FULL-STACK DEVELOPER</span>
            <p>quick about me section...</p>
        </div>
      </div>
      <div className="right-container">
            
      </div>
      <div className='bottom-container'>
        <Cards />
      </div>
    </div>
  )
}

export default Homepage