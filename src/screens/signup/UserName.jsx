import React from 'react'
import '../../assets/css/signup.css'
import Avatar from '../../assets/images/avtar.png'
import {Link} from 'react-router-dom'
const UserName = () => {
return (
<div id="signup-wrapper" className=' signup-wrapper-username'>
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <div className="photo-selector">
                <div className='text-center'>
                    <img src={Avatar} class="avatar" alt="" />
                </div>
                <button className='choose-photo'>Choose photo</button>
            </div>
            <div class="custom-input input-username mt-4">
                <input type="text" class="custom-input-field no-icons" placeholder='Choose username' />
            </div>
            <Link style={{"textDecoration":"none"}} to="/home"><button id="custom-button">Finish</button></Link>
        </div>
        <div className="col-lg-4"></div>
    </div>
</div>
)
}

export default UserName