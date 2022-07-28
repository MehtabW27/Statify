import React from "react";
import InfoTag from "../InfoTag";
import InfoTagGreenSpan from "../InfoTagGreenSpan";
import GenreTag from "../GenreTag";
import ArtistTopTracks from "../ArtistTopTracks";
import UserProfileCard from "../UserProfileCard";
import RelatedArtistCard from "../RelatedArtistCard";
import { useEffect } from "react";
import { useState } from "react";
import spotifyAPI from "../../ApiClient";

function ArtistModal(props) {


//   setTimeout(() => {props.CloseModal(false)}, 1000)
     const data = props.ArtistInfO;

     console.log("shit the artist modal gets",data);

     const followers = data.followers.total;
     const formattedFollowers = followers.toLocaleString('en-US');

     const artistID = data.id;

     const [ArtistAlbumsData, setArtistAlbumsData] = useState([]);
     const [ArtistTopTracksData, setArtistTopTracks] = useState([]);
     const [RelatedArtistsData, setRelatedArtistsData] = useState([]);

     const FetchData = async () => {
        const ArtistAlbumsresponse = await spotifyAPI.GetArtistsAlbums(artistID, "album,single", 50, window.localStorage.getItem("token"));
        setArtistAlbumsData(ArtistAlbumsresponse.items);

        const TopTracksresponse = await spotifyAPI.GetArtistsTopTracks(artistID, "CA", window.localStorage.getItem("token"));
        setArtistTopTracks(TopTracksresponse.tracks);

        const RelatedArtistsresponse = await spotifyAPI.GetArtistsRelatedArtists(artistID, window.localStorage.getItem("token"));
        setRelatedArtistsData(RelatedArtistsresponse.artists);

     };

    useEffect(() => {
      FetchData();
    }, []);

    console.log("i wanna kill myself", RelatedArtistsData)



  return (
    <div className="bg-neutral-900 bg-opacity-60 fixed inset-0 z-50 backdrop-blur-sm">
        <div className="flex h-screen justify-center items-center">
            <div className="bg-neutral-900 border-4 border-pearmint rounded-xl text-xl text-white flex flex-col w-4/5 h-4/5 overflow-y-scroll" >
            

              <div className='flex shrink-0 overflow-hidden h-96 w-full bg-cover bg-center place-items-start ' style={{backgroundImage: "url(" + data.images[0].url + ")"}} >
                <button onClick={props.onCloseModal} >
                  <i class="fa-solid fa-chevron-left p-6 text-3xl" ></i>
                </button>
                  
                
                </div>
              <div className="text-neutral-200 text-5xl text-left pr-3 py-3 pl-6 font-bold shadow-md border-b-2 rounded-md border-neutral-800 ">{data.name}</div>


              {/* tags regarding info about song */}
              <div className="flex flex-wrap justify-center scroll-smooth border-b-2 border-neutral-800">

              <InfoTag BigText={data.popularity} SmallText={"0-100 popularity"} />
              <InfoTag BigText={formattedFollowers} SmallText={"followers"} />
              {/* <InfoTag BigText={"#3"} SmallText={"of your most streamed artists during your lifetime"} />
              <InfoTag BigText={"#2"} SmallText={"of your most streamed artists during the past six months"} />
              <InfoTag BigText={"#5"} SmallText={"of your most streamed artists during the past 4 weeks"} />
              <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Artist Name"} SmallTextAfter={"has appeared in your top 50 tracks from the past 4 weeks"} />
              <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Artist Name"} SmallTextAfter={"has appeared in your top 50 tracks from the past 6 months"} />
              <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Artist Name"} SmallTextAfter={"has appeared in your top 50 tracks from your lifetime"} />
              <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Artist Name"} SmallTextAfter={"has appeared in your last 50 streams"} /> */}
              </div>
              {/* end of info tags */}

              {/* Genres section */}
              <div className="flex flex-col p-6 border-b-2 border-neutral-800">
                <div className="text-neutral-200 text-2xl text-left font-bold mb-1">
                  Genres
                </div>
                <div className="flex flex-wrap ">
                  {data.genres.map((item) => (
                  <GenreTag Genre={item} />
                  ))}
                </div>
              </div>
              {/* end of genre section */}


              {/* Top Tracks section */}
              <div className="flex flex-col border-b-2 border-neutral-800 ">

                <div className="text-neutral-200 text-2xl text-left font-bold px-6 pt-6 ">
                  Best Tracks
                </div>

                <div className="flex flex-col p-6 ">

                  {ArtistTopTracksData.map((item, index) => (
                    <ArtistTopTracks Num={index + 1} SongName={item.name} Image={item.album.images[0].url} />
                  ))}


                  {/* <ArtistTopTracks Num={"1"} SongName={"Girls Want Girls (with Lil Baby)"} ArtistName={"Drake, Lil Baby"} Image={"https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/3:4/w_650,h_867,c_limit/Artist-Designed%20Album%20Covers%202.jpg"} /> */}

                </div>
              </div>
              {/* end of tracks section */}

              {/* start of Artist's work section */}
              <div className="flex flex-col border-b-2 border-neutral-800 ">
                <div className="text-neutral-200 text-2xl text-left font-bold px-6 pt-6 ">
                  Discography
                </div>
                <div className="overflow-x-auto flex px-6 pt-1 ">


                  {ArtistAlbumsData.map((item) => (
                    <UserProfileCard Src={item.images[0].url} WorkName={item.name} AdditionalInfo={item.total_tracks + ' total tracks • ' + item.release_date} />
                  ))}

                </div>
              </div>
              {/* end of Artist's work section */}

              {/* start of related artists section */}
              <div className="flex flex-col border-b-2 border-neutral-800 ">
                <div className="text-neutral-200 text-2xl text-left font-bold px-6 pt-6 ">
                    Related Artists
                </div>
                <div className="overflow-x-auto flex px-6 pb-7 pt-1 ">

                  {RelatedArtistsData.map((item) => (
                    <RelatedArtistCard Src={item.images[0].url} ArtistName={item.name} />
                  ))}
                  
                </div>
              </div>
              {/* end of profiles section */}






            </div>
        </div>
    </div>
  )
};

export default ArtistModal;