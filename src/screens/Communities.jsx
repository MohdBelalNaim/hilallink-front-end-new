import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CommunityResultCard from '../components/CommunityResultCard'
import '../assets/css/communities.css'

const Communities = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="row gx-0">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 communities-wrapper">
                <div className="search-results-card community-result-card">
                    <div className="search-result-header">Communitites</div>
                    <div className="search-results-body">
                        <CommunityResultCard title={"Islam, Science and Technology"} />
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
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </>
  )
}

export default Communities