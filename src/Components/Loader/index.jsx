import  React from 'react'
import Gif from '../../images/Infinity-1s-200px.gif'
import './Loader.css'

const Loader = () => {
    return (
        <div className='position-load'>
            {/* <img src={Gif} /> */}
             <div className="lds-hourglass"></div>
        </div>
      
    );
};    

export default Loader;