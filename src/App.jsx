import './App.css'
import SignIn from './Components/SignIn';
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Videoview from './Components/Videoview';
import SearchPage from './Components/SearchPage';
import { useState, useEffect} from 'react'
import {UserContext} from  "./ContextAccount"
import VideoLikes from './Components/VideoLikes';
import SubcribeVideo from './Components/SubcribeVideo';
import ListVideoChannel from './Components/ListVideoChannel';
import {signInWithGoogle,auth} from '../src/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import AppCenter from './Components/AppCenter';
import VideoPop from './Components/VideoPop';
import SettingProfile from './Components/SettingProfile';



export default function App() {
 
        const [loginState,setLoginState]=useState(false)
        const [userToken, setUserToken]=useState('')

        useEffect(()=>{
          let token = localStorage.getItem('token')
          setUserToken(token)

          onAuthStateChanged(auth,(data)=>{
            if(data){
              setLoginState(true);

            } else{
              setLoginState(false)
            }
          })
        },[loginState])

        
  return (
    <>
    <UserContext.Provider value={{signInWithGoogle,setUserToken, userToken}}>
      <Routes>
          <Route  path='/' element={!userToken ? <SignIn /> : <Navigate to="/home"/>}/> 
          <Route element={<AppCenter/>}>
              <Route path='/home' element={<><Dashboard/><VideoPop/></>}/>
              <Route path='/like' element={<><Dashboard/><VideoLikes/></>}/>
              <Route path='/subcribe' element={<><Dashboard/><SubcribeVideo/></>}/>
              <Route path='/searchpage/:searchQuery' element={<SearchPage/>}/>
              <Route path='/listvideochannel/:channelId' element={<><Dashboard/><ListVideoChannel/></>}/>
              <Route path='/videoview/:videoId' element={<><Dashboard/><Videoview/></>}/>
              <Route path='/profile' element={<><Dashboard/><SettingProfile/></>}/>
          </Route>
          
      </Routes>
    </UserContext.Provider> 
    </>
  )
};