import React, { useEffect, useState } from 'react';
import InfoTag from '../InfoTag';
import InfoTagGreenSpan from '../InfoTagGreenSpan';
import SongDissection from '../SongDissection';
import UserProfileCard from "../UserProfileCard";
import ArtistTag from '../NormalArtistsComp';
import spotifyAPI from '../../ApiClient';

function SongModal(props) {

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  console.log("shit the song modal gets", props.SongInfO);

  const dataSong = props.SongInfO;
  const songID = dataSong.id;

  // const asda = spotifyAPI.GetAudioFeatures(songID, window.localStorage.getItem("token"));


  const [AudioFeaturesData, SetAudioFeaturesData] = useState({});

  const [artistsDataArray, setArtistsDataArray] = useState([]);
  const artistarray = dataSong.artists;

  console.log("this is the initial artist array before api", artistarray)


  const AudioFeaturesFetchData = async () => {
    const response = await spotifyAPI.GetAudioFeatures(songID, window.localStorage.getItem("token"));
    SetAudioFeaturesData(response)

  };

  const ArrayOfArtistInfoFetchData = () => {
    artistarray.forEach(artist => {
      const artistresponse = spotifyAPI.GetArtist(artist.id, window.localStorage.getItem("token"));
      console.log("artist response", artistresponse)
      artistresponse.then(res => {
        artistsDataArray.push(res);
      });
    });
  }

  




  useEffect(() => {
    AudioFeaturesFetchData();
    ArrayOfArtistInfoFetchData();
  }, []);


  console.log("this is the final artist info array", artistsDataArray);







  const Valence = (AudioFeaturesData.valence * 100);
  const Valencerounded = Math.round(Valence * 10) / 10;

  const Instrumental = (AudioFeaturesData.instrumentalness * 100);
  const Instrumentalrounded = Math.round(Instrumental * 10) / 10;

  const Speechful = (AudioFeaturesData.speechiness * 100);
  const Speechfulrounded = Math.round(Speechful * 10) / 10;

  const energetic = (AudioFeaturesData.energy * 100);
  const Energeticrounded = Math.round(energetic * 10) / 10;

  const Danceable = (AudioFeaturesData.danceability * 100);
  const Danceablerounded = Math.round(Danceable * 10) / 10;

  const Acoustic = (AudioFeaturesData.acousticness * 100);
  const Acousticrounded = Math.round(Acoustic * 10) / 10;

  const Lively = (AudioFeaturesData.liveness * 100);
  const Livelyrounded = Math.round(Lively * 10) / 10;

  function integerToPitch (int) {
    if (int === -1) {
      return "no key found";
    }
    else if (int === 0) {
      return "C";
    }
    else if (int === 1) {
      return "C#";
    }
    else if (int === 2) {
      return "D";
    }
    else if (int === 3) {
      return "D#";
    }
    else if (int === 4) {
      return "E";
    }
    else if (int === 5) {
      return "F";
    }
    else if (int === 6) {
      return "F#";
    }
    else if (int === 7) {
      return "G";
    }
    else if (int === 8) {
      return "G#";
    }
    else if (int === 9) {
      return "A";
    }
    else if (int === 10) {
      return "A#";
    }
    else {
      return "B";
    }
  }

  if (!props.IsOpen) {
    return null;
  }
  return (
    <div className="bg-neutral-900 bg-opacity-60 fixed inset-0 z-50 backdrop-blur-sm">
        <div className="flex h-screen justify-center items-center">
            <div className="bg-neutral-900 border-4 border-pearmint rounded-xl text-xl text-white flex flex-col w-4/5 h-4/5 overflow-y-scroll" >
            

              <div className='flex shrink-0 overflow-hidden h-96 w-full bg-cover bg-center place-items-start ' style={{backgroundImage: "url(" + dataSong.album.images[0].url + ")"}} >
                <button onClick={props.onCloseModal} >
                  <i class="fa-solid fa-chevron-left p-6 text-3xl" ></i>
                </button>
                  
                
                </div>
              <div className="text-neutral-200 text-5xl text-left pr-3 py-3 pl-6 font-bold shadow-md border-b-2 rounded-md border-neutral-800 ">{dataSong.name}</div>


              {/* tags regarding info about song */}
              <div className="flex flex-wrap ">

                <InfoTag BigText={dataSong.popularity} SmallText={"0-100 popularity"} />
                <InfoTag BigText={millisToMinutesAndSeconds(dataSong.duration_ms)} SmallText={"track length"} />
                <InfoTag BigText={AudioFeaturesData.loudness + " dB"} SmallText={"loudness"} />
                {/* <InfoTag BigText={"#29"} SmallText={"of your most streamed tracks during your lifetime"} />
                <InfoTag BigText={"#2"} SmallText={"of your most streamed tracks during the past six months"} />
                <InfoTag BigText={"#13"} SmallText={"of your most streamed tracks during the past 4 weeks"} />
                <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Song Name"} SmallTextAfter={"has appeared in your last 50 streams"} /> */}
                

              </div>
              {/* end of info tags */}


              {/* bar graph section */}
              <SongDissection ValenceNum={Valencerounded + "%"} IstrumentalNum={Instrumentalrounded + "%"} SpeechfulNum={Speechfulrounded + "%"} EnergeticNum={Energeticrounded + "%"} DanceableNum={Danceablerounded + "%"} PopularityNum={dataSong.popularity + "%"} AcousticNum={Acousticrounded + "%"} LivelyNum={Livelyrounded + "%"}/>
              {/* end of bar graph section */}

              {/* album section */}
              <div className="flex flex-wrap place-items-center justify-center" >

                <div className="flex flex-col place-items-center px-8 pb-8 pt-4">
                  <div className="text-pearmint text-2xl  text-left font-bold  pb-2">
                    Album
                  </div>
                  <img src={dataSong.album.images[1].url} alt="" className="w-52 h-52 object-cover overflow-hidden rounded-lg" />
                </div>

                <div className="text-neutral-200 text-3xl  font-bold p-4">
                   {dataSong.album.name}
                </div>

              </div>
              {/* end of album section */}

              {/* Artist Section */}
              <div className="flex flex-col place-items-center border-b-2 border-neutral-800 rounded-md">
                <div className="text-pearmint text-3xl font-bold mb-2 ">
                    Artists
                </div>

                {/* {dataSong.artists.map((artist) => (
                  
                ))} */}

                <ArtistTag Src={"https://i.scdn.co/image/ab67616d0000b273fcd3724fba954e6104e4530d"} ArtistName={"Joey Bada$$"} />
              </div>
              {/* end of artist section */}


              {/* start of biggest listeners section */}
              {/* <div className="flex flex-col border-b-2 border-neutral-800 ">
                <div className="text-neutral-200 text-2xl text-left font-bold px-6 pt-6 ">
                    Biggest Fans
                </div>
                <div className="overflow-x-auto flex px-6 pb-7 pt-1 ">
                  <UserProfileCard Src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mjINjChGGwk5RdRPVIGE-FgEn_zILUX53A&usqp=CAU"} ProfileName={"Kumala"} StreamNums={"9,000 minutes • 41,333 streams"}/>
                  <UserProfileCard Src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mjINjChGGwk5RdRPVIGE-FgEn_zILUX53A&usqp=CAU"} ProfileName={"Kumala"} StreamNums={"9,000 minutes • 41,333 streams"}/>
                  <UserProfileCard Src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mjINjChGGwk5RdRPVIGE-FgEn_zILUX53A&usqp=CAU"} ProfileName={"Kumala"} StreamNums={"9,000 minutes • 41,333 streams"}/>
                  <UserProfileCard Src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mjINjChGGwk5RdRPVIGE-FgEn_zILUX53A&usqp=CAU"} ProfileName={"Kumala"} StreamNums={"9,000 minutes • 41,333 streams"}/>
                  <UserProfileCard Src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mjINjChGGwk5RdRPVIGE-FgEn_zILUX53A&usqp=CAU"} ProfileName={"Kumala"} StreamNums={"9,000 minutes • 41,333 streams"}/>

                </div>
              </div> */}
              {/* end of biggest listeners section */}

              {/* audio analysis */}
              <div className="flex flex-col m-4">

                <div className="text-pearmint text-3xl font-bold text-left p-4 ">
                      Song Analysis
                </div>

                <div className="flex flex-wrap">
                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      {integerToPitch(AudioFeaturesData.key)}
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Audio Key
                    </div>
                  </div>

                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      {AudioFeaturesData.tempo}
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Tempo (bpm)
                    </div>
                  </div>

                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      {AudioFeaturesData.time_signature}/4
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Time Signature
                    </div>
                  </div>

                  <a href={dataSong.external_urls.spotify} target="_blank" rel="noreferrer noopener" className=" p-4 m-4 bg-green-600 rounded-xl w-80" >
                    <div className="text-neutral-900 font-bold  text-6xl">
                    <i class="fa-brands fa-spotify"></i>
                    </div>
                    <div className="text-neutral-300 text-xl font-bold pt-2">
                      Open in spotify
                    </div>
                  </a>

                  {/* //https://open.spotify.com/track/2tKjz2r6ythkV1VtltQS9k */}


                </div>

                


              </div>
              



            </div>
        </div>
    </div>
  )
};

export default SongModal;


// w-52 h-30 shrink-0