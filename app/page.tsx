import Spline from "@splinetool/react-spline/next";
import Navbar from "./components/navbar";
import SponsorCarousel from "./components/sponsorCarousel";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className="bg-[#050505] text-white md:hidden">
        <Navbar />
        {/* Hero */}
        <div>
          <Spline
            scene="https://prod.spline.design/5j0HM0tVtyZUlBjh/scene.splinecode"
            style={{ width: "100vw", height: "40vh" }}
          />
          <div className="mx-auto w-11/12 space-y-6 text-center">
            <p className="text-5xl font-semibold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Training future engineers
              </span>
            </p>
            <p className="px-1 text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ducimus minus ipsa reprehenderit veritatis doloribus molestiae.
            </p>
            <div className="flex flex-col space-y-2">
              <Button
                text="Sponsor"
                link="/sponsor"
                className="flex flex-row justify-center rounded-full bg-white p-3 font-semibold text-black"
              />
              <Button
                text="Join"
                link="/join"
                className="flex flex-row justify-center rounded-full p-3 font-semibold text-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Sponsored By */}
        <SponsorCarousel />

        {/* Feature Showcase 1: Technical design */}
        {/* Feature Showcase 2: Controls & web programming */}
        {/* Feature Showcase 3: Mechanical build */}

        {/* Testimonials from alums */}

        {/* Last call CTA */}

        {/* Footer */}

        <div className="h-screen w-screen bg-[#050505]"></div>
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
