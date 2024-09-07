import React, { useContext, useEffect, useState } from 'react'
import { MusicContext } from './MusicContext'
import { useLocation } from 'react-router-dom'

const PlaySongs = () => {
  const location = useLocation()
  let path = location.pathname

  const { musicState, favSongs } = useContext(MusicContext)
  console.log(musicState);
  useEffect(() => {
    setIsLike(favSongs?.some(favsong => favsong._id === musicState._id));
  }, [musicState, favSongs]);

  //likesongs 
  const [isLike, setIsLike] = useState(false);

  async function likesongs() {
    let newSong = !favSongs;
    let token = sessionStorage.getItem('token')
    if (!token) {
      alert('Please log in to like a song.');
    }

    let songId = musicState._id
    const res = await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'projectID': "fgq9fidgo5dw",

      },
      body: JSON.stringify({ songId })
    });

    if (res.ok) {
      setIsLike(newSong)
    }
  }



  return (
    <div>
      {(path !== '/login' && path !== '/SignUp') && (
        <div className='displayMusic'>
          <img src={musicState.thumbnail} />
          {musicState?.audio_url && (
            <audio controls autoPlay src={musicState.audio_url}></audio>
          )}
          <button onClick={likesongs}>{isLike ? '❤' : '🤍'}</button>
        </div>
      )}
    </div>
  )
}

export default PlaySongs
