import React from 'react'

function SongModal(props) {


  // setTimeout(() => {props.CloseModal()}, 1000)

  



  return (
    <div className="bg-neutral-900 bg-opacity-60 fixed inset-0 z-50 backdrop-blur-sm">
        <div className="flex h-screen justify-center items-center">
            <div className="bg-neutral-900 border-4 border-pearmint rounded-xl text-xl text-white flex flex-col w-4/5 h-4/5 overflow-y-scroll" >
            

              <div className='flex shrink-0 overflow-hidden bg-[url("https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/07/steve-lacy-bad-habit.jpg?fit=586%2C586ssl=1")] h-80 w-full bg-auto place-items-start ' >
                <i class="fa-solid fa-chevron-left p-6 text-3xl" onClick={() => {
                  props.CloseModal();
                }}></i>
                </div>
              <div className="text-neutral-200 text-5xl text-left pr-3 py-3 pl-6 font-bold shadow-md border-b-2 rounded-md border-neutral-800 ">Song name</div>


              {/* tags regarding info about song */}
              <div className="flex flex-wrap ">
                
                <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl md:mr-4">
                  <div className="text-green-500 font-bold text-left ">
                    7.7
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold pt-2">
                    0-10 popularity
                  </div>
                </div>

                <div className="text-3xl p-4 m-4  bg-neutral-800 rounded-xl md:mx-4">
                  <div className="text-green-500 font-bold text-left ">
                    2:53
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    track length
                  </div>
                </div>

                <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl">
                  <div className="text-green-500 font-bold text-left">
                    #29
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    of your most streamed tracks during your lifetime
                  </div>
                </div>

                <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl">
                  <div className="text-green-500 font-bold text-left">
                    #2
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    of your most streamed tracks during the past six months
                  </div>
                </div>

                <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl">
                  <div className="text-green-500 font-bold text-left">
                    1
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    times <span className='text-green-500'>song name</span> has appeared in your last 50 streams
                  </div>
                </div>

                <div className="text-3xl p-4 m-4 bg-neutral-800 rounded-xl">
                  <div className="text-green-500 font-bold text-left">
                    #13
                  </div>
                  <div className="text-neutral-100 text-2xl font-bold  pt-2">
                    of your most streamed tracks during the past 4 weeks
                  </div>
                </div>
                

              </div>
              {/* end of info tags */}


              {/* bar graph section */}
              <div className="flex flex-col border-b-2 rounded-md border-neutral-800">

                <div className="text-neutral-200 text-2xl p-6 text-left font-bold shadow-md border-b-2 border-neutral-800 ">
                  Song Dissection
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Valence</span>
                    <span class=" text-xl text-white">45%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '45%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Instrumental</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Speechful</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Energetic</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Danceable</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Popularity</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5'>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Acoustic</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>

                <div className='px-7 pt-5 pb-7 '>
                  <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Lively</span>
                    <span class=" text-xl text-white">21%</span>
                  </div>
                
                  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: '21%'}}>

                    </div>
                  </div>
                </div>


              </div>
              {/* end of bar graph section */}

              {/* album section */}
              <div className="flex flex-wrap ">

                <div className="flex flex-col">
                  <div className="text-neutral-200 text-2xl px-6 pt-6 text-left font-bold shadow-md border-b-2 border-neutral-800 ">
                    Album
                  </div>
                  
                </div>


              </div>

            </div>
        </div>
    </div>
  )
};

export default SongModal;


// w-52 h-30 shrink-0