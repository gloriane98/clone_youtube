import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../../CardElements.css';
import Loader from "../Loader";
import moment from "moment/moment";
import ShowMoreText from "react-show-more-text"




const SubcribeVideo = () => {
    const [subcribe, setSubcribe] = useState([])
    const [loading,setLoading]=useState(true)
    let token = window.localStorage.getItem('token')

    const fetchVideoSubcribe = ()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=id%2Csnippet%2CcontentDetails&maxResults=21&mine=true&key=${import.meta.env.VITE_APP_APIKEY}&access_token=`+token)
    
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setSubcribe(data)
        setLoading(false)
    })
    }
  
    useEffect(()=>{
    fetchVideoSubcribe();
    },[token])


return <>
   
    <div className="videocontainer">
  {
    !loading ?
    subcribe.items?.map((video)=>{
      const videoItem=video.snippet.resourceId.channelId;
      const datePublish =video.snippet.publishedAt;
      const desc = video.snippet.description;
      return(
        
     <Link key={video.id} className="cards" to={`/listvideochannel/${videoItem}`} >
            <img src={video.snippet.thumbnails.medium.url} alt="youtube chaine" />
                <div className="items">
                  <div className="texte"> 
                    <h2 >{video.snippet.title}</h2>
                    <p >
                       {moment(datePublish).format('LL')}
                    </p>
                    <h4>
                      <ShowMoreText
                         more="Show more"
                         less="Show less" 
                         lines={1} 
                         truncatedEndingComponent={"... "}
                      >
                          {desc}
                      </ShowMoreText>
                    </h4>
                  </div>
                </div>
          </Link>
          )
          
        }):<Loader/>} 
    </div>  
        </>;
};

export default SubcribeVideo;
