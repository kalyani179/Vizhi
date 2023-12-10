import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <div className='bg-navbar py-3 w-full flex flex-column items-center'>
        <div className='flex flex-row space-x-24 align-items-center'>
            <img src="../../images/navbar.png" alt="" className="h-28"/>
            <div className="h-16 w-0.5 bg-slate-800 bg-opacity-80 rounded-bl-2xl rounded-br-2xl"></div>
            <div className='flex flex-row space-x-12'>
                <p className="text-white text-xl font-normal font-['Oldenburg'] tracking-tight">Follow us on</p>
                <SocialMedia />
            </div>
            <div className="h-16 w-0.5 bg-slate-800 bg-opacity-80 rounded-bl-2xl rounded-br-2xl"></div>
            <div className='space-y-5 flex flex-column justify-center align-items-center'>
                <p className="text-neutral-300 text-xl font-normal font-['Oldenburg']">Receive the latest News by</p>
                <div className='flex flex-row space-x-5'>
                    <button className="bg-white bg-opacity-60 p-0.5 px-4 rounded shadow-xl border border-zinc-800 text-black text-opacity-60 text-base font-normal font-['Oldenburg']">Text</button>
                    <button className="bg-white bg-opacity-60 p-0.5 px-4 rounded shadow-xl border border-zinc-800 text-black text-opacity-60 text-base font-normal font-['Oldenburg']">Email</button>
                </div>
            </div>
        </div>
        <div>
            <p className="text-xs text-white-50 font-light font-['Roboto']">© 2021 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;