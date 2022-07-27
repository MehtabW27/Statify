import React from 'react';
import InfoTag from '../InfoTag';
import InfoTagGreenSpan from '../InfoTagGreenSpan';
import SongDissection from '../SongDissection';
import UserProfileCard from "../UserProfileCard";
import ArtistTag from '../NormalArtistsComp';

function SongModal({onCloseModal}) {


  // setTimeout(() => {props.CloseModal();}, 1000);


  return (
    <div className="bg-neutral-900 bg-opacity-60 fixed inset-0 z-50 backdrop-blur-sm">
        <div className="flex h-screen justify-center items-center">
            <div className="bg-neutral-900 border-4 border-pearmint rounded-xl text-xl text-white flex flex-col w-4/5 h-4/5 overflow-y-scroll" >
            

              <div className='flex shrink-0 overflow-hidden bg-[url("https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1")] h-80 w-full bg-auto place-items-start ' >
                <button onClick={onCloseModal} >
                  <i class="fa-solid fa-chevron-left p-6 text-3xl" ></i>
                </button>
                  
                
                </div>
              <div className="text-neutral-200 text-5xl text-left pr-3 py-3 pl-6 font-bold shadow-md border-b-2 rounded-md border-neutral-800 ">Song name</div>


              {/* tags regarding info about song */}
              <div className="flex flex-wrap ">

                <InfoTag BigText={"7.7"} SmallText={"0-10 popularity"} />
                <InfoTag BigText={"2:53"} SmallText={"track length"} />
                <InfoTag BigText={"#29"} SmallText={"of your most streamed tracks during your lifetime"} />
                <InfoTag BigText={"#2"} SmallText={"of your most streamed tracks during the past six months"} />
                <InfoTag BigText={"#13"} SmallText={"of your most streamed tracks during the past 4 weeks"} />
                <InfoTagGreenSpan BigText={"1"} SmallTextBefore={"times"} SmallTextGreen={"Song Name"} SmallTextAfter={"has appeared in your last 50 streams"} />
                

              </div>
              {/* end of info tags */}


              {/* bar graph section */}
              <SongDissection ValenceNum={"69%"} IstrumentalNum={"11%"} SpeechfulNum={"12%"} EnergeticNum={"13%"} DanceableNum={"22%"} PopularityNum={"54%"} AcousticNum={"66%"} LivelyNum={"11%"}/>
              {/* end of bar graph section */}

              {/* album section */}
              <div className="flex flex-wrap place-items-center justify-center" >

                <div className="flex flex-col place-items-center px-8 pb-8 pt-4">
                  <div className="text-pearmint text-2xl  text-left font-bold  pb-2">
                    Album
                  </div>
                  <img src="https://i1.sndcdn.com/artworks-000420880812-gvw256-t500x500.jpg" alt="" className="w-52 h-52 object-cover overflow-hidden rounded-lg" />
                </div>

                <div className="text-neutral-200 text-3xl  font-bold p-4">
                   Mercury The seventh
                </div>

              </div>
              {/* end of album section */}

              {/* Artist Section */}
              <div className="flex flex-col place-items-center border-b-2 border-neutral-800 rounded-md">
                <div className="text-pearmint text-3xl font-bold mb-2 ">
                    Artists
                </div>

                <ArtistTag Src={"https://i.scdn.co/image/ab67616d0000b273fcd3724fba954e6104e4530d"} ArtistName={"Joey Bada$$"} />
              </div>
              {/* end of artist section */}


              {/* start of biggest listeners section */}
              <div className="flex flex-col border-b-2 border-neutral-800 ">
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
              </div>
              {/* end of biggest listeners section */}

              {/* audio analysis */}
              <div className="flex flex-col m-4">

                <div className="text-pearmint text-3xl font-bold text-left p-4 ">
                      Song Analysis
                </div>

                <div className="flex flex-wrap">
                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      F
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Audio Key
                    </div>
                  </div>

                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      98.355
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Tempo (bpm)
                    </div>
                  </div>

                  <div className=" p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                    <div className="text-green-500 font-bold  text-6xl">
                      3/4
                    </div>
                    <div className="text-neutral-100 text-xl font-bold pt-2">
                      Time Signature
                    </div>
                  </div>

                  <div className=" p-4 m-4 bg-green-600 rounded-xl w-80">
                    <div className="text-neutral-900 font-bold  text-6xl">
                    <i class="fa-brands fa-spotify"></i>
                    </div>
                    <div className="text-neutral-300 text-xl font-bold pt-2">
                      Open in spotify
                    </div>
                  </div>


                </div>

                


              </div>
              



            </div>
        </div>
    </div>
  )
};

export default SongModal;


// w-52 h-30 shrink-0