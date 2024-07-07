export default function FancyDivider({
  curve,
  sharp,
}: {
  curve?: boolean;
  sharp?: boolean;
}) {
  return (
    <div
      className={`border-t ${curve ? "rounded-3xl" : ""} h-24mx-auto relative mt-16 flex w-screen max-w-5xl flex-col items-center border-t border-[#d6ebfd30] px-6 py-5 sm:py-24 md:max-w-7xl`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <div
        className={`-top-1 left-1/2 ${sharp ? "h-[100px]" : "h-[200px]"} pointer-events-none absolute w-full max-w-[200px] max-w-full -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]`}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(5, 5, 5) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
        }}
      ></div>
    </div>
  );
}
