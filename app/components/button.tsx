import Link from 'next/link';

export default function wideButton({ text, link, className }: { text: string, link: string, className: string }) {
  return (
    <>
      <Link
        href={link}
        className={className}
      >
        {text}
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></path>
        </svg>
      </Link>
    </>
  );
}