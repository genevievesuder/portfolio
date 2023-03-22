import { Link } from 'react-router-dom'


const Links = () => {
  return (
    <div className='linkbar'>
    <Link className="link">GITHUB</Link>
    <Link className="link">LINKEDIN</Link>
    <Link className="link">MEDIUM</Link>
    <Link className="link">EMAIL</Link><br/>
    <span className='copyright'>Created with React © 2023 Copyright: Genevieve Suder</span>
</div>
  )
}

export default Links