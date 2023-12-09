import React, { useState } from 'react'
import '../assets/css/home.css'
import feedimage from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/avtar.png'
import { Link } from 'react-router-dom'

const PostWithPhoto = () => {

    const[dropdown,setDropdown] = useState(false)

return (
<div className="feed-item">
    {
        dropdown?
        <div className="feed-dropdown rounded shadow bg-light px-2 py-2">
            <div className="feed-dropdown-actions"> <i className='bi bi-bookmark-fill' style={{"marginRight":6+"px"}}></i> Save Post</div>
            <div className="feed-dropdown-actions"> <i className='bi bi-send-fill' style={{"marginRight":6+"px"}}></i> Share Post</div>
            <div className="feed-dropdown-actions"> <i className='bi bi-repeat' style={{"marginRight":6+"px"}}></i> Repost Post</div>
            <div className="feed-dropdown-actions"> <i className='bi bi-person-plus-fill' style={{"marginRight":6+"px"}}></i> Follow @DrHussainMadani</div>
            <div className="feed-dropdown-actions"> <i className='bi bi-person-x-fill' style={{"marginRight":6+"px"}}></i> Block @DrHussainMadani</div>
        </div>
        :""
    }
    <div className="feed-item-title">
        <div className="feed-title-item">
            <div className="feed-user-info-wrapper">
                <div className="feed-user-info">
                    <div className="user-image-info">
                        <img src={avatar} className='user-image-data' />
                    </div>
                </div>
                <div className="feed-user-info">
                    <div className='feed-user-name'><b>Dr. Alama</b></div>
                    <div className='feed-user-name-unique'>@DrHussainMadani</div>
                </div>
            </div>
        </div>
        <div className="feed-title-item">
            <div className='feed-edit-options'>
                <span className='feed-time'>42 minutes ago</span>
                <span onClick={()=>{setDropdown(!dropdown)}} style={{"cursor":"pointer"}}><i className="bi bi-three-dots-vertical"></i></span>
            </div>
        </div>
    </div>
    <Link style={{"textDecoration":"none","color":"black"}} to="/post">
    <div className="feed-item-descripton">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate recusandae consectetur natus porro
        voluptatibus dolorem quae autem modi eius dignissimos, quibusdam repellendus.
    </div>

    </Link>
    
    <div className="feed-item-image">
        <img src={feedimage} className='feed-post-image' />
    </div>
    
    <div className="feed-item-actions">
        <div className="feed-action-item">
            <i className='bi bi-hand-thumbs-up'></i> 2158
        </div>
        <div className="feed-action-item">
            <i className='bi bi-repeat'></i> 21
        </div>
        <div className="feed-action-item">
            <i className='bi bi-chat'></i> 58
        </div>
        <div className="feed-action-item">
            <i className='bi bi-upload'></i>
        </div>
    </div>
</div>
)
}

export default PostWithPhoto