import {  NavLink} from  'react-router-dom'
import { useAuth } from '../routes/auth';

function Navbar() {

    const navLinkStyle = ({isActive})=>{
        return {
            fontWeight:isActive ? 'bold': 'normal',
            textDecoration:isActive ? 'none':'none'
        }
    }
    const auth = useAuth();
 
  return (
   <nav className='navigations nav navbar navbar-expand-lg  justify-content-between '>
    <NavLink className="navbar-brand  fw-bolder fs-4" to="/">Rotary Club of Accra-Osu Oxford Street</NavLink>

        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    {/* <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent"> */}
    {/* <ul className=' navbar-nav'> */}
    {/* <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle"  href="." id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"  aria-expanded="false">
         Projects
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="projects">Materials for learning</a>
          <a className="dropdown-item" href="projects">Education for Teachers </a>
          <a className="dropdown-item" href="projects">Support for Communities</a>
        </div>
      </li> */}
    {/* </ul> */}
    {/* <NavLink style={navLinkStyle} to='/projects' >Projects  </NavLink> */}
    <div className='d-none d-md-block '>
        <NavLink style={navLinkStyle} to='/vision' >Our Vision  </NavLink>
        <NavLink style={navLinkStyle} to='/projects' >Projects  </NavLink>
        <NavLink style={navLinkStyle} to='/team' >Our Team </NavLink>
        <NavLink style={navLinkStyle} to='/blog' >Blog </NavLink>
        {!auth?.user && (<NavLink style={navLinkStyle} to='/login' >Login </NavLink> )}
        {/* <button className='btn btn-white border-dark rounded-0 text-dark px-4 py-3'> Donate </button> */}
    </div>
    {/* </div> */}
   </nav>
  )
}

export default Navbar