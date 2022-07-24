import React, { useEffect } from 'react';
import { useState} from 'react';
import SongModal from '../modals/SongModal';

function MediumCardSong(props) {

    const [ModalOn, SetModalOn] = useState(false);

    

    const logout = () => {
        SetModalOn(false);
        console.log("this is modalon val: " + ModalOn);
    };

  return (
      <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-52 h-72 " + (ModalOn ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={() => {SetModalOn(true);}}>
          <img className='object-cover rounded-3xl' src={props.Src} alt="" />
          <div className='pb-2'>
              <div className='flex'>
                  <div className='px-2 pt-2 text-2xl font-bold text-gray-400'>#{props.SongNum}</div>
                  <div className='pl-3 text-xl pt-2 text-white'>{props.SongName}</div>
              </div>
              <div className='text-left pl-5 text-gray-500'>{props.ArtistName}</div> 
          </div>
          {ModalOn && <SongModal CloseModal={logout} />}
      </div>
  );
}

export default MediumCardSong; 
// hover:scale-105