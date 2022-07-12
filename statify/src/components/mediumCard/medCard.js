import React from 'react';

function MediumCard() {
  return (
      <div className='bg-green-50 flex flex-col rounded-lg shadow-md m-2 overflow-hidden hover:scale-105 transition-all duration-500 w-52'>
          <img className='object-cover rounded-3xl' src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586&ssl=1" alt="" />
          <div className='p-4'>
              <div className='flex'>
                  <div className='p-2 text-2xl font-bold'>#1</div>
                  <div className='pl-4 text-xl pt-2'>Mercury</div>
              </div>
              <div className='text-left'>Steve Lacy</div> 
          </div>
      </div>
  );
}

export default MediumCard;

// eslint-disable-next-line no-lone-blocks
{/* <section className="h-full flex items-center text-gray-600">


<div className="flex flex-wrap -m-4">
    
    <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img src="https://i.scdn.co/image/ab6761610000e5eb2dd5a47714902a1db1810456" alt="" 
            className="lg:h-40 md:h-24 w-full object-cover object-center"/>
            <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                <h2 className="text-base font-medium text-indigo-300 mb-1">
                    Date?
                </h2>
                <h1 className="text-2xl font-semibold mb-3">Some</h1>
                <p className="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                <div className="flex items-center flex-wrap">
                    <a href="" className="text-indingo-300 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>
    
</div>

</section> */}