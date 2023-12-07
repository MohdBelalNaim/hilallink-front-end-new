import React from 'react'
import avatar from '../assets/images/avtar.png'

const Notification = (props) => {
  return (
    <div className="notification-item-wrapper mb-4">
        <div className="notification-items">
            <div className="notification-profile-image">
                <img src={avatar} alt="" className="img-fit" />
            </div>
        </div>
        <div className="notification-items">
            <div className="notification-text-item"><b>{props.name}</b> {props.text}</div>
        </div>
    </div>
  )
}

export default Notification