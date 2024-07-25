import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SponsorCarousel from "./components/sponsorCarousel";
import Button from "./components/button";
import FancyDivider from "./components/fancyDivider";
import CodeEmbed from "./components/codeEmbed";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Navbar />
        <div className="md:mx-auto md:w-11/12 lg:flex lg:h-screen lg:flex-row-reverse lg:items-center">
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

        <div className="mx-auto my-24 mb-0 w-11/12">
          <h2 className="font-book font-styling font-display text-slate-12 relative z-20 mb-4 text-[2.25rem] leading-[130%] tracking-tight">
            Read More
          </h2>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
            <li>
              <Link href="/blog">
                <div className="space-y-2">
                  <Image
                    src="/robot.png"
                    alt="Resend raises $3M"
                    width={999}
                    height={999}
                    className="col-span-2 max-h-64 w-full rounded border border-[#d6ebfd30] object-cover text-transparent lg:rounded-md"
                  />
                  <div className="col-span-2">
                    <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                      Balcita Wins Woodie Flowers
                    </h2>
                    <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                      <div className="flex gap-1">
                        <p className="text-sm font-normal text-[#f1f7feb5]">
                          <time dateTime="2023-07-18">Jul 18, 2023</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="space-y-2">
                  <Image
                    src="/robot.png"
                    alt="Resend raises $3M"
                    width={999}
                    height={999}
                    className="col-span-2 max-h-64 w-full rounded border border-[#d6ebfd30] object-cover text-transparent lg:rounded-md"
                  />
                  <div className="col-span-2">
                    <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                      4308 Wins Worlds
                    </h2>
                    <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                      <div className="flex gap-1">
                        <p className="text-sm font-normal text-[#f1f7feb5]">
                          <time dateTime="2023-07-18">Jul 18, 2023</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="space-y-2">
                  <Image
                    src="/robot.png"
                    alt="Resend raises $3M"
                    width={999}
                    height={999}
                    className="col-span-2 max-h-64 w-full rounded border border-[#d6ebfd30] object-cover text-transparent lg:rounded-md"
                  />
                  <div className="col-span-2">
                    <h2 className="font-book font-styling font-display text-slate-12 mt-4 line-clamp-5 text-balance text-[28px] text-xl leading-[130%] leading-tight">
                      4308 Wins Provs
                    </h2>
                    <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                      <div className="flex gap-1">
                        <p className="text-sm font-normal text-[#f1f7feb5]">
                          <time dateTime="2023-07-18">Jul 18, 2023</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
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
