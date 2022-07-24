import React from "react";

function ArtistTag(props) {

    return (
        <div className={'text-neutral-200 text-4xl p-6 mx-8 mb-8 mt-1 font-bold bg-neutral-300 w-4/5 rounded-2xl overflow-hidden object-cover bg-center bg-neutral-700'} style={{backgroundImage: "url(" + props.Src + ")"}}>
                  {props.ArtistName}
        </div>
    );
};

export default ArtistTag;