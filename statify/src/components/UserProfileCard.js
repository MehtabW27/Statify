import React from "react";

function UserProfileCard(props) {

    return (
        <div className={" flex flex-col  m-2 overflow-hidden w-60 shrink-0"} >
            <img className='object-cover rounded-3xl w-40 bg-white' src={props.Src} alt="" />
                        
            <div className='flex flex-col pt-2'>
                <div className='flex text-left'>
                    <div className='text-lg text-white content-center '>{props.WorkName}</div>
                </div>
                <div className=' text-gray-500 text-sm text-left'>{props.AdditionalInfo}</div> 
            </div>
        </div>
    );

};

export default UserProfileCard;