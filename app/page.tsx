import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import HamburgerMenu from "./components/hamburgerMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className="bg-[#050505] text-white md:hidden">
        {/* Navbar */}
        <div className="flex flex-row justify-between p-4 w-screen fixed top-0 bg-gradient-to-b from-[#050505]">
          <div className="flex flex-row space-x-4">
            <Image src="/logo.svg" alt="team logo" width={32} height={32} />
            <p className="self-center text-xl">
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
          <div className="text-center my-6 space-y-8 w-11/12 mx-auto">
            <p className="text-5xl leading-tight font-semibold tracking-tight"><span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Training future engineers</span></p>
            <p className="text-neutral-400 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus minus ipsa reprehenderit veritatis doloribus molestiae.</p>
            <div className="flex flex-col space-y-2">
              <Link href="/sponsor" className="bg-white text-black rounded-full p-3 font-semibold flex flex-row justify-center">
                Sponsor
                <svg className="text-[#70757E]" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
              </Link>
              <Link href="/join" className="text-neutral-400 rounded-full p-3 font-semibold flex flex-row justify-center">
                Join
                <svg className="text-[#70757E]" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-screen bg-[#050505]">

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

