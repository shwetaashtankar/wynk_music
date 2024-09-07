import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MusicContext } from "../context/MusicContext";

const OldSongsMode = () => {

  const [Data, setData] = useState([]);
  let {setMusicState} = useContext(MusicContext)

  const getData = async () => {
    let res = await fetch(
      'https://academics.newtonschool.co/api/v1/music/song?limit=100',
      {
        headers: {
          projectId: " fgq9fidgo5dw",
        },
      }
    );
    let data = await res.json();
    setData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  //   getData();

  // console.log('hhhhhh')

  function PlayMusic(e){
    setMusicState({
      _id:e._id,
      title:e.title,
      audio_url:e.audio_url,
      thumbnail:e.thumbnail
    })
  }

  return (
    <>
    <div className="AllModeContainer">
      <h4>Old Songs</h4>
      <div className="AllModeSongs">
          {Data.map((e) => (
            <div  className="card" key={e._id} onClick={() => PlayMusic(e)}>
              <img src={e.thumbnail} alt="image" />
              <p>{e.title}</p>
            </div>
          ))}
    </div>
    </div>
    </>
  );
};

export default OldSongsMode;
