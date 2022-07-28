import React from 'react';
import { useState } from 'react';
import ArtistModal from '../modals/ArtistModal';
import ModalClass from '../modals/ModalClass';

function MediumCardArtist(props) {
  const [ArtistModalOn, SetArtistModal] = useState(false);

  const onOpenModal = () => {SetArtistModal(true);}
    const onCloseModal = () => {
        SetArtistModal(false);
    }

    

  return (
    <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-64 " + (ArtistModalOn ? ' transition-none' : ' hover:scale-105 transition-all')} onClick={onOpenModal}>
          <img className='object-cover rounded-3xl aspect-square' src={props.Src} alt="" />
          <div className='pb-2'>
              <div className='flex overflow-x-auto '>
                  <div className='pt-1 text-2xl font-bold text-gray-400'>#{props.ArtistNum}</div>
                  <div className='pl-4 text-xl pt-2 text-white text-left shrink-0 overflow-x-scroll'>{props.ArtistName}</div>
              </div>
          </div>
          {ArtistModalOn && <ArtistModal onCloseModal={onCloseModal} ArtistInfO={props.ArtistInfo} />}
      </div>  
  );
}

export default MediumCardArtist;



{/* <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-52 h-72 " + (ArtistModalOn ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={() => {SetArtistModal(true)}}>
<img className='object-cover rounded-3xl' src={props.Src} alt="" />
<div className='pb-2 flex place-items-center'>
        <div className='pl-4 pr-2 pt-2 text-2xl font-bold text-gray-400'>#{props.ArtistNum}</div>
        <div className='px-3 text-xl pt-2 text-white'>{props.ArtistName}</div>
</div>
{ArtistModalOn && <ArtistModal CloseModal={SetArtistModal} />}
</div> */}