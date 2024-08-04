import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Sponsor() {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-12 mt-36 w-11/12 space-y-2 text-center">
        <p className="text-5xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Join Us
          </span>
        </p>
        <p className="mx-auto max-w-4xl text-balance px-1 text-neutral-400 md:text-[1.125rem] md:leading-[1.5]">
          Register with Absolute Robotics for the Reefscape 24/25 FRC season.
        </p>
      </div>
      <div className="mx-auto w-11/12 max-w-5xl">
        <ol className="relative border-s border-neutral-400/40">
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              September 9
            </time>
            <h3 className="text-lg font-semibold text-white">Club Fair</h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              Absolute Robotics will have a booth at the club fair. Come by to
              meet the team, learn more about what we do, and see our robot
              demo!
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="ms-2 h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              September 11
            </time>
            <h3 className="text-lg font-semibold text-white">
              Initial Info Meeting
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              The team will be running the first introductory meeting of the
              season. Important information will be shared, and any questions
              you have will be answered. It is highly reccomended to attend this
              meeting if you are interested in joining the team this year.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              September 12
            </time>
            <h3 className="text-lg font-semibold text-white">
              All Registration Due
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              By this date, team members should have submitted their (1)
              Absolute Robotics registration Google Form, (2) FIRST
              registration, and (3) payment on School Cash Online. If you need
              any help with this process, please reach out to the team either
              in-person or through{" "}
              <a
                href="mailto:the.woodlands.robotics@gmail.com"
                target="_blank"
                className="text-white/80 underline"
              >
                email
              </a>
              .
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              September 13 - November 8
            </time>
            <h3 className="text-lg font-semibold text-white">
              Subteam Lessons & Bootcamps
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              Team members will be able to attend subteam lessons and bootcamps
              to prepare for the start of the build season. These lessons also
              serve as a way to learn more about the different subteams and what
              they do.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              October 20
            </time>
            <h3 className="text-lg font-semibold text-white">
              STEMley Cup Championship
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              An unofficial post-season competition for the game featured last
              year. New team members are encouraged to attend this competition
              to see what a competition is like and how the games are run.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              October 25
            </time>
            <h3 className="text-lg font-semibold text-white">
              Subteam Applications Open
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              As kickoff approaches, team members have to choose which subteam
              to dedicate their season to. Applications will be released, and
              members will have to apply to their desired subteam. If you have
              any questions about this process, please reach out to the team
              either in-person or through{" "}
              <a
                href="mailto:the.woodlands.robotics@gmail.com"
                target="_blank"
                className="text-white/80 underline"
              >
                email
              </a>
              .
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              November 10
            </time>
            <h3 className="text-lg font-semibold text-white">
              Subteam Decisions Released
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              Congratulations! After receiving your subteam offers, you will be able to finalize your subteam choice for the season.
            </p>
          </li>
        </ol>
      </div>
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Footer />
      </div>
    </>
  );
}
