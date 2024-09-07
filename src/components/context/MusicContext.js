// MusicContext.js
import { createContext, useEffect, useState } from "react";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  // console.log("MusicProvider rendered");
  const [musicState, setMusicState] = useState({});
  const [favSong, setfavSong] = useState([]);

  const getData = async () => {
    let token = sessionStorage.getItem("token");
    if (!token) return;

    let res = await fetch(
      "https://academics.newtonschool.co/api/v1/music/favorites/like",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          projectID: "fgq9fidgo5dw",
        },
      }
    );
    let data = await res.json();
    setfavSong(data.data.songs);
    console.log(favSong);
  };

  useEffect(()=>{
    getData();
  },[setMusicState])


  return (
    <MusicContext.Provider value={{ musicState, setMusicState, favSong,  setfavSong }}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider, MusicContext };
