import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/madarsa-profile.css'
import PostWithPhoto from '../components/PostWithPhoto'
import cover from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/square.png'
import CampaignCard from '../components/CampaignCard'
import CampaignCardAlt from '../components/CampaignCardAlt'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/madarsa.webp'

const MadarsaProfile = () => {
useEffect(()=>{
window.scrollTo(0,0)
},[])
const[mobileDialog,setMobileDialog] = useState(false)
return (
<>
    <Navbar />
    <div className="container">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 main-org-wrapper">
                <div className="madarsa-details">
                    <div className="madarsa-cover">
                        <div className="madarsa-basics">
                            <div className="madarsa-dp-wrapper">
                                <img src={avatar} alt="" className="madarsa-dp" />
                            </div>
                            <div className="madarsa-cover-image-wrapper">
                                <img src={cover} alt="" className="madarsa-cover-image" />
                            </div>
                            <div className="madarsa-follower-info">
                                <div className="madarsa-follower-item"></div>
                                <div className="madarsa-follower-item follower-data">
                                    <div className="follwer-item" style={{"margin-left":100+"px"}}>
                                        222 <span style={{"color":"gray"}}>Following</span>
                                    </div>
                                    <div className="follwer-item">
                                        101K <span style={{"color":"gray"}}>Follower</span>
                                    </div>
                                </div>
                                <div className="madarsa-follower-item">
                                    <i className="bi bi-bell madarsa-notification madarsa-instant-actions"></i>
                                    <button className="madarsa-follow-button madarsa-instant-actions"> <i
                                            className="bi bi-person-plus-fill px-1"></i> Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="madarsa-info-wrapper">
                        <div className="madarsa-title">Madarsa Hanfiya Zyaul Quran</div>
                        <div className="madarsa-username">@HanfiyaZiaulQuraan</div>
                        <div className="madarsa-bio">
                            Official account of Madarsa Hanfiya Zyaul Quran.

                            Nurturing hearts and minds in the light of Quranic wisdom since 1980. Embracing knowledge,
                            faith, and community. 📖🌟 #MadarsaHanfiya
                        </div>
                        <div className="mobile-profile-action-wrapper">
                            {
                            mobileDialog?
                            <div className="madarsa-mobile-dialog shadow rounded">
                                <div className="community-dialog-options-mobile"> <i
                                        className="bi bi-bookmark-fill"></i> Save Post</div>
                                <div className="community-dialog-options-mobile"> <i className="bi bi-send-fill"></i>
                                    Share Post</div>
                                <div className="community-dialog-options-mobile"> <i className="bi bi-repeat"></i>
                                    Repost Post</div>
                                <div className="community-dialog-options-mobile"> <i
                                        className="bi bi-person-plus-fill"></i> Join Community
                                </div>
                            </div>
                            :""
                            }
                            <button className="mobile-follow-button">Join</button>
                            <i className="bi bi-bell-fill mobile-notification-icon"></i>
                            <i className="bi bi-three-dots-vertical mobile-notification-icon"
                                onClick={()=>setMobileDialog(!mobileDialog)}></i>
                        </div>
                        <div className="madarsa-type-info-wrapper">
                            <div className="madarsa-type-info"> <i className='bi bi-grid-fill'></i> Religious
                                institution
                            </div>
                            <div className="madarsa-type-info"> <i className="bi bi-geo-alt-fill"></i> Lucknow, India
                            </div>
                            <div className="madarsa-type-info"> <i className="bi bi-box-arrow-up-right"></i>
                                www.mhzquran.com</div>
                        </div>
                    </div>

                    <div className="madarsa-data-content-wrapper">
                        <div className="madarsa-data-item">Home</div>
                        <div className="madarsa-data-item">Posts</div>
                        <div className="madarsa-data-item">Videos</div>
                        <div className="madarsa-data-item">Clips</div>
                        <div className="madarsa-data-item active-madarsa-item">Campaign</div>
                    </div>
                </div>
                <CampaignCardAlt img={img4} />
                <CampaignCardAlt img={img1} />
                <CampaignCardAlt img={img2} />
                <CampaignCardAlt img={img3} />

            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>

</>
)
}

export default MadarsaProfile