import React from 'react';
import { useState } from 'react';
import ArtistModal from '../modals/ArtistModal';

function MediumCardArtist(props) {
  const [ArtistModalOn, SetArtistModal] = useState(false);


  return (
      <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-52 h-72 " + (ArtistModalOn ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={() => {SetArtistModal(true)}}>
          <img className='object-cover rounded-3xl' src={props.Src} alt="" />
          <div className='pb-2 flex place-items-center'>
                  <div className='pl-4 pr-2 pt-2 text-2xl font-bold text-gray-400'>#{props.ArtistNum}</div>
                  <div className='px-3 text-xl pt-2 text-white'>{props.ArtistName}</div>
          </div>
          {ArtistModalOn && <ArtistModal CloseModal={SetArtistModal} />}
      </div>
  );
}

export default MediumCardArtist;