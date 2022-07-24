import React from "react";

function ArtistTopTracks(props) {

    return (
        <div className="flex bg-neutral-800 p-2 m-2 rounded-2xl justify-between">
                    <div className="flex place-items-center">
                      <div className="text-green-500 font-bold text-4xl p-2">
                        {props.Num}
                      </div>
                      <div className="flex flex-col p-2">
                        <div className="text-xl text-white font-bold text-left">
                          {props.SongName}
                        </div>
                        <div className="text-lg text-gray-500 font-bold text-left">
                          {props.ArtistName}
                        </div>
                      </div>
                    </div>
                    <div className={'w-20 h-20 rounded-lg bg-cover overflow-hidden bg-center shrink-0 '}>
                      <img src={props.Image} alt="" />
                    </div>
        </div>
    );
};

export default ArtistTopTracks;

// bg-[url("' + props.Image + '")]