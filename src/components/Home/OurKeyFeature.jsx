import React from 'react';
import OurKeyFeaturesEntries from './OurKeyFeaturesEntries';

function FeatureEntry(props){
  return(
    <div className='w-[425px] h-[450px] pt-1 p-3 flex bg-white bg-opacity-75 rounded-[10px] shadow-xl flex-column justify-center align-items-center'>
      <div className='flex flex-column justify-items-center align-items-center'>
        <img src={props.logo} alt="" />
        <h1 className="text-xl font-bold font-['Oldenburg'] tracking-tight">{props.heading}</h1>
      </div>
      <p className="m-3 text-xl font-normal font-['Oldenburg']">{props.text}</p>
      <button className='px-3 mt-2 bg-white bg-opacity-80 rounded shadow-xl border !border-zinc-400'>{props.button}</button>
    </div>
  )
}

function CreateFeature(feature){
  return(
    <div>
      <FeatureEntry 
          key={feature.key}
          heading={feature.heading}
          logo = {feature.logo}
          text = {feature.text}
          button = {feature.button}
      />
    </div>
  )
}

function OurKeyFeature() {
  return (
    <div className='flex flex-column justify-center items-center space-y-14 pb-10'>
      <h1 className="text-zinc-800 text-3xl font-normal font-['Oldenburg']">Our Key Features</h1>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-10'>{OurKeyFeaturesEntries.map(CreateFeature)}</div>
    </div>
  )
}

export default OurKeyFeature