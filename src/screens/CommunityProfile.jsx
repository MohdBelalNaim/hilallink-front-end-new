import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/community.css'
import img1 from '../assets/images/masjidalaqsa.jpeg'
import group from '../assets/images/group-members.png'
import PostWithPhoto from '../components/PostWithPhoto'
import img3 from '../assets/images/img3.jpg'

const CommunityProfile = () => {
const[rules,setRules] = useState(false)
const[dialog,setDialog] = useState(false)
const[mobileDialog,setMobileDialog] = useState(false)
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
              Engage in respectful and constructive discussions. Disagreement are natural, but express your opinions
              ourteously.
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
              Avoid any form of hate speech, discrimination or offensive language. Respect diversity within the muslim
              community.
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
        </div>
        <div className="read-more-rules" style={{"color":"#A16CE6","cursor":"pointer"}}>Read All Rules</div>
        <div className="community-accept-button" onClick={()=>setRules(false)}>
          Agree and join
        </div>
      </div>
    </div>
  </>
  :""
  }
  <Navbar />
  <div className="container community-main-container">
    <div className="row gx-0">
      <div className="col-lg-3"></div>
      <div className="col-lg-6 community-main-wrapper">
        <div className="community-cover-image-wrapper">
          <img src={img1} alt="" className="community-cover-image" />
        </div>
        <div className="community-combined-info">
          {
          dialog?
          <div className="community-actions-dialog shadow rounded">
            <div className="community-dialog-options"> <i className="bi bi-bookmark-fill"></i> Save Post</div>
            <div className="community-dialog-options"> <i className="bi bi-send-fill"></i> Share Post</div>
            <div className="community-dialog-options"> <i className="bi bi-repeat"></i> Repost Post</div>
            <div className="community-dialog-options"> <i className="bi bi-person-plus-fill"></i> Join Community</div>
          </div>
          :""
          }
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
              <div className="community-info-section community-follow-section">
                <i onClick={()=>setDialog(!dialog)} className="bi bi-three-dots-vertical madarsa-notification"
                  style={{"cursor":"pointer"}}></i>
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
            <div className="mobile-profile-action-wrapper">
              { 
                mobileDialog?
                <div className="community-mobile-dialog shadow rounded">
                  <div className="community-dialog-options-mobile"> <i className="bi bi-bookmark-fill"></i> Save Post</div>
                  <div className="community-dialog-options-mobile"> <i className="bi bi-send-fill"></i> Share Post</div>
                  <div className="community-dialog-options-mobile"> <i className="bi bi-repeat"></i> Repost Post</div>
                  <div className="community-dialog-options-mobile"> <i className="bi bi-person-plus-fill"></i> Join Community
                  </div>
                </div>
                :""
              }
              <button className="mobile-follow-button" onClick={()=>setRules(true)}>Join</button>
              <i className="bi bi-bell-fill mobile-notification-icon" ></i>
              <i className="bi bi-three-dots-vertical mobile-notification-icon" onClick={()=>setMobileDialog(!mobileDialog)}></i>
            </div>
          </div>
        </div>
        <div className="madarsa-data-content-wrapper">
          <div className="madarsa-data-item active-madarsa-item">Latest</div>
          <div className="madarsa-data-item">Trending</div>
          <div className="madarsa-data-item">About Community</div>
        </div>
        <PostWithPhoto title={"Madarsa Hanfiya Zyaul Quran"} image={img3} />
      </div>
      <div className="col-lg-3"></div>
    </div>
  </div>
</>
)
}

export default CommunityProfile