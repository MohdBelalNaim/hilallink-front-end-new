import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/search-results.css'
import SearchResultCard from '../components/SearchResultCard'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'
import CampaignCard from '../components/CampaignCard'
import vid from '../assets/video/shortclip.mp4'
import vid2 from '../assets/video/vid2.mp4'
import vid3 from '../assets/video/vid3.mp4'
import OrganisationResultCard from '../components/OrganisationResultCard'

const Explore = () => {
return (
<>
    <Navbar />
    <div className="container">
        <div className="row gx-0">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6 result-data-wrapper">
                <div className="result-search-feild-wrapper">
                    <input type="text" className="form-control explore-search-feild" placeholder='Try searching here' />
                </div>
                <div className="search-results-header">
                    <div className="search-result-type result-active">All</div>
                    <div className="search-result-type">Discover</div>
                    <div className="search-result-type">People</div>
                    <div className="search-result-type">Organisations</div>
                    <div className="search-result-type">Communities</div>
                </div>

                <CampaignCard />
                <div className="search-results-card mt-3">
                    <div className="search-results-body">
                        <OrganisationResultCard />
                        <OrganisationResultCard />
                        <OrganisationResultCard />
                    </div>

                    <div className="search-results-footer text-center">
                        View all
                    </div>
                </div>
                <div className="clips-container">
                    <div className="clips-wrapper">
                        <div className="clip">
                            <video src={vid} className='explore-clips' autoPlay muted />
                        </div>
                        <div className="clip">
                            <video src={vid2} className='explore-clips' autoPlay muted />
                        </div>
                        <div className="clip">
                            <video src={vid3} className='explore-clips' autoPlay muted />
                        </div>
                    </div>
                    <div className="view-all-link">
                        View All
                    </div>
                </div>
                <div className="search-results-card mt-3">
                    <div className="search-results-body">
                        <SearchResultCard />
                        <SearchResultCard />
                        <SearchResultCard />
                    </div>

                    <div className="search-results-footer text-center">
                        View all
                    </div>
                </div>
                <PostWithPhoto />
                <PostWithPhoto />
                <PostWithText />
                <PostWithText />
            </div>
            <div className="col-lg-3">&nbsp;</div>
        </div>̦
    </div>
</>
)
}

export default Explore