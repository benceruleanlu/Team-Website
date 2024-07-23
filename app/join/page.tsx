import Navbar from "../components/navbar";

export default function Sponsor() {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-20 w-11/12 text-center">
        <p className="text-6xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Join Us
          </span>
        </p>
        <p className="px-1 text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ducimus minus ipsa reprehenderit veritatis doloribus molestiae.
        </p>
      </div>
    </>
  );
}
