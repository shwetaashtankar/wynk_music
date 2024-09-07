import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Category from "./components/Navbar/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Trending from "./components/AllMode/Trending";
import SignInForm from "./components/AccountPage/SignInForm";
import SignUpForm from "./components/AccountPage/SignUpForm";
import { MusicProvider } from "./components/context/MusicContext";
import PlaySongs from "./components/context/PlaySongs";
import NewSongsMode from "./components/AllMode/NewSongsMode";
import OldSongsMode from "./components/AllMode/OldSongsMode";
import RomanticMode from "./components/AllMode/RomanticMode";
import ExcitedMood from "./components/AllMode/ExcitedMood";
import AlbumMode from "./components/AllMode/AlbumMode";

function App() {
  
  return (
    
      <div className="container">
        <MusicProvider>
        <Router>
          <Navbar />
          <Category />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/NewSongsMode" element={<NewSongsMode />} />
            <Route path="/OldSongsMode" element={<OldSongsMode />} />
            <Route path="/RomanticMode" element={<RomanticMode />} />
            <Route path="/ExcitedMood" element={<ExcitedMood />} />
            <Route path="/AlbumMode" element={<AlbumMode />} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/SignUp" element={<SignUpForm />} />
          </Routes>
          <PlaySongs/>
        </Router>
        </MusicProvider>
      </div>
    
  );
}

export default App;
