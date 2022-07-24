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

        <MediumCardSong Src={"https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1"} SongName={"Mercury"} ArtistName={"Steve Lacy"} SongNum={"3"} />

        <MediumCardArtist Src={"https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1"} ArtistNum={"4"} ArtistName={"Steve Lacy"}/>

        <MediumCardAlbum Src={"https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1"} AlbumName={"Gemini Rights"} ArtistName={"Steve Lacy"} AlbumNum={"66"} />
        
      </div>
      <TabBar btn1={"4 Weeks"} btn2={"6 Months"} btn3={"Lifetime"} />
    </div>
  );
}

export default FavouritesPage;