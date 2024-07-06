import Spline from '@splinetool/react-spline/next';

export default function Feature({ spline, title, description }: { spline: string, title: string, description: string }) {
  return (
    <div className="mt-24">
      <Spline
        scene={spline}
      />
      <div className="mx-auto w-11/12 space-y-6 text-center">
        <p className="text-5xl font-semibold leading-tight tracking-tight">
          <span>
            {title}
          </span>
        </p>
        <p className="px-1 text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
}
