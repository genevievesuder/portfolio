import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
    <div className='linkbar'>
    <Link onClick={() => window.open('https://github.com/genevievesuder', '_blank')}  className="link">GITHUB</Link>
    <Link onClick={() => window.open('https://www.linkedin.com/in/genevievesuder/', '_blank')} className="link">LINKEDIN</Link>
    <Link onClick={() => window.open('https://medium.com/@genevievesuder', '_blank')} className="link">MEDIUM</Link>
    <Link onClick={() => window.location = 'mailto:genevievesuder@gmail.com'} className="link">CONTACT ME</Link>
    <Link onClick={() => window.open('https://calendly.com/genevievesuder/30min', '_blank')} className="link">MEET WITH GENEVIEVE</Link><br/>
    </div>
    <p className='copyright'>Created with React © 2023 Copyright: Genevieve Suder</p>
    </>
    )
}

export default Links