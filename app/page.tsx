import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import HamburgerMenu from './components/hamburgerMenu'

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className='md:hidden bg-[#050505] text-white'>
        <div className='flex flex-row justify-between p-2'>
          <div className='flex flex-row space-x-4'>
            <Image src="/logo.svg" alt="team logo" width={32} height={32} />
            <p className='text-xl self-center font-semibold'>Absolute Robotics</p>
          </div>
          <HamburgerMenu />
        </div>
        <div className='md:hidden'>
          <p>Training future engineers.</p>
          <p>Empowering students through innovation and teamwork in robotics.</p>
        </div>
      </div>

      {/* Desktop site */}
      <div className='hidden md:inline bg-[#050505] text-white'>
        <Spline scene="https://prod.spline.design/WG9UFhrJ7C7BVk0y/scene.splinecode" className='hidden md:block'/>
      </div>
    </>
  );
}
