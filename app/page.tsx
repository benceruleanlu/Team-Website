import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import HamburgerMenu from "./components/hamburgerMenu";

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className="bg-[#050505] text-white md:hidden">
        {/* Navbar */}
        <div className="flex flex-row justify-between p-4 sticky top-0 bg-gradient-to-b from-[#050505]">
          <div className="flex flex-row space-x-4">
            <Image src="/logo.svg" alt="team logo" width={32} height={32} />
            <p className="self-center text-xl font-semibold">
              Absolute Robotics
            </p>
          </div>
          <HamburgerMenu />
        </div>

        {/* Hero */}
        <div>
          <Spline
            scene="https://prod.spline.design/5j0HM0tVtyZUlBjh/scene.splinecode"
            className="mt-2 mb-6"
          />
          <div className="text-center my-6 space-y-4 w-11/12 mx-auto">
            <p className="text-5xl font-semibold tracking-tight"><span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Training future engineers</span></p>
            <p className="text-xl text-slate-11">Pushing the boundaries of robotics and engineering excellence</p>
            {/* Sponsor button */}
            {/* Join button */}
          </div>
        </div>

        {/* Sponsored By */}

        {/* Feature Showcase 1: Technical design */}
        {/* Feature Showcase 2: Controls & web programming */}
        {/* Feature Showcase 3: Mechanical build */}
        
        {/* Testimonials from alums */}

        {/* Last call CTA */}

        {/* Footer */}
      </div>

      {/* Desktop site */}
      <div className="hidden bg-[#050505] text-white md:inline">
        {/* Hero */}
        <Spline
          scene="https://prod.spline.design/WG9UFhrJ7C7BVk0y/scene.splinecode"
          className="hidden md:block"
        />

        {/* Sponsored By */}

        {/* Feature Showcase 1: Technical design */}
        {/* Feature Showcase 2: Controls & web programming */}
        {/* Feature Showcase 3: Mechanical build */}
        
        {/* Testimonials from alums */}

        {/* Last call CTA */}

        {/* Footer */}
      </div>
    </>
  );
}

