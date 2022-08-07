import React, { useEffect } from 'react';
import { useState } from 'react';
import SongModal from '../modals/SongModal';
import Modal from 'react-responsive-modal';
import ModalClass from '../modals/ModalClass';

function MediumCardSong(props) {

    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     setIsOpen(false);
    // }, [isOpen])

    const onOpenModal = () => setIsOpen(true);
    const onCloseModal = () => {
        setIsOpen(false);
    }
    console.log("image source:", props.Src)

    

  return (
      <div>
        <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-64 " + (isOpen ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={onOpenModal}>
            <img className='object-cover rounded-3xl' src={props.Src} alt="" />
            <div className='pb-2'>
                <div className='flex overflow-x-auto '>
                    <div className='pt-1 text-2xl font-bold text-gray-400'>#{props.SongNum}</div>
                    <div className='pl-4 text-xl pt-2 text-white text-left shrink-0 overflow-x-scroll'>{props.SongName}</div>
                </div>
                <div className='text-left pl-5 text-gray-500 overflow-x-scroll shrink-0'>{props.ArtistName}</div> 
            </div>
        </div>
        {isOpen && < SongModal onCloseModal={onCloseModal} SongInfO={props.SongInfo} IsOpen={isOpen} /> }
      </div>
      
  );
}

export default MediumCardSong; 
// hover:scale-105