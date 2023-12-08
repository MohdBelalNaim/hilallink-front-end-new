import React from 'react'
import avatar from '../assets/images/square.png'

const OrganisationResultCard = () => {
return (
    <div className="search-result-people">
        <div className="people-result-section">
            <div className="search-people-info">
                <div>
                    <div className="search-people-img-wrapper square-image">
                        <img src={avatar} alt="" className="img-fit" />
                    </div>
                </div>
                <div className="search-people-details">
                    <div className="searched-name">Dr. Alama Madani</div>
                    <div className="searched-username text-muted">@DrHussainMadani</div>
                    <div className="searched-bio">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consectetur eum repudiandae,
                    </div>
                </div>
            </div>
        </div>
        <div className="people-result-section">
            <button className="follow-button">Following</button>
        </div>
    </div>
)
}

export default OrganisationResultCard