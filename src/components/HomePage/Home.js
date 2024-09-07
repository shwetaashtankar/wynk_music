import React from 'react'
import Featured from './Mood/Featured'
import NewSongs from './Mood/NewSongs'
import OldSongs from './Mood/OldSongs'
import RomanticMode from './Mood/RomanticMode'
import HappyMode from './Mood/HappyMode'
import SadMode from './Mood/SadMode'
import ExcitedMode from './Mood/ExcitedMode'
import Album from './Mood/Album'

const Home = () => {
  return (
    <div className='container2'>
        
        <Featured/> 
        <NewSongs/>
        <OldSongs/>
        <RomanticMode/>
        <HappyMode/>
        <SadMode/>
        <ExcitedMode/>
        <Album/>
    </div>
  )
}

export default Home