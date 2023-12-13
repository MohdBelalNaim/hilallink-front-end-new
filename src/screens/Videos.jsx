import React from 'react'
import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import vid1 from '../assets/video/vid3.mp4'
import vid2 from '../assets/video/video2.mp4'
import '../assets/css/videos.css'
const Videos = () => {
  return (
    <>
    <Navbar/>
    <div className="container videos-wrapper">
        <div className="row gx-0 py-2">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 main-wrapper">
                <VideoCard title={"Dr. Alama Hussain Madani"} image={vid1}/>
                <VideoCard title={"Khursheed Ahmad Khan"} image={vid2}/>
            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>
    </>
  )
}

export default Videos