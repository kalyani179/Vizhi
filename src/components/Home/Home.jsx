import React from 'react'
import OurKeyFeature from './OurKeyFeature'

function Home() {
  return (
    <div className='bg-gradient-to-b from-slate-300 to-slate-300'>
      <div>
        <img className='opacity-50' src="../../../images/home.png" alt="" />
        <div class="absolute w-[600px] top-80 left-96 text-center text-zinc-800 text-3xl font-medium font-['Oldenburg']">"Vizhi: Uniting Communities for a Greener, Cleaner Future."</div>
      </div>
      <OurKeyFeature />
    </div>
  )
}

export default Home