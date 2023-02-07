import { forwardRef } from 'react';
import { SVGProps } from 'react';

const Blip = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="17.77 45.62 165.46 179.27"
      {...props}
      ref={ref}
    >
      <path
        className="arrow-line"
        d="M185.637 157.907c-5.518 34.27-58.967 68.424-113.85 74.09"
        transform="matrix(-.79377 0 0 1.14915 231.389 -49.64)"
        paintOrder="stroke fill markers"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={143.604}
      />
      <path
        className="arrow-head-left"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={32.17}
        d="m142.074 216.78 32.166.495"
      />
      <path
        className="arrow-head-right"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={32.962}
        d="m158.54 187.576 15.333 29.18"
      />
      <ellipse
        className="dot"
        rx={3.554}
        ry={2.627}
        transform="matrix(.87351 -.71685 .812 .98947 85.227 59.72)"
      />
      <path
        className="blip-1"
        d="M19.772 115.978c12.77-9.405 20.803-43.028 12.03-56.026-3.85-3.75-7.268-1.629-7.561 2.98-3.224 10.93 5.338 42.82 13.371 55.86 5.112 5.668 10.753 3.472 14.034 1.19 3.625-4.14 4.638-12.07 2.119-17.079-1.151-4.844-5.683-9.798-9.533-8.606-3.93-.093-4.67 4.945-2.383 8.076 3.013 4.34 9.228 8.041 12.445 7.15 4.375.893 8.768-3.18 10.46-5.56 8.18-18.386 8.507-29.46 7.547-35.484-.621-8.189-2.854-15.175-4.74-17.284-5.418-6.818-7.932-2.506-7.708 1.616-1.42 16.715 1.322 24.06 1.865 28.716.862 3.491 2.847 18.05 14.158 25.216 6.078 2.481 8.47-3.754 9.797-7.944 2.59-10.488 4.37-23.845 2.648-24.892-3.816-2.722-3.23 6.002-1.72 13.373 1.278 4.89.625 10.73 7.546 11.916s11.225-3.341 12.843-9.4c1.406-8.716-1.242-22.548-3.972-24.76-3.774-2.674-4.54 1.661.794 7.547 8.343 13.916 13.062 27.519 16.285 40.515"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={513.099}
      />
      <path
        className="blip-2"
        d="M109.373 82.513c-.934-6.822 2.932-17.806 7.282-20.39 9.104-5.069 14.343 1.43 15.756 5.054.633 1.626 5.84 13.057-7.285 19.634"
        transform="matrix(1 0 0 1.033 0 -2.372)"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={65.071}
      />
    </svg>
  )
);

export default Blip;
