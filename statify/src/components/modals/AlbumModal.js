import React from "react";
import InfoTag from '../InfoTag';
import InfoTagGreenSpan from '../InfoTagGreenSpan';
import SongDissection from '../SongDissection';
import UserProfileCard from "../UserProfileCard";
import ArtistTag from '../NormalArtistsComp';
import ArtistTopTracks from "../ArtistTopTracks";

function AlbumModal(props) {


    return (
        <div className="bg-neutral-900 bg-opacity-60 fixed inset-0 z-50 backdrop-blur-sm">
        <div className="flex h-screen justify-center items-center">
            <div className="bg-neutral-900 border-4 border-pearmint rounded-xl text-xl text-white flex flex-col w-4/5 h-4/5 overflow-y-scroll" >
            

              <div className='flex shrink-0 overflow-hidden bg-[url("https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1")] h-80 w-full bg-auto place-items-start ' >
                <i class="fa-solid fa-chevron-left p-6 text-3xl" onClick={props.CloseModal} ></i>
                </div>
              <div className="text-neutral-200 text-5xl text-left pr-3 py-3 pl-6 font-bold shadow-md border-b-2 rounded-md border-neutral-800 ">Album name</div>


              {/* tags regarding info about song */}
              <div className="flex flex-wrap ">

                <InfoTag BigText={"14"} SmallText={"Tracks"} />
                <InfoTag BigText={"add more"} SmallText={"tags"} />
                

              </div>
              {/* end of info tags */}


              {/* bar graph section */}
              <SongDissection ValenceNum={"69%"} IstrumentalNum={"11%"} SpeechfulNum={"12%"} EnergeticNum={"13%"} DanceableNum={"22%"} PopularityNum={"54%"} AcousticNum={"66%"} LivelyNum={"11%"}/>
              {/* end of bar graph section */}

              {/* Artist Section */}
              <div className="flex flex-col place-items-center border-b-2 border-neutral-800 rounded-md p-6">
                <div className="text-pearmint text-3xl font-bold mb-2 ">
                    Artists
                </div>

                <ArtistTag Src={"https://i.scdn.co/image/ab67616d0000b273fcd3724fba954e6104e4530d"} ArtistName={"Joey Bada$$"} />

                <ArtistTag Src={"https://i.scdn.co/image/ab67616d0000b273fcd3724fba954e6104e4530d"} ArtistName={"add album content section"} />
              </div>
              {/* end of artist section */}


              {/* start of Album Content section */}
              <div className="flex flex-col border-b-2 border-neutral-800 ">

                <div className="text-neutral-200 text-2xl text-left font-bold px-6 pt-6 ">
                  Album Content
                </div>

                <div className="flex flex-col p-6 ">

                  <ArtistTopTracks Num={""} SongName={"Girls Want Girls (with Lil Baby)"} ArtistName={"Drake, Lil Baby"} Image={"https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/3:4/w_650,h_867,c_limit/Artist-Designed%20Album%20Covers%202.jpg"} />

                  <ArtistTopTracks Num={""} SongName={"Girls Want Girls (with Lil Baby)"} ArtistName={"Drake, Lil Baby"} Image={"https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"} />

                  <ArtistTopTracks Num={""} SongName={"Girls Want Girls (with Lil Baby)"} ArtistName={"Drake, Lil Baby"} Image={"https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"} />

                  <ArtistTopTracks Num={""} SongName={"Girls Want Girls (with Lil Baby)"} ArtistName={"Drake, Lil Baby"} Image={"https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"} />

                </div>
              </div>


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

              



            </div>
        </div>
    </div>
    );
};

export default AlbumModal;