import React from 'react'
import '../assets/css/campaign-card-alt.css'
import cardImage from '../assets/images/madarsa.webp'
import { Link } from 'react-router-dom'
const CampaignCardAlt = () => {
  return (
    <>
    <div className="campaign-card-alt-wrapper">
      <div className="campaign-card-alt-image-wrapper">
        <img src={cardImage} alt="" className="campaign-card-alt-image" />
      </div>
      <div className="campaign-card-info-alt">
        <div className="campaign-card-info-sections alt-1">
          <div className="alt-donate-title">
            Support and Donate to Madarsa Hanfiya Zyaul
          </div>
          <div className="alt-donate-subtitle">
            hilallink.com/ummagive/HanfiyaZiaulQUran
          </div>
          <div className="donate-alt-progress">
            <div className="madarsa-progress-wrapper progress-wrapper-alt">
              <div className="madarsa-progress progress-alt"></div>
            </div>
          </div>
        </div>
        
        <div className="campaign-card-info-sections alt-2">
          <Link to="/campaign"><button className="donate-alt">Donate</button></Link>
        </div>
      </div>
      <div className="alt-fund-info pb-3">
            <div className="alt-fund-info-sections fund-info" style={{"paddingLeft":10+'px'}}>
              13,20,000 <span className='text-muted'> raised of 20,00,000</span>
            </div>
            <div className="alt-fund-info-sections fund-info">
              602 <span className='text-muted'> Givers</span>
            </div>
            <div className="alt-fund-info-sections fund-info" style={{"paddingRight":10+'px'}}>
              18 <span className='text-muted'> Days left</span>
            </div>
          </div>
    </div>
    </>
  )
}

export default CampaignCardAlt