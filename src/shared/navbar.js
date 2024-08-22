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
    <nav className='navigations  navbar navbar-expand-lg  justify-content-center'>
       <NavLink className="navbar-brand fw-bolder fs-4" to="/">
        Rotary Club of Accra-Osu Oxford Street
       </NavLink>
         <button className="navbar-toggler border-0 " 
          type="button" 
          data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        
      <div className="collapse navbar-collapse d-lg-flex justify-content-end  " id="navbarSupportedContent">
        <ul className='navbar-nav'>
          <li className='nav-item ' ><NavLink className='nav-link' style={navLinkStyle} to='/vision' >Our Vision  </NavLink> </li>
          <li className='nav-item' ><NavLink className='nav-link' style={navLinkStyle} to='/blog' >Blog </NavLink></li>
          <li className='nav-item' ><NavLink className='nav-link' style={navLinkStyle} to='/projects' >Projects  </NavLink></li>
          <li className='nav-item' ><NavLink  className='nav-link'style={navLinkStyle} to='/team' >Our Team </NavLink></li>
          <li className='nav-item' > 
            {!auth?.user && (<NavLink className='nav-link' style={navLinkStyle} to='/login' >Login </NavLink> )}
          </li>
        </ul>
            {/* <button className='btn btn-white border-dark rounded-0 text-dark px-4 py-3'> Donate </button> */}
        {/* </div> */}
      </div>
    </nav>
  )
}
export default Navbar