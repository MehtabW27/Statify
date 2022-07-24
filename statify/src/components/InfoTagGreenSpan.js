import React from "react";

function InfoTagGreenSpan(props) {

    return (
        <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl">
                  <div className="text-green-500 font-bold text-left">
                    {props.BigText}
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    {props.SmallTextBefore} <span className='text-green-500'>{props.SmallTextGreen}</span> {props.SmallTextAfter}
                  </div>
        </div>
    );
};

export default InfoTagGreenSpan;