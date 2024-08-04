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
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Footer />
      </div>
    </>
  );
}
