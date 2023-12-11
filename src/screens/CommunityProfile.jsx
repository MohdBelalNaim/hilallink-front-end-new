import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/community.css'
import img1 from '../assets/images/masjidalaqsa.jpeg'
import group from '../assets/images/group-members.png'
import PostWithPhoto from '../components/PostWithPhoto'
import img3 from '../assets/images/img3.jpg'

const CommunityProfile = () => {
  const[rules,setRules] = useState(false)

return (
<>
  {
    rules?
    <>
  <div className="community-rules-overlay"></div>
  <div className="community-rules-container">
    <div className="community-rules-card animate__animated animate__bounceIn">
        <div className="community-rules-header">
          <i className="bi bi-x-circle" onClick={()=>setRules(false)} style={{"cursor":"pointer"}}></i>
          <span>Review and Agree the <span style={{"color":"#A16CE6"}}>community rules</span></span>
        </div>
        <div className="community-rules-body">
          <div className="community-rule-item">
            <div className="community-rule-title">Respectful Dialogue</div>
            <div className="community-rule-info">
              Engage in respectful and constructive discussions. Disagreement are natural, but express your opinions ourteously.
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">Islamic Ettiquette</div>
            <div className="community-rule-info">
              Uphold Islamic manners and ettiquettes in all interactions within the group.
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">No Hate Speech</div>
            <div className="community-rule-info">
              Avoid any form of hate speech, discrimination or offensive language. Respect diversity within the muslim community.
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">Relevance to theme</div>
            <div className="community-rule-info">
              Ensure that yout posts and discussions are directly related to the themes of Islam, Science and Technology
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">No Spamming</div>
            <div className="community-rule-info">
              Refrain from posting repetitive content, advertisements or spam, keep the group clutter-free
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">Credible Sources</div>
            <div className="community-rule-info">
              When sharing information, provide credible sources to enhance the reliability of the content
            </div>
          </div>
          <div className="community-rule-item">
            <div className="community-rule-title">No Promotions Without Approval</div>
            <div className="community-rule-info">
              Seek permission from group moderators before promoting any events, products or services within the group.
            </div>
          </div>
        </div>
        <div className="community-accept-button">
          Agree and join
        </div>
    </div>
  </div>
  </>
  :""
  }
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
              <button className="madarsa-follow-button" onClick={()=>setRules(true)}>Join</button>
            </div>
          </div>
        </div>
        <div className="madarsa-info-wrapper">
          <div className="madarsa-title">Islam, Science and Technology</div>
          <div className="community-bio">
            Islam, Science and Technology

            Nurturing hearts and minds in the light of Quranic wisdom since 1980. Embracing knowledge,
            faith, and community. 📖🌟 #MadarsaHanfiya
          </div>
        </div>
        <div className="madarsa-data-content-wrapper">
          <div className="madarsa-data-item active-madarsa-item">Latest</div>
          <div className="madarsa-data-item">Trending</div>
          <div className="madarsa-data-item">About Community</div>
        </div>
        <PostWithPhoto title={"Madarsa Hanfiya Zyaul Quran"} image={img3}/>
      </div>
      <div className="col-lg-3"></div>
    </div>
  </div>
</>
)
}

export default CommunityProfile