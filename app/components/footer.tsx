import FancyDivider from "./fancyDivider";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <FancyDivider curve={false} sharp={true} />
      <div className="mx-auto mb-10 flex flex-row flex-wrap justify-around md:justify-start gap-x-8 md:gap-x-12 text-sm *:space-y-4 *:pr-12 md:-mt-8">
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Pages</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/join">Students</Link>
          </li>
          <li>
            <Link href="/sponsor">Sponsors</Link>
          </li>
          <li>
            <Link href="/parents">Parents</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Contact</li>
          <li>
            <a href="https://www.instagram.com/frc4308/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:the.woodlands.robotics@gmail.com" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
