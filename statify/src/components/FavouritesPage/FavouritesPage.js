import React, { useEffect } from 'react';
import MediumCardSong from '../mediumCardSong/medCardSong';
import MediumCardArtist from '../mediumCardArtists/mediumCardArtists';
import MediumCardAlbum from '../mediumCardAlbums/mediumCardAlbums';
import TabBar from '../AnimatedTabBar/TabBar';
import SongModal from '../modals/SongModal';
import spotifyAPI from '../../ApiClient';
import { useState } from 'react';
import TwoTabBar from '../AnimatedTabBar/2TabBar';
import NavBar from '../navBar/navBar';
// {name: "init name"}

function FavouritesPage(props) {

  const [songs_6months, setSongs_6months] = useState([]);
  const [songs_4weeks, setSongs_4weeks] = useState([]);
  const [songs_lifetime, setSongs_lifetime] = useState([]);
  const [artists_6months, setArtists_6months] = useState([]);
  const [artists_4weeks, setArtists_4weeks] = useState([]);
  const [artists_lifetime, setArtists_lifetime] = useState([]);
  
  const fetchData = async () => {
    const result_s6m = await spotifyAPI.GetTop("tracks", "medium_term", "50", "0", window.localStorage.getItem("token"));
    setSongs_6months(result_s6m);

    const result_s4w = await spotifyAPI.GetTop("tracks", "short_term", "50", "0", window.localStorage.getItem("token"));
    setSongs_4weeks(result_s4w);

    const result_slt = await spotifyAPI.GetTop("tracks", "long_term", "50", "0", window.localStorage.getItem("token"));
    setSongs_lifetime(result_slt);

    const result_t6m = await spotifyAPI.GetTop("artists", "medium_term", "50", "0", window.localStorage.getItem("token"));
    setArtists_6months(result_t6m);

    const result_t4w = await spotifyAPI.GetTop("artists", "short_term", "50", "0", window.localStorage.getItem("token"));
    setArtists_4weeks(result_t4w);

    const result_tlt = await spotifyAPI.GetTop("artists", "long_term", "50", "0", window.localStorage.getItem("token"));
    setArtists_lifetime(result_tlt);


  };

  useEffect(() => {
    fetchData();
  }, [])







  const logout = () => {
    props.SEToken("");
    window.localStorage.removeItem("token");
    console.log("click")
  }

  const [TimeType, SetTimeType] = useState("4weeks");
  const [CardType, SetCardType] = useState("songs");

  // ArtistName={item.artists[0].name} Src={item.album.images[0].url} 

  return (
    <div className="w-full bg-neutral-900 ">
      <NavBar TokenState={props.Token} LogOut={logout} SetsCardType={SetCardType} />
      <div className=''>
        <TabBar btn1={"4 Weeks"} btn2={"6 Months"} btn3={"Lifetime"} ChangeTimeType={SetTimeType}/>
      </div>
      <div className="flex flex-wrap justify-center scroll-smooth overflow-y-scroll h-screen p-6">
          {((TimeType === "4weeks") && (CardType === "songs")) && songs_4weeks.map((item, index) => (
            <MediumCardSong SongName={item.name} ArtistName={item.artists[0].name} Src={item.album.images[0].url} SongNum={index + 1} SongInfo={item}/>
          ))}

          {((TimeType === "6months") && (CardType === "songs")) && songs_6months.map((item, index) => (
            <MediumCardSong SongName={item.name} ArtistName={item.artists[0].name} Src={item.album.images[0].url} SongNum={index + 1} SongInfo={item}/>
          ))}

          {((TimeType === "lifetime") && (CardType === "songs")) && songs_lifetime.map((item, index) => (
            <MediumCardSong SongName={item.name} ArtistName={item.artists[0].name} Src={item.album.images[0].url} SongNum={index + 1} SongInfo={item}/>
          ))}


          {((TimeType === "4weeks") && (CardType === "artists")) && artists_4weeks.map((item, index) => (
            <MediumCardArtist ArtistName={item.name} Src={item.images[0].url} ArtistNum={index + 1} ArtistInfo={item}/>
          ))}

          {((TimeType === "6months") && (CardType === "artists")) && artists_6months.map((item, index) => (
            <MediumCardArtist ArtistName={item.name} Src={item.images[0].url} ArtistNum={index + 1} ArtistInfo={item}/>
          ))}

          {((TimeType === "lifetime") && (CardType === "artists")) && artists_lifetime.map((item, index) => (
            <MediumCardArtist ArtistName={item.name} Src={item.images[0].url} ArtistNum={index + 1} ArtistInfo={item}/>
          ))}



      </div>
    </div>
  );
}

export default FavouritesPage;