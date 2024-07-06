import Image from 'next/image'

export default function Spoonsors() {
  return (
    <div className='w-11/12 mx-auto'>
      <p className='text-center text-neutral-400 mb-6'>Generously sponsored by</p>
      <div className='flex flex-row flex-wrap justify-around gap-x-8 gap-y-4'>
        <Image
          src="/westonForest.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className='object-contain'
        />
        <Image
          src="/zebra.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className='object-contain'
        />
        <Image
          src="/woods.png"
          width={70}
          height={70}
          alt="logo of lorem"
          className='object-contain'
        />
        <Image
          src="/bramwood.png"
          width={50}
          height={50}
          alt="logo of lorem"
          className='object-contain'
        />
        <Image
          src="/sable.png"
          width={100}
          height={100}
          alt="logo of lorem"
          className='object-contain'
        />
      </div>
    </div>
  );
};
