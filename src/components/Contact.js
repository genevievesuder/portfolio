import { useNavigate } from "react-router-dom"

const Contact = () => {
const navigate = useNavigate()

  return (
    <div className="contact">
      <div className="connect">
      <img className="con-1" src={process.env.PUBLIC_URL+"/connect.png"} alt="let's connect"/>
      </div>
      <div className="connect-links">
        <span onClick={() => window.open('https://www.linkedin.com/in/genevievesuder/', '_blank')} className="connect-link2">linkedin ☚</span>
        <span onClick={() => window.location = 'mailto:genevievesuder@gmail.com'} className="connect-link1">email</span> 
        <span onClick={() => window.open('https://calendly.com/genevievesuder/30min', '_blank')} className="connect-link3">☛ calendly</span>
      </div>
        <img className="design-con" src={process.env.PUBLIC_URL+"/bg2.png"} alt="line"/>
    </div>
  )
}

export default Contact