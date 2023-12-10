import React from 'react'

function Introduction() {
  return (
    <div className='flex flex-row justify-around align-items-center my-10'>
        <div className="flex flex-row absolute left-5 mt-96 -mb-32">
            <div className="w-[22px] h-[170px] origin-top-left rotate-180 bg-green-500"></div>
            <div className="w-[22px] h-[100px] origin-top-left rotate-180 bg-teal-700"></div>
            <div className="w-[22px] h-[65px] origin-top-left rotate-180 bg-lime-400"></div>
        </div>
        <div className='absolute left-0'>
            <div className="w-[217px]  border-2 border-green-500"></div>
        </div>
        <div className="ml-24 text-zinc-800 text-[37px] font-normal font-['Oldenburg'] tracking-tight">Introduction</div>
        <div className="w-[600px] h-[399px] -ml-10 bg-white bg-opacity-75 rounded-[10px] shadow flex flex-column align-items-center justify-items-center">
            <p className="!text-zinc-800 text-opacity-30 text-xl font-normal font-['Oldenburg'] m-4">
            Vizhi is a social initiative aimed at making sustainability a convenient lifestyle and household practice. We represent a proactive response to the climate crisis by harnessing the power of technology and community engagement to create a resource hub for all.
            I had learnt about climate change in school since I was in grade 1. Countless posters, charts and slogans were written to further the cause of the climate action. But until 6th grade, I never really cared for it. It was always a problem so far away or so I believed until I was taken to visit my city’s garbage dumpyard. Oh, my, how many heaping mounds of garbage there were! And the heat and stench!
            </p>
            <div class="px-2.5 bg-neutral-200 bg-opacity-80 rounded-[22px] border !border-zinc-800">
                <p className="text-justify text-green-500 text-base font-normal font-['Oldenburg']">Continue Reading</p>
            </div>
        </div>
        <div className="flex flex-row absolute right-0 -mt-60">
            <div className="w-[26px] h-[79px] bg-lime-400"></div>
            <div className="w-[26px] h-[122px] bg-teal-700"></div>
            <div className="w-[22px] h-[240px] bg-green-500"></div>
        </div>
        <div className='absolute right-0'>
            <div class="w-[130px] h-[0px] border-2 border-green-500"></div>
        </div>
        
    </div>
  )
}

export default Introduction