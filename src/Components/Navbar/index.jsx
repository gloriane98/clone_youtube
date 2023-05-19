import React from 'react'
import './Navbar.css'
import icons from '../../images/iconsNavbar.png'
import {Link} from 'react-router-dom'
import Searchbar from '../Searchbar'
import Logout from '../Logout'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'
import UserImage from '../UserImage'
import Notify from '../Notify'





const Navbar = () => {
  let {loginState} = useContext(UserContext);
  
  return (
    <>
     <nav>
       
       <Link className="content" to='/home'>
        <img src={icons} alt="logo" className='logo' />
        <span className='title'>SmartView</span>
       </Link>
        <Searchbar/>
          <div className="avatar-bloc">
          <div className="bell">
                <Notify/>
                </div>
              <div className="avatar">
                <UserImage/>
              </div>
          </div>
   
    </nav> 
    
    </>
  )
}

export default Navbar
