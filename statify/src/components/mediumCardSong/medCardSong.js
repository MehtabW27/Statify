import React, { useEffect } from 'react';
import { useState } from 'react';
import SongModal from '../modals/SongModal';
import Modal from 'react-responsive-modal';
import ModalClass from '../modals/ModalClass';
import Child1 from './child';


function MediumCardSong(props) {
  // const [test, setTest] = useState({flag: true});
  // const update = () => {
  //   setTest({flag: !test.flag});
  // }

    const [modal, setModal] = useState({show: false});
    const [lbl, setLbl] = useState(2);
    const lblClick = ()=> { setLbl(lbl + 1);};


    // useEffect(() => {
    //     setModal({show: false});
    // }, [])
  
    const onOpenModal = () => {
      if(!modal.show) {
        setModal({show: true});
      } 
    };
    
    const onCloseModal = () => {
      console.log('ON close Called');
        setModal({show: !modal.show});
        // update();
    };
    let open = false;

    console.log("Med Card: state of song modal:", JSON.stringify(modal));
    

  return (
    <div>
       <Child1 testClick = {lblClick}></Child1>
       <button className="button-default" onClick={onCloseModal} >  {lbl} Show Modal - {JSON.stringify(modal)}</button>
      <div className={" flex flex-col  m-2 overflow-hidden duration-300 w-64 " + (modal.show ? 'transition-none' : 'hover:scale-105 transition-all')} onClick={onOpenModal}>
          <img className='object-cover rounded-3xl' src={props.Src} alt="" />
          <div className='pb-2'>
              <div className='flex overflow-x-auto '>
                  <div className='pt-1 text-2xl font-bold text-gray-400'>#{props.SongNum}</div>
                  <div className='pl-4 text-xl pt-2 text-white text-left shrink-0 overflow-x-scroll'>{props.SongName}</div>
              </div>
              <div className='text-left pl-5 text-gray-500 overflow-x-scroll shrink-0'>{props.ArtistName}</div> 
          </div>
          
          <SongModal onCloseModal={onCloseModal} SongInfO={props.SongInfo} IsOpen={modal} /> 
      </div>
    </div>
  );
}

export default MediumCardSong; 
// hover:scale-105