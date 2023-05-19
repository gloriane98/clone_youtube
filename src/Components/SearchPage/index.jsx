import React,{ useState, useEffect }  from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loader from '../Loader'
import './SearchPage.css'
import ShowMoreText from "react-show-more-text"
import moment from 'moment/moment';


const SearchPage = () => {
  let { searchQuery } = useParams();

  const [videoRows, setVideoRows] = useState([]);
  const [loader,setLoader]=useState(true)
  const fectData= ()=>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&type=video&q=${searchQuery}&safeSearch=none&key=${import.meta.env.VITE_APP_APIKEY}`
    )
    .then((response) => {
     setVideoRows(response.data.items)
      setLoader(false)
    })
    .catch((error)=>(console.log(error)))

  }
 
  useEffect(() => {
   fectData();
  
  }, [searchQuery]);


  return (
    <>
      <Navbar/>
      <Sidebar/>
     <div className="videoSearch">
     {
       !loader ?
       videoRows?.map((item)=>{
      const videoId=item.id.videoId;
      const videoItem=item.snippet.channelId;
      const datePublish =item.snippet.publishedAt;

        return (
         <Link key={item.id} to={`/videoview/${videoId}`}  className="videoRow">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
           <div  >
              <div className='text'>
                <h2>

                    <ShowMoreText   
                                more="Show more"
                                less="Show less" 
                                lines={1} 
                                truncatedEndingComponent={"... "}>

                        {item.snippet.title}
                    </ShowMoreText>             
                </h2>
                <Link to={`/listvideochannel/${videoItem}`} >
                       <p > {item.snippet.channelTitle} </p>
                </Link>
                {/* <span>{moment(datePublish, "YYYYMMDD").fromNow()}</span> */}
                <p>{moment(datePublish,"YYYYMMDD").fromNow()}</p>
              </div>
            
            </div>
         </Link>
        )
      }):<Loader/>}
     </div>

    </>
  )
}

export default SearchPage
