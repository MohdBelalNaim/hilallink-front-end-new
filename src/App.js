import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import BasicDetails from './screens/signup/BasicDetails';
import UserName from './screens/signup/UserName';
import Main from './screens/Main';
import PostDetails from './screens/PostDetails';
import Shorts from './screens/Shorts';
import MadarsaProfile from './screens/MadarsaProfile';
import CampaignInfo from './screens/CampaignInfo';
import SearchResults from './screens/SearchResults';
import SearchPage from './screens/SearchPage';
import Explore from './screens/Explore';
import Messages from './screens/Messages';
import CommunityProfile from './screens/CommunityProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup/basic-details" element={<BasicDetails/>} />
        <Route path="/signup/username" element={<UserName/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/post" element={<PostDetails/>} />
        <Route path="/clips" element={<Shorts/>} />
        <Route path="/madarsa" element={<MadarsaProfile/>} />
        <Route path="/campaign" element={<CampaignInfo/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/search-results" element={<SearchResults/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/community" element={<CommunityProfile/>} />
      </Routes>
    </Router>
  );
}

export default App;
