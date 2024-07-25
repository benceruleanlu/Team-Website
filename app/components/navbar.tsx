import Image from "next/image";
import HamburgerMenu from "./hamburgerMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-[58px] w-full max-w-7xl flex-row justify-between bg-gradient-to-b from-[#050505] px-6 xl:px-0">
      <Link href="/">
        <div className="flex h-full flex-row items-center space-x-4">
          <Image src="/logo.svg" alt="team logo" width={30} height={30} />
          <p className="self-center text-lg font-semibold">Absolute Robotics</p>
        </div>
      </Link>
      <ul className="hidden flex-row items-center space-x-10 text-sm text-[#f1f7feb5] md:flex">
        <li>
          <Link href="/join">Students</Link>
        </li>
        <li>
          <Link href="/parents">Parents</Link>
        </li>
        <li>
          <Link href="/sponsor">Sponsors</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <div className="hidden items-center md:flex md:flex-row md:space-x-8 text-sm">
        <Link
          className="justify-center rounded-full font-semibold text-neutral-400"
          href="/join"
        >
          Join
        </Link>
        <Link
          className="flex flex-row justify-center rounded-full bg-white h-10 items-center pl-5 pr-2 font-semibold text-black"
          href="/sponsor"
        >
          Sponsor
          <svg
            className="text-[#70757E]"
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
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
