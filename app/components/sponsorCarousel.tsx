import Image from 'next/image'

export default function Spoonsors() {
  return (
    <div className='pt-12 w-11/12 mx-auto'>
      <p className='text-center text-neutral-400 mb-6'>Generously sponsored by</p>
      <div className='flex flex-row flex-wrap justify-center'>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo of lorem"
        />
      </div>
    </div>
  );
};
