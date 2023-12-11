import React from 'react'
import { Link } from 'react-router-dom'

const CommunityResultCard = (props) => {
  return (
    <div className="search-result-people">
    <div className="search-result-wrapper">
        <div className="people-result-section">
            <div className="search-people-info">
                <div>
                    <div className="search-people-img-wrapper">
                        <i className="bi bi-people-fill" style={{"fontSize":32+"px","position":"relative","left":10+"px"}}></i>
                    </div>
                </div>
                <div className="search-people-details">
                    <Link to="/community" style={{"color":"black","textDecoration":"none"}}><div className="searched-name">{props.title}</div></Link>
                    <div className="searched-username text-muted">@DrHussainMadani</div>
                </div>
            </div>
        </div>
        <div className="people-result-section">
            <button className="follow-button">Join</button>
        </div>
    </div>
    <div className="searched-bio px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium fuga perspiciatis dolor deserunt lreom
    </div>
</div>
  )
}

export default CommunityResultCard