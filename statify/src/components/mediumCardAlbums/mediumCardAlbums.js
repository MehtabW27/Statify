import React from 'react';

function MediumCardAlbum() {
  return (
      <div className=' flex flex-col  m-2 overflow-hidden hover:scale-105 transition-all duration-500 w-52'>
          <img className='object-cover rounded-3xl' src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1" alt="" />
          <div className='pb-2 flex place-items-center'>
                  <div className='pl-4 pr-2 pt-2 text-2xl font-bold text-gray-400'>#1</div>
                  <div className='px-3 text-xl pt-2 text-white'>Gemini Rights</div>
          </div>
      </div>
  );
}

export default MediumCardAlbum;