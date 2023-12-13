import React, { useState } from 'react'
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
import CommunityResultCard from '../components/CommunityResultCard'
import CampaignCardAlt from '../components/CampaignCardAlt'
import { Link } from 'react-router-dom'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'

const Explore = () => {
const [people,setPeople] = useState(false)
const [organisation,setOrganisation] = useState(false)
const [explore,setExplore] = useState(true)
const [community,setCommunity] = useState(false)

function changeMarker(category){
    let all = document.getElementsByClassName("search-result-type")
    
}

function showPeople(category){
    setCommunity(false)
    setOrganisation(false)
    setExplore(false)
    setPeople(true)
    window.scrollTo(0, 0)
    changeMarker(category)
}
function showExplore(category){
    setCommunity(false)
    setOrganisation(false)
    setExplore(true)
    setPeople(false)
    window.scrollTo(0, 0)
    changeMarker(category)
}
function showCommunity(category){
    setCommunity(true)
    setOrganisation(false)
    setExplore(false)
    setPeople(false)
    window.scrollTo(0, 0)
    changeMarker(category)
}
function showOrganisation(category){
    setCommunity(false)
    setOrganisation(true)
    setExplore(false)
    setPeople(false)
    window.scrollTo(0, 0)
    changeMarker(category)
}

return (
<>
    <Navbar />
    <div className="container">
        <div className="row gx-0">
            <div className="col-lg-3 explore-mobile-extra">&nbsp;</div>
            <div className="col-lg-6 result-data-wrapper">
                <div className="result-search-feild-wrapper">
                    <input type="text" className="form-control explore-search-feild" placeholder='Try searching here' />
                </div>
                <div className="search-results-header" style={{"zIndex":9999999}}>
                    <div className="search-result-type result-active" onClick={()=>showExplore("discover")} id="discover">Discover</div>
                    <div className="search-result-type" onClick={()=>showPeople("people")} id="people">People</div>
                    <div className="search-result-type" onClick={()=>showOrganisation("organisation")} id="organisation">Organisations</div>
                    <div className="search-result-type" onClick={()=>showCommunity("communtiy")} id="community">Communities</div>
                </div>

                {
                community?
                <div className="search-results-card mt-1">
                    <div className="search-result-header">Communitites</div>
                    <div className="search-results-body">
                        <CommunityResultCard title={"HilalLink Community"} />
                        <CommunityResultCard title={"Ask a Muslim"} />
                        <CommunityResultCard title={"Islam and Education"} />
                        <CommunityResultCard title={"Islam and Human Rights"} />
                        <CommunityResultCard title={"HilalLink Community"} />
                        <CommunityResultCard title={"Ask a Muslim"} />
                        <CommunityResultCard title={"Islam and Education"} />
                        <CommunityResultCard title={"Islam and Human Rights"} />
                        <CommunityResultCard title={"HilalLink Community"} />
                        <CommunityResultCard title={"Ask a Muslim"} />
                        <CommunityResultCard title={"Islam and Education"} />
                        <CommunityResultCard title={"Islam and Human Rights"} />
                    </div>
                </div>
                :""
                }

                {
                organisation?
                <div className="search-results-card mt-1">
                    <div className="search-result-header">Organisations</div>
                    <div className="search-results-body">
                        <OrganisationResultCard title={"ISCST India"} />
                        <OrganisationResultCard title={"Millat Foundation"} />
                        <OrganisationResultCard title={"Khidmat Foundation"} />
                        <OrganisationResultCard title={"AIMIM India"} />
                        <OrganisationResultCard title={"ISCST India"} />
                        <OrganisationResultCard title={"Millat Foundation"} />
                        <OrganisationResultCard title={"Khidmat Foundation"} />
                        <OrganisationResultCard title={"AIMIM India"} />
                        <OrganisationResultCard title={"ISCST India"} />
                        <OrganisationResultCard title={"Millat Foundation"} />
                        <OrganisationResultCard title={"Khidmat Foundation"} />
                        <OrganisationResultCard title={"AIMIM India"} />
                    </div>
                </div>
                :""
                }


                {
                people?
                <div className="search-results-card mt-1">
                    <div className="search-result-header">People</div>
                    <div className="search-results-body">
                        <SearchResultCard title={"Dr. Alama Hussain Madani"} />
                        <SearchResultCard title={"Khursheed Amhad Khan"} />
                        <SearchResultCard title={"Sajad Khaki"} />
                        <SearchResultCard title={"Dr. Alama Hussain Madani"} />
                        <SearchResultCard title={"Khursheed Amhad Khan"} />
                        <SearchResultCard title={"Sajad Khaki"} />
                        <SearchResultCard title={"Dr. Alama Hussain Madani"} />
                        <SearchResultCard title={"Khursheed Amhad Khan"} />
                        <SearchResultCard title={"Sajad Khaki"} />
                    </div>
                </div>
                :""
                }

                {
                explore?
                <>
                    <Link to="/campaign" style={{"textDecoration":"none","color":"black"}}>
                    <CampaignCardAlt />
                    </Link>
                    <div className="search-results-card mt-1">
                        <div className="search-result-header">People</div>
                        <div className="search-results-body">
                            <SearchResultCard title={"Dr. Alama Hussain Madani"} />
                            <SearchResultCard title={"Khursheed Amhad Khan"} />
                            <SearchResultCard title={"Sajad Khaki"} />
                        </div>
                        <div style={{"cursor":"pointer"}} onClick={()=>showPeople()} className="search-results-footer text-center">
                            View all
                        </div>
                    </div>
                    <div className="clips-container">
                        <div className="clips-wrapper">
                            <div className="clip">
                                <video src={vid} className='explore-clips' autoPlay muted loop />
                            </div>
                            <div className="clip">
                                <video src={vid2} className='explore-clips' autoPlay muted loop />
                            </div>
                            <div className="clip">
                                <video src={vid3} className='explore-clips' autoPlay muted loop />
                            </div>
                        </div>
                        <div className="view-all-link">
                            View All
                        </div>
                    </div>
                    <div className="search-results-card mt-1">
                        <div className="search-result-header">Organisations</div>
                        <div className="search-results-body">
                            <OrganisationResultCard title={"ISCST India"} />
                            <OrganisationResultCard title={"Millat Foundation"} />
                            <OrganisationResultCard title={"Khidmat Foundation"} />
                        </div>

                        <div style={{"cursor":"pointer"}} onClick={()=>showOrganisation()} className="search-results-footer text-center">
                            View all
                        </div>
                    </div>
                    <div className="search-results-card mt-3">
                        <div className="search-result-header">Communitites</div>
                        <div className="search-results-body">
                            <CommunityResultCard title={"HilalLink Community"} />
                            <CommunityResultCard title={"Ask a Muslim"} />
                            <CommunityResultCard title={"Islam and Education"} />
                        </div>

                        <div style={{"cursor":"pointer"}} onClick={()=>showCommunity()} className="search-results-footer text-center">
                            View all
                        </div>
                    </div>
                    <PostWithPhoto title={"Dr. Alama Hussain Madani"} image={img1} />
                    <PostWithPhoto title={"Khursheed Ahmad Khan"} image={img2} />
                    <PostWithText />
                    <PostWithText />
                </>
                :""
                }
            </div>
            <div className="col-lg-3">&nbsp;</div>
        </div>̦
    </div>
</>
)
}

export default Explore