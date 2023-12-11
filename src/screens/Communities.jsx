import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CommunityResultCard from '../components/CommunityResultCard'
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
                <div className="col-lg-6 px-5">
                <div className="search-results-card mt-2">
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