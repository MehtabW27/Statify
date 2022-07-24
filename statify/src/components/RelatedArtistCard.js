import React from "react";

function RelatedArtistCard(props) {

    return (
        // <div className={' m-2 overflow-hidden duration-300  w-48  shrink-0 '} >
        //     <img className='object-cover rounded-md ' src={props.Src} alt="" />
        //     <div className="text-neutral-200 text-4xl font-bold">
        //         Artist Name
        //     </div>

        // </div>

        <div className={`text-neutral-200 text-4xl p-12 m-4 font-bold bg-neutral-300 rounded-2xl overflow-hidden bg-center bg-cover shrink-0 bg-neutral-700`} style={{backgroundImage: "url(" + props.Src + ")"}} >
            {props.ArtistName}
        </div>
        

    // <div className={'font-bold text-neutral-400 text-4xl m-2 rounded-md w-48 h-48 bg-[url("' + props.Src + '")] bg-white'}>
    //     Artist Name
    // </div>
    );
};

export default RelatedArtistCard;