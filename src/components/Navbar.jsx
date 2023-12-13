import React, { useState } from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/images/hilalLogo.png'
import avatar from '../assets/images/avtar.png'
import { useDispatch, useSelector } from 'react-redux'
import { hideSearch, showSearch } from '../redux/searchSlice'
import { toggleProfile } from '../redux/profileSlice'
import Notification from './Notification'
import {Link, useNavigate} from 'react-router-dom'
import $ from 'jquery'

const Navbar = () => {

const profile = useSelector(state=>state.profile.shown)
const dispatch = useDispatch()
const[notification,setNotification] = useState(false)

const navigate = useNavigate()

function nav(){
navigate("/sea text-mutedrch-results")
dispatch(hideSearch())
}


return (
<>
    {
    profile?
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
    :""
    }
    {
    notification?
    <div className="notification-box">
        <div className="notification-box-title mb-3">Notifications</div>
        <Notification name={"Sajad khaki"} text={"Liked your post"} />
        <Notification name={"Khurshees ahmad khan"} text={"Commented on your post"} />
        <Notification name={"Mohd Belal Naim"} text={"Shared your post"} />
        <Notification name={"Sajad khaki"} text={"Liked your post"} />
        <Notification name={"Khurshees ahmad khan"} text={"Commented on your post"} />
        <Notification name={"Mohd Belal Naim"} text={"Shared your post"} />
    </div>
    :""
    }
    <div className="bottom-navbar">
        <div className="action-icons-wrapper">
            <Link to="/home" style={{"color":"black"}}>
            <div className="action-icons">
                <i className="action-icon mobile-action-icons bi bi-house-door-fill"></i>
            </div>
            </Link>
            <Link to="/explore" style={{"color":"black"}}>
            <div className="action-icons">
                <i className="action-icon mobile-action-icons bi bi-search"></i>
            </div>
            </Link>
            <Link to="/clips" style={{"color":"black"}}>
            <div className="action-icons">
                <i className="action-icon mobile-action-icons bi bi-film"></i>
            </div>
            </Link>
            <Link to="/videos" style={{"color":"black"}}>
            <div className="action-icons">
                <i className="action-icon mobile-action-icons bi bi-play-btn-fill"></i>
            </div>
            </Link>
            <Link to="/communities" style={{"color":"black"}}>
            <div className="action-icons">
                <i className="action-icon mobile-action-icons bi bi-people-fill"></i>
            </div>
            </Link>
            <div className="action-icons">
                <div className="mobile-user-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
        </div>
    </div>
    <div className="mobile-header">
        <div className="mobile-header-items">
            <div className="mobile-logo-wrapper">
                <img src={Logo} className='mobile-logo' alt="wbsite logo" />
                <span>HilalLink</span>
            </div>
        </div>
        <div className="mobile-header-items">
            <Link to="/mobile-notifications" style={{'color':'black'}}>
            <i className="bi bi-bell mobile-icon"></i>
            </Link>
            <Link to="/messages" style={{'color':'black'}}>
            <i className="bi bi-chat mobile-icon"></i>
            </Link>
        </div>
    </div>
    <div className="container-fluid navbar-top">
        <div className="row">
            <div className="col-lg-3">
                <div className="logo-items-wrapper">
                    <div className="logo-item">
                        <Link to="/home"><img src={Logo} className='logoimage' alt="websitelogo" /></Link>
                        <Link to="/home" style={{"color":"black"}}><span style={{"fontSize":18+"px","position":"relative","left":10+"px","top":2+"px"}}>HilalLink</span></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 px-5">
                <div className="action-icons-wrapper">
                    <Link to="/home" style={{"textDecoration":"none","color":"black"}}>
                    <div className="action-icons">
                        <i className="action-icon bi bi-house-door-fill"></i>
                    </div>
                    </Link> 
                    
                    <Link to="/videos" style={{"textDecoration":"none","color":"black"}}>
                    <div className="action-icons">
                        <i className="action-icon bi bi-play-btn-fill text-muted"></i>
                    </div>
                    </Link> 
                    <Link to="/clips" style={{"textDecoration":"none","color":"black"}}>
                    <div className="action-icons">
                        <i className="action-icon bi bi-film text-muted"></i>
                    </div>
                    </Link>
                    
                    <Link to="/communities" style={{"textDecoration":"none","color":"black"}}>
                    <div className="action-icons">
                        <i className="action-icon bi bi-people-fill text-muted"></i>
                    </div>
                    </Link>
                    
                    <Link to="/explore" style={{"textDecoration":"none","color":"black"}}>
                    <div className="action-icons">
                        <i className="action-icon bi bi-search text-muted"></i>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="col-lg-3">
                <div className="action-center-wrapper">
                    <Link style={{"color":"black"}} to="/messages">
                    <div className="action-item">
                        <i className="bi bi-envelope action-icon"></i>
                    </div>
                    </Link>
                    <div className="action-item">
                        <i className="bi bi-bell action-icon" onClick={()=>setNotification(!notification)}></i>
                    </div>
                    <div className="action-item">
                        <div className="navbar-user-image">
                            <img onClick={()=>dispatch(toggleProfile())} src={avatar} className='navbar-image-data'
                            alt="website avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Navbar