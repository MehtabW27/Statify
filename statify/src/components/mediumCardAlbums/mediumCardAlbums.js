import React from 'react';
import { useState } from 'react';
import AlbumModal from '../modals/AlbumModal';

function MediumCardAlbum(props) {
  const [ModalShow, SetModalShow] = useState(false);

  const Close = () => {
      SetModalShow(false);
  };

  return (
      <div>
        <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-52 h-72 " + (ModalShow ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={() => {SetModalShow(true)}}>
            <img className='object-cover rounded-3xl' src={props.Src} alt="" />
            <div className='pb-2'>
                <div className='flex'>
                    <div className='px-2 pt-2 text-2xl font-bold text-gray-400'>#{props.AlbumNum}</div>
                    <div className='pl-3 text-xl pt-2 text-white'>{props.AlbumName}</div>
                </div>
                <div className='text-left pl-5 text-gray-500'>{props.ArtistName}</div> 
            </div>
        </div>
        {ModalShow && <AlbumModal CloseModal={Close} />}
      </div>
  );
}

export default MediumCardAlbum;