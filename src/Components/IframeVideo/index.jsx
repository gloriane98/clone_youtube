import React from 'react'
import Youtube from 'react-youtube'

const IframeVideo = ({videoId}) => {
  return (
    <div className='frame-video'>
      {/* <Youtube width={200} videoId={videoId}/> */}
              <iframe
                     width="560"
                     height="315"
                     className='resp-iframe'
                     src={`https://www.youtube.com/embed/${videoId}`}
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen="allowFullScreen" >

                  </iframe>
    </div>
  )
}

export default IframeVideo
