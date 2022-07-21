import React from 'react';
import MediumCardSong from '../mediumCardSong/medCardSong';
import MediumCardArtist from '../mediumCardArtists/mediumCardArtists';
import MediumCardAlbum from '../mediumCardAlbums/mediumCardAlbums';
import TabBar from '../AnimatedTabBar/TabBar';
import SongModal from '../modals/SongModal';

function FavouritesPage() {
  return (
    <div className="w-full p-6 bg-neutral-900 ">
      <div className=''>
        <TabBar btn1={"Songs"} btn2={"Artists"} btn3={"Albums"}/>
      </div>
      <div className="flex flex-wrap justify-center scroll-smooth overflow-y-scroll h-screen">
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
        <MediumCardSong />
      </div>
      <TabBar btn1={"4 Weeks"} btn2={"6 Months"} btn3={"Lifetime"} />
    </div>
  );
}

export default FavouritesPage;