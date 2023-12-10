import React from 'react'
import avatar from '../assets/images/avtar.png'

const SearchResultCard = (props) => {
return (
<div className="search-result-people">
    <div className="search-result-wrapper">
        <div className="people-result-section">
            <div className="search-people-info">
                <div>
                    <div className="search-people-img-wrapper">
                        <img src={avatar} alt="" className="img-fit" />
                    </div>
                </div>
                <div className="search-people-details">
                    <div className="searched-name">{props.title}</div>
                    <div className="searched-username text-muted">@DrHussainMadani</div>
                </div>
            </div>
        </div>
        <div className="people-result-section">
            <button className="follow-button">Following</button>
        </div>
    </div>
    <div className="searched-bio px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium fuga perspiciatis dolor deserunt lreom
    </div>
</div>
)
}

export default SearchResultCard