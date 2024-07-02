"use client"

import { useState } from 'react';

const MyComponent = () => {
  const [open, setOpen] = useState(false); // Start closed
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <svg viewBox="0 0 100 80" width="24" height="24" fill="#FFFFFF" className='self-center m-1 cursor-pointer' onClick={toggleOpen}>
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
      <div className={`fixed right-0 top-0 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-neutral-900 w-screen h-screen flex flex-col p-12`}>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-2xl font-semibold'>Navigation</p>
          <svg viewBox="0 0 40 40" width="40" height="40" onClick={toggleOpen}><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="#FFFFFF" strokeWidth="4" /></svg>
        </div>
        <hr className='mb-6 mt-1' />
        <ol className='space-y-4'>
          <li className='text-lg'>Students</li>
          <li className='text-lg'>Sponsors</li>
          <li className='text-lg'>Parents</li>
        </ol>
      </div>
    </>
  );
};

export default MyComponent;