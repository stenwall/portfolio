import { forwardRef } from 'react';
import { SVGProps } from 'react';

const Flick = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="70.29 38.49 199.88 206.99"
      {...props}
      ref={ref}
    >
      <path
        className="arrow-line"
        d="M188.624 150c-5.518 34.27-61.954 76.331-116.837 81.998"
        paintOrder="stroke fill markers"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={150.421}
      />
      <path
        className="arrow-head-left"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={32.17}
        d="m92.204 206.618-20.112 25.108"
      />
      <path
        className="arrow-head-right"
        fill="none"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={32.962}
        d="m102.495 243.981-30.708-11.984"
      />
      <path
        className="flick-1"
        d="M139.144 69.106c8.601-1.19 21.897-11.965 27.004-20.81 2.258-6.396-.566-10.351-7.36-5.928-12.936 12.436-30.202 40.942-33.43 56.863-1.867 6.612-3.031 16.322 1.61 17.215 5.242-1.716 10.354-11.673 11.96-18.485 2.315-11.407 1.863-25.793-.755-27.897s-.641 9.068 7.17 18.437c2.605 2.556 9.848 5.024 16.637 1.196 6.093-2.903 17.882-12.659 21.638-19.137 2.792-3.497 6.656-9.723 6.477-13.235.464-2.492.331-6.23-1.855-6.84-8.586 3.83-18.55 18.859-23.306 28.523-4.554 8.547-5.855 13.989-5.45 22.03q.406 8.041 8.822 6.39c7.894-1.676 17.461-12.868 22.358-20.346.208-1.343-.441-2.416-1.636-1.117-4.134 4.497-9.11 13.732-10.075 21.109-.251 5.147 3.212 7.476 5.678 8.044 9.547-.78 13.242-6.16 16.07-9.534"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={438.765}
      />
      <path
        className="flick-2"
        d="M219.689 106.841c3.267-2.576 3.696-6.906 2.19-8.92-1.056-1.477-3.02-3.6-7.198-2.9-5.383.39-13.442 6.687-14.526 12.51-1.88 9.083.613 12.578 3.328 15.185 1.551 2.144 6.227 3.714 9.898 3.4 6.652-.195 15.073-9 18.097-13.998"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={89.238}
      />
      <path
        className="flick-3"
        d="M235.438 102.512c6.703.68 17.074-7.571 20.534-12.89 3.135-5.139 2.999-12.502 1.6-13.996-4.88.264-14.13 15.376-21.395 25.594-7.223 12.958-6.389 25.691-6.3 29.594 3.703-7.275 10.615-17.076 13.798-19.096 3.96-3.655 10.46-4.625 12.797-.7 2.137 2.189 3.552 6.92 1.2 10.098-2.57 3.755-9.686 3.74-13.997 1.2-.635 6.598 2.038 15.604 6.299 17.196 7.452 5.019 13.686-3.954 18.196-9.698"
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={210.816}
      />
      <ellipse
        className="dot"
        rx={3.554}
        ry={2.627}
        transform="matrix(1.10829 .22045 -.2497 1.2554 197.374 74.166)"
      />
    </svg>
  )
);

export default Flick;
