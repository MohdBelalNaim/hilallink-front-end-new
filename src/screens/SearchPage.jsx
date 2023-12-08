import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/search.css'

const SearchPage = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 px-5 mt-2 rounded">
                    <div className="search-box-wrapper rounded">
                        <input type="text" className='form-control search-page-feild' placeholder='Try searching here'/>
                        <div className="recent-search-card">
                          <div className="recent-search-icon">
                              <i className="bi bi-x"></i>
                          </div>
                          <div className="recent-search-text">
                            Muslim
                          </div>
                        </div>
                        <div className="recent-search-card">
                          <div className="recent-search-icon">
                              <i className="bi bi-x"></i>
                          </div>
                          <div className="recent-search-text">
                            Muslim
                          </div>
                        </div>
                        <div className="recent-search-card">
                          <div className="recent-search-icon">
                              <i className="bi bi-x"></i>
                          </div>
                          <div className="recent-search-text">
                            Muslim
                          </div>
                        </div>
                        <div className="recent-search-card">
                          <div className="recent-search-icon">
                              <i className="bi bi-x"></i>
                          </div>
                          <div className="recent-search-text">
                            Muslim
                          </div>
                        </div>
                        <div className="recent-search-card">
                          <div className="recent-search-icon">
                              <i className="bi bi-x"></i>
                          </div>
                          <div className="recent-search-text">
                            Muslim
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </>
  )
}

export default SearchPage