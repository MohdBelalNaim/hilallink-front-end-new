import React from 'react'
import Navbar from './Navbar'
import avatar from '../assets/images/avtar.png'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
const MobileProfilePage = () => {
  return (
    <>
    <Navbar/>   
    <div className="profile-box">
        <div className="user-profiles-container shadow-sm">
            <div className="user-profile-details-wrapper">
                <div className="user-profiles-details-section">
                    <div className="user-profile-image-wrapper-nav">
                        <img src={avatar} alt="" className='img-fit' />
                    </div>
                </div>
                <div className="user-profiles-details-section">
                    <div className="user-profile-name-nav">Dr. Afsana Anjum Kashmiri</div>
                    <div className="user-profile-username-nav">@Afsana_anjum</div>
                </div>
            </div>
            <hr />

            <div className="user-profile-details-wrapper">
                <div className="user-profiles-details-section">
                    <div className="user-profile-image-wrapper-nav">
                        <img src={avatar} alt="" className='img-fit' />
                    </div>
                </div>
                <div className="user-profiles-details-section">
                    <div className="user-profile-name-nav">Khursheed Ahmad Khan</div>
                    <div className="user-profile-username-nav">@KhursheedKhan</div>
                </div>
            </div>

            <div className="user-profile-details-wrapper mt-3">
                <div className="user-profiles-details-section">
                    <div className="user-profile-image-wrapper-nav">
                        <img src={avatar} alt="" className='img-fit' />
                    </div>
                </div>
                <div className="user-profiles-details-section">
                    <div className="user-profile-name-nav">Aftab Iqbal</div>
                    <div className="user-profile-username-nav">@AftabIq bal</div>
                </div>
            </div>
            <div className="text-center nav-view-all">View all accounts</div>
        </div>

        <div className="settings-container-nav shadow-sm mt-3">
            <div className="nav-setting-item"> <i className="bi bi-gear-fill nav-setting-icon"></i> Profile settings
            </div>
            <div className="nav-setting-item"> <i className="bi bi-shield-fill-check nav-setting-icon"></i> Privacy
                settings</div>
            <div className="nav-setting-item"> <i className="bi bi-question-circle-fill nav-setting-icon"></i> Help
                center</div>
            <div className="nav-setting-item"> <i className="bi bi-chat-quote-fill nav-setting-icon"></i> Feedback</div>
            <Link to="/" style={{"color":"black","textDecoration":"none"}}><div className="nav-setting-item"> <i className="bi bi-power nav-setting-icon"></i> Logout</div></Link>
        </div>
    </div>
    </>
  )
}

export default MobileProfilePage