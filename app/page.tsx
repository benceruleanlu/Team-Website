import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import HamburgerMenu from "./components/hamburgerMenu";

export default function Home() {
  return (
    <>
      {/* Mobile site */}
      <div className="bg-[#050505] text-white md:hidden">
        {/* Navbar */}
        <div className="flex flex-row justify-between bg-[#050505] p-4">
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
            <p className="text-5xl font-semibold tracking-tight">Training future engineers</p>
            <p className="text-xl text-neutral-500">Pushing the boundaries of robotics and engineering excellence, one robot at a time</p>
          </div>
          <br />
          <br />
          <br />
          <div className="">
            Sponsor
          </div>
          <div>
            Join Team
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            corrupti ea hic vero praesentium nulla fugit iure neque eveniet
            labore aliquid doloremque, eligendi mollitia ullam beatae non
            asperiores a illo commodi ipsum nihil maiores nemo pariatur. Quia
            vel ipsam pariatur voluptatum, autem modi, quaerat rem tempore rerum
            voluptas, iure mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            corrupti ea hic vero praesentium nulla fugit iure neque eveniet
            labore aliquid doloremque, eligendi mollitia ullam beatae non
            asperiores a illo commodi ipsum nihil maiores nemo pariatur. Quia
            vel ipsam pariatur voluptatum, autem modi, quaerat rem tempore rerum
            voluptas, iure mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            corrupti ea hic vero praesentium nulla fugit iure neque eveniet
            labore aliquid doloremque, eligendi mollitia ullam beatae non
            asperiores a illo commodi ipsum nihil maiores nemo pariatur. Quia
            vel ipsam pariatur voluptatum, autem modi, quaerat rem tempore rerum
            voluptas, iure mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            corrupti ea hic vero praesentium nulla fugit iure neque eveniet
            labore aliquid doloremque, eligendi mollitia ullam beatae non
            asperiores a illo commodi ipsum nihil maiores nemo pariatur. Quia
            vel ipsam pariatur voluptatum, autem modi, quaerat rem tempore rerum
            voluptas, iure mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            corrupti ea hic vero praesentium nulla fugit iure neque eveniet
            labore aliquid doloremque, eligendi mollitia ullam beatae non
            asperiores a illo commodi ipsum nihil maiores nemo pariatur. Quia
            vel ipsam pariatur voluptatum, autem modi, quaerat rem tempore rerum
            voluptas, iure mollitia.
          </p>
        </div>
      </div>

      {/* Desktop site */}
      <div className="hidden bg-[#050505] text-white md:inline">
        <Spline
          scene="https://prod.spline.design/WG9UFhrJ7C7BVk0y/scene.splinecode"
          className="hidden md:block"
        />
      </div>
    </>
  );
}
