import React from "react";

function GenreTag(props) {

    return (
        <div className="text-white text-xl font-bold bg-neutral-800 py-1 px-3 rounded-3xl m-2 ">
            {props.Genre}
        </div>
    );
};

export default GenreTag;