import React, {useEffect} from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../ContextAccount'
// import { signOut} from 'firebase/auth'
// import {auth} from '../../firebase'


const Logout = () => {
  const {setUserToken}= useContext(UserContext)
  const navigate = useNavigate()

  const NavigateSignIn= ()=>{
  /*   if(setUserToken){
      signOut(auth)
    }else{
      localStorage.removeItem('image')
      localStorage.removeItem('token')
      navigate("/")
    } */
    setUserToken(null)
    localStorage.removeItem('image')
    localStorage.removeItem('token')
    navigate("/")

  }

  return (
    <>
      <div id="btn-logout" onClick={NavigateSignIn}>LogOut</div>
      
    </>
  )
}

export default Logout
