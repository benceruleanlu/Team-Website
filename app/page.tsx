import Spline from "@splinetool/react-spline/next";
// import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SponsorCarousel from "./components/sponsorCarousel";
import Button from "./components/button";
import FancyDivider from "./components/fancyDivider";
import CodeEmbed from "./components/codeEmbed";
// import Link from "next/link";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Spline
          scene="https://prod.spline.design/5j0HM0tVtyZUlBjh/scene.splinecode"
          style={{ width: "100vw", height: "40vh", marginBottom: "2em" }}
          className={"block lg:hidden"}
        />
        <div className="md:mx-auto md:w-11/12 lg:flex lg:h-screen lg:flex-row-reverse lg:items-center">
          <Spline
            scene="https://prod.spline.design/WG9UFhrJ7C7BVk0y/scene.splinecode"
            className={"hidden lg:block"}
          />
          <div className="mx-auto mb-24 w-11/12 space-y-6 text-center md:mt-16 md:text-left">
            <p className="text-[3.25rem] font-semibold leading-tight tracking-tight subpixel-antialiased md:text-6xl">
              <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                Training future engineers
              </span>
            </p>
            <p className="sans mx-auto mb-12 max-w-xl text-center text-base font-normal text-[#f1f7feb5] md:mx-0 md:text-left md:text-[1.125rem] md:leading-[1.5]">
              An opportunity for students to explore robotics. Get trained in
              design, precision machining, and programming.
            </p>
            <div className="mx-auto flex max-w-xl flex-col space-y-2 md:mx-0 md:flex-row md:space-x-4 md:space-y-0">
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

        <div className="mt-32 space-y-6 text-center *:mx-auto">
          <p className="w-11/12 text-5xl leading-tight tracking-tight">
            Work in
            <span> </span>
            <span className="bg-gradient-to-br from-[#E131F3] via-[#59B2EA] to-[#A7FC8F] bg-clip-text font-semibold text-transparent">
              Engineering
            </span>
          </p>
          <p className="sans mx-auto mb-12 max-w-3xl text-balance text-base font-normal text-[#f1f7feb5] md:text-[1.125rem] md:leading-[1.5]">
            Students are trained to use industry standard CAD software,
            machinery, and power tools to design and manufacture the robot.
          </p>
          <Carousel />
        </div>

        <div className="mx-auto my-32 w-11/12">
          <p className="mb-2 mb-3 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-center text-[3rem] leading-[120%] tracking-tight text-transparent md:text-left md:text-[3.5rem]">
            First-class
            <br />
            developer experience
          </p>
          <p className="sans mb-12 text-center text-base font-normal text-[#f1f7feb5] md:text-left md:text-[1.125rem] md:leading-[1.5]">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Senior developers with decades of industry experience mentor our
              students.
              <br className="hidden sm:block" />
              We make sure every team member is equipped with the knowledge and
              tools they need to succeed.
            </span>
          </p>
          <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
            <div className="relative flex flex-col gap-4 border border-b-0 border-[#d6ebfd30]">
              <div
                aria-hidden="true"
                className="center pointer-events-none absolute left-1/2 top-0 h-px w-[150px] max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(5, 5, 5, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(5, 5, 5, 0) 100%)",
                }}
              ></div>
              <div
                aria-hidden="true"
                className="-z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                style={{
                  background:
                    "linear-gradient(rgba(5, 5, 5, 0) 0%, rgb(5, 5, 5) 50%, rgb(5, 5, 5) 100%)",
                }}
              ></div>
              <div className="relative z-10 h-[324px] overflow-hidden">
                <div className="align-center relative h-full w-full overflow-hidden">
                  <div className="w-full overflow-hidden md:bottom-0 md:w-auto">
                    <div className="flex flex-col-reverse">
                      <CodeEmbed language="Java" />
                    </div>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-full w-full"
                      style={{
                        background:
                          "linear-gradient(0deg,rgba(5, 5, 5, 0) 0%,rgba(5, 5, 5, 0) 70%,rgba(5, 5, 5, 0) 95%,rgb(5, 5, 5) 100%)",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full w-full"
                  style={{
                    background:
                      "linear-gradient(0deg,rgb(5, 5, 5) 0%,rgba(5, 5, 5, 0) 20%,rgba(5, 5, 5, 0) 90%,rgba(5, 5, 5, 0) 100%)",
                  }}
                ></div>
              </div>
              <div
                className="z-10 flex flex-col gap-4 pl-0 md:pl-3"
                style={{ maxWidth: "34ch" }}
              >
                <h2 className="font-book font-styling font-display text-xl leading-[130%] text-[#fcfdffef]">
                  Java
                </h2>
                <p className="sans text-sm font-normal leading-[1.6] text-[#f1f7feb5]">
                  The controls subteam uses Java to control the robot&apos;s
                  swerve drive and motors.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col gap-4 border border-b-0 border-[#d6ebfd30]">
              <div
                aria-hidden="true"
                className="center pointer-events-none absolute left-1/2 top-0 h-px w-[150px] max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(5, 5, 5, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(5, 5, 5, 0) 100%)",
                }}
              ></div>
              <div
                aria-hidden="true"
                className="-z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                style={{
                  background:
                    "linear-gradient(rgba(5, 5, 5, 0) 0%, rgb(5, 5, 5) 50%, rgb(5, 5, 5) 100%)",
                }}
              ></div>
              <div className="relative z-10 h-[324px] overflow-hidden">
                <div className="align-center relative h-full w-full overflow-hidden">
                  <div className="w-full overflow-hidden md:bottom-0 md:w-auto">
                    <div className="flex flex-col-reverse">
                      <CodeEmbed language="Next.js" />
                    </div>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-full w-full"
                      style={{
                        background:
                          "linear-gradient(0deg,rgba(5, 5, 5, 0) 0%,rgba(5, 5, 5, 0) 70%,rgba(5, 5, 5, 0) 95%,rgb(5, 5, 5) 100%)",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full w-full"
                  style={{
                    background:
                      "linear-gradient(0deg,rgb(5, 5, 5) 0%,rgba(5, 5, 5, 0) 20%,rgba(5, 5, 5, 0) 90%,rgba(5, 5, 5, 0) 100%)",
                  }}
                ></div>
              </div>
              <div
                className="z-10 flex flex-col gap-4 pl-0 md:pl-3"
                style={{ maxWidth: "34ch" }}
              >
                <h2 className="font-book font-styling font-display text-xl leading-[130%] text-[#fcfdffef]">
                  React & Next.js
                </h2>
                <p className="sans text-sm font-normal leading-[1.6] text-[#f1f7feb5]">
                  The competition subteam uses React, React Native, and Next.js
                  to develop the scouting app and website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto my-24 mb-0 w-11/12">
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
        </div> */}

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
