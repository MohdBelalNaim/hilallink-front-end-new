import React from 'react'
import '../assets/css/messages.css'
import Navbar from '../components/Navbar'
import avatar from '../assets/images/avtar.png'

const Messages = () => {
  return (
    <>
    <Navbar/>
    <div className="container gx-0">
      <div className="row gx-0">
        <div className="col-md-3"></div>
        <div className="col-md-6 main-wrapper">
          <div className="messages-wrapper">
            <div className="message-search-container">
              <input type="text" placeholder='Search for a message' className="message-search form-control" />
            </div>
            <div className="all-messages ">
              <div className="message-type-container">
                <div className="message-type-pill">All</div>
                <div className="message-type-pill">Unread</div>
                <div className="message-type-pill">Request</div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
              <div className="message-item">
                <div className="message-sections">
                  <div className="message-image-wrapper">
                    <img src={avatar} alt="" className="img-fit" />
                  </div>
                </div>
                <div className="message-sections">
                  <div className="message-username">Dr. Alama Hussain Madani</div>
                  <div className="message-lastText">This is a test message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    </>
  )
}

export default Messages