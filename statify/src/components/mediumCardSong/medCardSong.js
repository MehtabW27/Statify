import React from 'react';

function MediumCardSong() {
  return (
      <div className=' flex flex-col  m-2 overflow-hidden hover:scale-105 transition-all duration-500 w-52'>
          <img className='object-cover rounded-3xl' src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586&ssl=1" alt="" />
          <div className='pb-2'>
              <div className='flex'>
                  <div className='px-2 pt-2 text-2xl font-bold text-gray-400'>#1</div>
                  <div className='pl-3 text-xl pt-2 text-white'>Mercury</div>
              </div>
              <div className='text-left pl-5 text-gray-500'>Steve Lacy</div> 
          </div>
      </div>
  );
}

export default MediumCardSong;