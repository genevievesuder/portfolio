import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link className="nav-link" to="/">logo</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        
    </div>
  )
}

export default Nav