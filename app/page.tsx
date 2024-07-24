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
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Navbar />
        <div className="lg:flex lg:h-screen lg:flex-row-reverse lg:items-center md:w-11/12 md:mx-auto">
          <Spline
            scene="https://prod.spline.design/5j0HM0tVtyZUlBjh/scene.splinecode"
            style={{ width: "100vw", height: "40vh" }}
            className={"block lg:hidden"}
          />
          <Spline
            scene="https://prod.spline.design/WG9UFhrJ7C7BVk0y/scene.splinecode"
            className={"hidden lg:block"}
          />
          <div className="mx-auto mb-24 w-11/12 space-y-6 text-center md:mt-24 md:text-left">
            <p className="text-[2.5rem] font-semibold leading-tight tracking-tight md:text-6xl">
              <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                Training future engineers
              </span>
            </p>
            <p className="px-1 text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ducimus minus ipsa reprehenderit veritatis doloribus molestiae.
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <Button
                text="Sponsor"
                link="/sponsor"
                className="flex flex-row justify-center rounded-full bg-white p-3 font-semibold text-black md:pl-6 md:pr-3"
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

        <div className="mt-32">
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
              Students learn a variety of transferable skills, from writing code
              for the robot using Java to working hands-on with advanced
              electronics.
            </p>
            <CodeEmbed />
          </div>
        </div>

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
              <div className="flex flex-row items-center justify-between">
                <p className="truncate py-2 pl-4 text-left text-sm text-neutral-300">
                  Jul 15: Scientists fall out of 19th story window
                </p>
                <svg
                  className="mr-1 text-[#70757E]"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-3xl border border-[#d6ebfd30]">
              <p className="truncate py-2 pl-4 text-sm text-neutral-300">
                Jul 13: Scientists discover cure to cancer
              </p>
              <svg
                className="mr-1 text-[#70757E]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <div className="flex flex-row items-center justify-between rounded-3xl border border-[#d6ebfd30]">
              <p className="truncate py-2 pl-4 text-sm text-neutral-300">
                Jul 7: Website developer marries vtuber
              </p>
              <svg
                className="mr-1 text-[#70757E]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 w-11/12 space-y-6 text-center md:mb-24 md:space-y-8">
          <p className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Get involved.
            </span>
          </p>
          <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
            <Button
              text="Sponsor"
              link="/sponsor"
              className="flex flex-row justify-center rounded-full bg-white p-3 font-semibold text-black md:pl-6 md:pr-3"
            />
            <Button
              text="Join"
              link="/join"
              className="flex flex-row justify-center rounded-full p-3 font-semibold text-neutral-400"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
