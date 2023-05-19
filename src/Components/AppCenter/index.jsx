import React from 'react'
import { Outlet} from 'react-router-dom'





const AppCenter = () => {


  return (
    <>
    <div className="AppContainer">   
      <Outlet/>
    </div>
    </>
  )
}


export default AppCenter
