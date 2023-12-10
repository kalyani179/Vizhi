import React from 'react'
import OurKeyFeature from './OurKeyFeature'
import Introduction from './Introduction';
import Footer from '../Footer';

function Home() {
  return (
    <div>
      <div className='bg-gradient-to-b from-slate-300 to-slate-300'>
        <div>
          <img className='opacity-50' src="../../../images/home.png" alt="" />
          <div class="absolute w-[600px] top-80 left-96 text-center text-zinc-800 text-3xl font-medium font-['Oldenburg']">"Vizhi: Uniting Communities for a Greener, Cleaner Future."</div>
        </div>
        <Introduction />
        <div className='flex justify-center align-items-center mb-20'>
          <div class="w-[1250px] border !border-zinc-400"></div>
        </div>
        <OurKeyFeature />
      </div>
      <div className='absolute w-full'>
        <Footer/>
      </div>
      
    </div>

  )
}

export default Home