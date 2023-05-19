import React, { useState,useEffect } from 'react'
import '../../CardElements.css'
import {Link} from 'react-router-dom'
import moment from 'moment'
import ShowMoreText from "react-show-more-text"
import numeral from 'numeral';



import Loader from '../Loader'

const VideoLikes = () => {
    const [videos, setVideo] = useState([])
    const [loading,setLoading]=useState(true)
    let token = window.localStorage.getItem('token')



    const fetchVideoLikes = ()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=44&myRating=like&key=${import.meta.env.VITE_APP_APIKEY}&access_token=`+token)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        setVideo(data)
        setLoading(false)
    })
    }
    
    useEffect(()=>{
    fetchVideoLikes();
    },[token])

    return (
    <>
     
        <div className="main">
                <div className="videocontainer">
        {
            !loading ?
            videos.items?.map((video)=>{
                const titleVideo = video.snippet.localized.title
                const datePublish =video.snippet.publishedAt;
                const views = video.statistics.viewCount;
                console.log(views)
               
                const videoItem=video.snippet.channelId;

            return(

            <Link key={video.id} className="cards" to={`/videoview/${video.id}`} >
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                    <div className="items">
                        <div className="texte">
                           <h4>{moment.utc((moment.duration(`${video.contentDetails.duration}`).asSeconds())*1000).format("mm:ss")}</h4>
                           <h3 > 
                            <ShowMoreText   more="Show more"
                                            less="Show less" 
                                            lines={1} 
                                            truncatedEndingComponent={"... "}>

                               {titleVideo} 
                            </ShowMoreText>
                            </h3>
                            <Link to={`/listvideochannel/${videoItem}`} >
                               <p > {video.snippet.channelTitle} </p>
                            </Link>
                            <div><span>{numeral(views).format("0.a")} views</span> &nbsp;&nbsp;&nbsp;<span>{moment(datePublish, "YYYYMMDD").fromNow()}</span></div>
                        </div>
                    </div>
                </Link>
                )
                
                }):<Loader/>} 
            </div>
        </div>
    </>
  )
}

export default VideoLikes
