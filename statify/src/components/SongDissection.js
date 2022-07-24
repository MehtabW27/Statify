import React from "react";

function SongDissection(props) {

    return (
        <div className="flex flex-col border-b-2 rounded-md border-neutral-800 ">

            <div className="text-neutral-200 text-2xl p-6 text-left font-bold shadow-md border-b-2 border-neutral-800 ">
                Song Dissection
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Valence</span>
                    <span class=" text-xl text-white">{props.ValenceNum}</span>
                </div>
            
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.ValenceNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Instrumental</span>
                    <span class=" text-xl text-white">{props.IstrumentalNum}</span>
                </div>
            
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.IstrumentalNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Speechful</span>
                    <span class=" text-xl text-white">{props.SpeechfulNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.SpeechfulNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Energetic</span>
                    <span class=" text-xl text-white">{props.EnergeticNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.EnergeticNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Danceable</span>
                    <span class=" text-xl text-white">{props.DanceableNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.DanceableNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Popularity</span>
                    <span class=" text-xl text-white">{props.PopularityNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.PopularityNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5'>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Acoustic</span>
                    <span class=" text-xl text-white">{props.AcousticNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.AcousticNum}}>

                    </div>
                </div>
            </div>

            <div className='px-7 pt-5 pb-7 '>
                <div class="flex justify-between mb-2">
                    <span class="text-2xl text-white">Lively</span>
                    <span class=" text-xl text-white">{props.LivelyNum}</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div class="bg-green-600 h-3 rounded-full" style={{width: props.LivelyNum}}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongDissection;