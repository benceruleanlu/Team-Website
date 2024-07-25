import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sponsors from "../components/sponsorCarousel";

export default function Sponsor() {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-12 mt-20 w-11/12 space-y-2 text-center">
        <p className="text-5xl leading-tight tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text font-semibold text-transparent">
            Sponsor Us
          </span>
        </p>
        <p className="mx-auto max-w-4xl text-balance px-1 text-neutral-400 md:text-[1.125rem] md:leading-[1.5]">
          Support our mission of giving high quality training and hands-on
          engineering work to all.
        </p>
      </div>
      <div className="mx-auto flex h-max w-11/12 flex-wrap justify-center gap-x-8 gap-y-8">
        <div className="mb-6 w-max rounded-3xl border border-[#d6ebfd30] text-center">
          <p className="mb-8 mt-6">Bronze</p>
          <p className="mb-8 text-4xl">$250+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Name & logo on team shirts</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Name & logo on team social media</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Name & logo on team website</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Name & logo on team banner</p>
            </li>
          </ul>
          <Link href="/contact">
            <div className="mx-auto mb-6 mt-8 w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black">
              Contact Us
            </div>
          </Link>
        </div>
        <div className="4mb-6 h-max w-max rounded-3xl border border-[#d6ebfd30] text-center">
          <p className="mb-8 mt-6">Silver</p>
          <p className="mb-8 text-4xl">$1000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Everything from previous tiers</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Name & logo on robot</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Shoutout at competition ceremonies</p>
            </li>
          </ul>
          <Link href="/contact">
            <div className="mx-auto mb-6 mt-8 w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black">
              Contact Us
            </div>
          </Link>
        </div>
        <div className="mb-6 h-max w-max rounded-3xl border border-[#d6ebfd30] text-center">
          <p className="mb-8 mt-6">Gold</p>
          <p className="mb-8 text-4xl">$2000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Everything from previous tiers</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">
                Custom monthly updates on team and community efforts
              </p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Robot demonstration to company</p>
            </li>
          </ul>
          <Link href="/contact">
            <div className="mx-auto mb-6 mt-8 w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black">
              Contact Us
            </div>
          </Link>
        </div>
        <div className="mb-6 h-max w-max rounded-3xl border border-[#d6ebfd30] text-center">
          <p className="mb-8 mt-6">Title Sponsor</p>
          <p className="mb-8 text-4xl">$3000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Everything from previous tiers</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Large name & logo on robot</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="pt-[0.11em]">Anodized robot to company colours</p>
            </li>
          </ul>
          <Link href="/contact">
            <div className="mx-auto mb-6 mt-8 w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      <div className="my-24">
        <Sponsors />
      </div>
      <div>
        <p className="mx-auto mb-8 w-11/12 text-[2.25rem] leading-[130%] tracking-tight">
          Frequenty Asked Questions
        </p>
        <div className="mx-auto mb-4 w-11/12 space-y-2 rounded-lg border border-[#d6ebfd30] p-4">
          <p className="text-neutral-100">
            Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </p>
          <p className="pl-6 text-neutral-400">
            A: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-24 w-11/12 space-y-6 text-center">
        <p className="text-4xl font-semibold leading-[120%] tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Need something else?
          </span>
        </p>
        <p className="px-1 text-neutral-400">
          Our team is happy to work with you to create a custom sponsorship
          package that fits your needs.
        </p>
        <a
          className="mx-auto flex h-10 w-max flex-row items-center justify-center rounded-full bg-white pl-5 pr-2 font-semibold text-black"
          href="mailto:the.woodlands.robotics@gmail.com"
          target="_blank"
        >
          Email Us
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
        </a>
      </div>
      <div className="mx-auto max-w-7xl bg-[#050505] text-white">
        <Footer />
      </div>
    </>
  );
}
