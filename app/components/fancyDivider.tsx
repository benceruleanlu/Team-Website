export default function FancyDivider() {
  return (
    <div className="border-t rounded-3xl w-screen h-24mx-auto px-6 py-5 sm:py-24 max-w-5xl md:max-w-7xl relative border-t border-[#d6ebfd30] mt-24 flex flex-col items-center">
      <div
        className="left-1/2 top-0 w-[300px] max-w-[300px] pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <div
        className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(5, 5, 5) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)"
        }}
      ></div>
    </div>
  );
}