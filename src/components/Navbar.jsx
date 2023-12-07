import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/images/hilalLogo.png'
import avatar from '../assets/images/avtar.png'
import { useDispatch, useSelector } from 'react-redux'
import { hideSearch, showSearch } from '../redux/searchSlice'
import { toggleProfile } from '../redux/profileSlice'

const Navbar = () => {

const search = useSelector(state=>state.search.shown)
const profile = useSelector(state=>state.profile.shown)
const dispatch = useDispatch()

return (
<>
    {
        search?
        <div className="search-box">
        <div className="search-box-title">Try searching for</div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Islam</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Quran</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Muslim</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Islamic scholar</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Alhamdulillah</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>MashaAllah</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Nimaz</div>
        </div>
        <div className="search-recommendation">
            <i className="bi bi-search"></i>
            <div>Zakat</div>
        </div>
        </div>
        :""
    }
    {
        profile?
        <div className="profile-box">
        <div className="user-profiles-container shadow-sm">
            <div className="user-profile-details-wrapper">
                <div className="user-profiles-details-section">
                    <div className="user-profile-image-wrapper-nav">
                        <img src={avatar} alt="" className='img-fit'/>
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
                        <img src={avatar} alt="" className='img-fit'/>
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
                        <img src={avatar} alt="" className='img-fit'/>
                    </div>
                </div>
                <div className="user-profiles-details-section">
                    <div className="user-profile-name-nav">Aftab Iqbal</div>
                    <div className="user-profile-username-nav">@AftabIq bal</div>
                </div>
            </div>
        </div>

        <div className="settings-container-nav shadow-sm mt-3">
            <div className="nav-setting-item"> <i className="bi bi-gear-fill nav-setting-icon"></i> Profile settings</div>
            <div className="nav-setting-item"> <i className="bi bi-shield-fill-check nav-setting-icon"></i> Privacy settings</div>
            <div className="nav-setting-item"> <i className="bi bi-question-circle-fill nav-setting-icon"></i> Help center</div>
            <div className="nav-setting-item"> <i className="bi bi-power nav-setting-icon"></i> Logout</div>
        </div>
        </div>
        :""
    }
    <div className="bottom-navbar">
        <div className="action-icons-wrapper">
            <div className="action-icons house">
                <i className="action-icon bi bi-house-door-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-film"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-plus-circle-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-play-btn-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-bookmark-fill"></i>
            </div>
        </div>
    </div>
    <div className="mobile-header">
        <div className="mobile-header-items">
            <div className="mobile-logo-wrapper">
                <img src={Logo} className='mobile-logo' alt="wbsite logo" />
            </div>
        </div>
        <div className="mobile-header-items">
            <i className="bi bi-search mobile-icon"></i>
            <i className="bi bi-bell mobile-icon"></i>
            <i className="bi bi-chat mobile-icon"></i>
        </div>
    </div>
    <div className="container-fluid navbar-top">
        <div className="row">
            <div className="col-lg-3">
                <div className="logo-items-wrapper">
                    <div className="logo-item">

                        {
                        search?
                        <i className="bi bi-x-circle" style={{"fontSize":26+"px","cursor":'pointer'}}
                            onClick={()=>dispatch(hideSearch())}></i>
                        :
                        <img src={Logo} className='logoimage' alt="websitelogo" />
                        }
                    </div>
                    <div className="logo-item">
                        <input type="text" className='search-input' placeholder='search'
                            onFocus={()=>dispatch(showSearch())}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="action-icons-wrapper">
                    <div className="action-icons house">
                        <i className="action-icon bi bi-house-door-fill"></i>
                    </div>
                    <div className="action-icons">
                        <i className="action-icon bi bi-play-btn-fill"></i>
                    </div>
                    <div className="action-icons">
                        <i className="action-icon bi bi-film"></i>
                    </div>
                    <div className="action-icons">
                        <i className="action-icon bi bi-person-plus-fill"></i>
                    </div>
                    <div className="action-icons">
                        <i className="action-icon bi bi-binoculars-fill"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="action-center-wrapper">
                    <div className="action-item">
                        <i className="bi bi-chat action-icon"></i>
                    </div>
                    <div className="action-item">
                        <i className="bi bi-bell action-icon"></i>
                    </div>
                    <div className="action-item">
                        <div className="navbar-user-image">
                            <img onClick={()=>dispatch(toggleProfile())} src={avatar} className='navbar-image-data' alt="website avatar" />
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