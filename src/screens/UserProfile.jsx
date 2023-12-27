import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/madarsa-profile.css'
import PostWithPhoto from '../components/PostWithPhoto'
import cover from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/avtar.png'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import PostWithText from '../components/PostWithText'


const UserProfile = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const options = ["Home","Posts","Videos","Clips"]
    const[active,setActive] = useState(0)
    return (
    <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 user-main-wrapper">
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
                                        <i className="bi bi-bell madarsa-notification notification-user-page"></i>
                                        <button className="madarsa-follow-button notification-user-page"> <i
                                                className="bi bi-person-plus-fill px-1"></i> Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="madarsa-info-wrapper">
                            <div className="madarsa-title">Dr. Alama Hussain Madani</div>
                            <div className="madarsa-username">@DrHussainMadani</div>
                            <div className="madarsa-bio">
                                Official account of Dr. Alama Hussain Madani.

                                Nurturing hearts and minds in the light of Quranic wisdom since 1980. Embracing knowledge,
                                faith, and community. 📖🌟 #MadarsaHanfiya
                            </div>

                            <div className="mobile-info-wrapper">
                                <div className="row gx-0 gy-0">
                                    <div className="col-lg-6 col-6 mobile-org-type">
                                        <i className='bi bi-grid-fill'></i> Religious
                                        institution
                                    </div>
                                    <div className="col-lg-6 col-6 mobile-org-type">
                                    <i className="bi bi-geo-alt-fill"></i> Lucknow, India
                                    </div>
                                    <div className="col-lg-6 col-6 mobile-org-type">
                                    <i className="bi bi-box-arrow-up-right"></i> www.mhzquran.com
                                    </div>
                                    <div className="col-lg-6 col-6 mobile-org-type">
                                        <i className='bi bi-clock-history'></i> Joined on 11-10-2023
                                    </div>

                                </div>
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


                            <div className="mobile-profile-action-wrapper">
                                <button className="mobile-follow-button">Follow</button>
                                <i className="bi bi-bell-fill mobile-notification-icon"></i>
                                <i className="bi bi-three-dots-vertical mobile-notification-icon"></i>
                            </div>
                        </div>

                        <div className="madarsa-data-content-wrapper">
                            {
                                options.map((item,index)=>{
                                    return(
                                        <div style={{"cursor":"pointer"}} className={`madarsa-data-item ${index===active?'active':''}`} onClick={()=>setActive(index)}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="profile-posts">
                        <PostWithPhoto title={"Dr. Alama Hussain Madani"} image={img1} />
                        <PostWithPhoto title={"Dr. Alama Hussain Madani"} image={img2} />
                        <PostWithText />
                        <PostWithText />
                    </div>

                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

    </>
    )
}

export default UserProfile