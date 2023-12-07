import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/search-results.css'
import SearchResultCard from '../components/SearchResultCard'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'
import CampaignCard from '../components/CampaignCard'
const SearchResults = () => {
return (
<>
    <Navbar />
    <div className="row gx-0">
        <div className="col-lg-3">&nbsp;</div>
        <div className="col-lg-6 result-data-wrapper">
            <div className="search-results-header">
                <div className="search-result-type result-active">All</div>
                <div className="search-result-type">Post</div>
                <div className="search-result-type">Videos</div>
                <div className="search-result-type">Clips</div>
                <div className="search-result-type">People</div>
                <div className="search-result-type">Organisations</div>
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
            <PostWithText />
            <CampaignCard />
        </div>
        <div className="col-lg-3">&nbsp;</div>
    </div>
</>
)
}

export default SearchResults