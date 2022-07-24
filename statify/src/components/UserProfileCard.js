import React from "react";

function UserProfileCard(props) {

    return (
        <div className={" flex flex-col  m-2 overflow-hidden place-items-center w-60 shrink-0"} >
            <img className='object-cover rounded-full w-40' src={props.Src} alt="" />
                        
            <div className='flex flex-col pt-2'>
                <div className='flex text-left'>
                    <div className=' text-lg font-bold text-gray-400 pr-2 pt-2 '>1.</div>
                    <div className='text-lg text-white content-center  pr-2 pt-2 '>{props.ProfileName}</div>
                </div>
                <div className=' text-gray-500 text-sm text-left'>{props.StreamNums}</div> 
            </div>
        </div>
    );

};

export default UserProfileCard;