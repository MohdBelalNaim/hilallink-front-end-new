import React from 'react'
import '../assets/css/notifications.css'
import Navbar from '../components/Navbar'
import avatar from '../assets/images/avtar.png'

const Notifications = () => {
  return (
    <>
    <Navbar/>
    <div className='mobile-notifications-container'>
        <div className="mobile-notifications-title">Notifications</div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Dr. Alama Hussain Madani Liked your post
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Khursheed Ahmad Khan commented on a post you are tagged in
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Sajad khakhi has requested to follow you on HilalLink
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Dr. Alama Hussain Madani Liked your post
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Khursheed Ahmad Khan commented on a post you are tagged in
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Sajad khakhi has requested to follow you on HilalLink
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Dr. Alama Hussain Madani Liked your post
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Khursheed Ahmad Khan commented on a post you are tagged in
            </div>
        </div>
        <div className="mobile-notifications-item">
            <div className="mobile-notifications-section">
                <div className="mobile-notifications-dp-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                </div>
            </div>
            <div className="mobile-notifications-section mobile-notification-text">
                Sajad khakhi has requested to follow you on HilalLink
            </div>
        </div>
    </div>
    </>
  )
}

export default Notifications