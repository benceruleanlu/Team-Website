import Image from "next/image";
import HamburgerMenu from "./hamburgerMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-screen flex-row justify-between bg-gradient-to-b from-[#050505] p-4">
      <div className="flex flex-row space-x-4">
        <Image src="/logo.svg" alt="team logo" width={30} height={30} />
        <p className="self-center text-lg">Absolute Robotics</p>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
