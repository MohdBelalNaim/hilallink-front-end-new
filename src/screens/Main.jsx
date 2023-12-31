import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/home.css'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'
import { Link } from 'react-router-dom'
import CreatePost from '../components/CreatePost'
import { useDispatch, useSelector } from 'react-redux'
import { showCreate } from '../redux/createPostSlice'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/masjidalaqsa.jpeg'
import OrganisationPostCard from '../components/OrganisatonPostCard'

const Main = () => {

  const dispatch = useDispatch()
  const create = useSelector(state=>state.create.shown)

return (
<>
  {
  create?
  <CreatePost />
  :""
  }
  <Navbar />
  <div className="feed-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-3 search-box-container"> 
        </div>
        <div className="col-md-6 main-wrapper">
          <div className="post-data-wrapper bg-light" onClick={()=>dispatch(showCreate())}>
            <div className="post-data-item">
              <div className="user-photo-wrapper">
              </div>
            </div>
            <div className="post-data-item post-input">
              <div className="input-skeleton">Write here, you want to say</div>
            </div>
            <div className="post-data-item">
              <i className="bi bi-image extra-icon"></i>
            </div>
            <div className="post-data-item">
              <i className="bi bi-filetype-gif extra-icon"></i>
            </div>
            <div className="post-data-item clip-icon">
              <i className="bi bi-film extra-icon"></i>
            </div>
          </div>
          <PostWithPhoto image={img4} title={"Dr. Alama Hussain Madani"}/>
          <OrganisationPostCard image={img1} title={"Madarsa Hanfiya Zyaul Quran"}/>
          <PostWithText />
          <PostWithText />
          <PostWithPhoto image={img2} title={"Khursheed Ahmad Khan"}/>
          <PostWithText />
          <PostWithText />
          <PostWithPhoto image={img3} title={"Sajad Khaki"}/>
          <PostWithText />
          <PostWithText />
          <div className="mobile-bottom-padding"></div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>

  </div>

</>
)
}

export default Main