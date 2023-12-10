import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/community.css'
import img1 from '../assets/images/masjidalaqsa.jpeg'
import group from '../assets/images/group-members.png'

const CommunityProfile = () => {
return (
<>
  <Navbar />
  <div className="container">
    <div className="row gx-0">
      <div className="col-lg-3"></div>
      <div className="col-lg-6 px-4">
        <div className="community-cover-image-wrapper">
          <img src={img1} alt="" className="community-cover-image" />
        </div>
        <div className="community-info-wrapper">
          <div className="community-info">
            <div className="community-info-section">
              <img src={group} alt="" />
            </div>
            <div className="community-info-section">
              <div className="members-count">
                208K <span style={{"color":"gray"}}>Members</span>
              </div>
            </div>
            <div className="community-info-section">
              <i className="bi bi-three-dots-vertical madarsa-notification"></i>
              <i className="bi bi-bell madarsa-notification"></i>
              <button className="madarsa-follow-button">Join</button>
            </div>
          </div>
        </div>
        <div className="madarsa-info-wrapper">
          <div className="madarsa-title">Madarsa Hanfiya Zyaul Quran</div>
          <div className="community-bio">
            Official account of Madarsa Hanfiya Zyaul Quran.

            Nurturing hearts and minds in the light of Quranic wisdom since 1980. Embracing knowledge,
            faith, and community. 📖🌟 #MadarsaHanfiya
          </div>
        </div>
        <div className="madarsa-data-content-wrapper">
          <div className="madarsa-data-item active-madarsa-item">Latest</div>
          <div className="madarsa-data-item">Trending</div>
          <div className="madarsa-data-item">About Community</div>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  </div>
</>
)
}

export default CommunityProfile