import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  let backGroundActive = { background:  "#46CFBD" }
  return (
    <>
      <div className="sidecontainer">
        <div className="sidebarMenu">
          <NavLink className="link" to='/home'  style={({ isActive }) => (isActive ? backGroundActive : undefined)} >
          <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>
          <NavLink className="link" to='/subcribe' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-play"></i>
            <span className='abonner'> Subscriptions</span>
          </NavLink>
          <NavLink className="link" to='/like' style={({ isActive }) => (isActive ? backGroundActive : undefined)}>
            <i className="fa-solid fa-thumbs-up"></i>
            <span className='like'> Liked videos</span>
          </NavLink>
          
        </div>
      </div>
    </>
  )
}

export default Sidebar
