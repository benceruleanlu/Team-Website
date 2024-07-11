import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SponsorCarousel from "./components/sponsorCarousel";
import Button from "./components/button";
import FancyDivider from "./components/fancyDivider";
import CodeEmbed from "./components/codeEmbed";

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className="bg-[#050505] text-white md:hidden">
        <Navbar />
        <div>
          <Spline
            scene="https://prod.spline.design/5j0HM0tVtyZUlBjh/scene.splinecode"
            style={{ width: "100vw", height: "40vh" }}
          />
          <div className="mx-auto mb-24 w-11/12 space-y-6 text-center">
            <p className="text-5xl font-semibold leading-tight tracking-tight">
              <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
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
        <FancyDivider curve={true} sharp={false} />
        <SponsorCarousel />

        {/* Feature Showcase 1: Technical design */}
        <div className="mt-28">
          <div className="mx-auto w-11/12 space-y-6 text-center">
            <p className="text-5xl leading-tight tracking-tight">
              Lorem
              <span> </span>
              <span className="bg-gradient-to-br from-[#E131F3] via-[#59B2EA] to-[#A7FC8F] bg-clip-text font-semibold text-transparent">
                ipsum
              </span>
            </p>
            <p className="px-1 text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur deserunt id reprehenderit corrupti minus
              necessitatibus.
            </p>
            <Image
              src="/robot.png"
              alt="lorem ipsum"
              height={300}
              width={300}
              className="object-fit w-screen"
            />
          </div>
        </div>
        {/* Feature Showcase 2: Controls & web programming */}
        <div className="mt-28">
          <div className="mx-auto w-11/12 space-y-6 text-center">
            <p className="text-5xl leading-tight tracking-tight">
              Lorem
              <span> </span>
              <span className="bg-gradient-to-br from-[#E131F3] via-[#59B2EA] to-[#A7FC8F] bg-clip-text font-semibold text-transparent">
                ipsum
              </span>
            </p>
            <p className="px-1 text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur deserunt id reprehenderit corrupti minus
              necessitatibus.
            </p>
            <CodeEmbed />
          </div>
        </div>
        {/* Feature Showcase 3: Mechanical build */}

        {/* Testimonials from alums */}

        {/* Recent team updates as blog posts */}
        <div className="mx-auto mt-24 w-11/12 space-y-6 text-center">
          <p className="text-5xl font-semibold leading-tight tracking-tight">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              News
            </span>
          </p>
          <div className="flex flex-col space-y-3">
            <div className="relative rounded-3xl border border-[#d6ebfd30]">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 z-10 h-px w-[300px] !p-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.67) 64.41%, rgba(236, 72, 153, 0) 98.93%)",
                }}
              ></div>
              <Image
                src="/robot.png"
                alt="lorem ipsum"
                height={300}
                width={300}
                className="w-full rounded-t-3xl"
              />
              <p className="px-4 py-2 text-neutral-300">
                Website developers found dead
              </p>
            </div>
            <div className="rounded-3xl border border-[#d6ebfd30]">
              <p className="truncate px-4 py-2 text-neutral-300">
                Website developers reported missing
              </p>
            </div>
            <div className="rounded-3xl border border-[#d6ebfd30]">
              <p className="truncate px-4 py-2 text-neutral-300">
                Website developers accused of laziness
              </p>
            </div>
          </div>
        </div>

        {/* Last call CTA */}
        <div className="mx-auto mt-24 w-11/12 space-y-6 text-center">
          <p className="text-5xl font-semibold leading-tight tracking-tight">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Get involved
            </span>
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

        {/* Footer */}
        <Footer />
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
