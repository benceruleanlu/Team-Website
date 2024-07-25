import Image from "next/image";

export default function Spoonsors() {
  return (
    <div className="mx-auto w-11/12">
      <p className="mb-6 text-center text-neutral-400 md:-mt-6 md:mb-12">
        Generously sponsored by
      </p>
      <div className="flex flex-row flex-wrap place-content-around gap-x-10 gap-y-4">
        <Image
          src="/westonForest.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className="object-contain"
        />
        <Image
          src="/zebra.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className="object-contain"
        />
        <Image
          src="/csa.png"
          width={80}
          height={80}
          alt="logo of lorem"
          className="object-contain"
        />
        <Image
          src="/boeing.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className="object-contain"
        />
        <Image
          src="/sable.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className="object-contain"
        />
      </div>
    </div>
  );
}
