import React from 'react'

function Introduction() {
  return (
    <div className='flex flex-column justify-around align-items-center my-10'>
        <div className="text-zinc-800 text-[37px] font-normal font-['Oldenburg'] tracking-tight">Introduction</div>
        <div className='mx-5'>
            <p className="!text-zinc-800 text-opacity-30 text-xl font-normal font-['Oldenburg'] m-4">
            Vizhi is a social initiative aimed at making sustainability a convenient lifestyle and household practice. We represent a proactive response to the climate crisis by harnessing the power of technology and community engagement to create a resource hub for all.
            I had learnt about climate change in school since I was in grade 1. Countless posters, charts and slogans were written to further the cause of the climate action. But until 6th grade, I never really cared for it. It was always a problem so far away or so I believed until I was taken to visit my city’s garbage dumpyard. Oh, my, how many heaping mounds of garbage there were! And the heat and stench!
            </p>
        </div>
    </div>
  )
}

export default Introduction