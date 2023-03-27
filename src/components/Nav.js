import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
const navigate = useNavigate()

  return (
    <div className='navbar'>
        {/* <Link className="nav-link" to="/">logo</Link> */}
        <img onClick={() => navigate('/')} className="name" src={process.env.PUBLIC_URL+"/genevieve.png"} alt="Genevieve"/>
        <Link className="nav-link" to="/projects">projects</Link>
        <Link className="nav-link" to="/about">about</Link>
        <Link className="nav-link" to="/resume">resume</Link>
        <Link className="nav-link" to="/contact">contact</Link>
    </div>
  )
}

export default Nav