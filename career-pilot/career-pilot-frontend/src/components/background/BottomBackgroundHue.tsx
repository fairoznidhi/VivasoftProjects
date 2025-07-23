const BottomBackgroundHue = () => {
  return (
    <div className="relative h-full w-full">
      {/* Left Hue */}
      <div className="absolute bottom-0 left-0 w-[40vw] max-w-[613px] h-auto">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 613 432"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <g filter="url(#filter0_f_left)">
            <path
              d="M367 508.599C367 644.185 73.7622 737 -61.5948 737C-196.952 737 -453 615.483 -453 479.897C-453 344.311 -196.952 246 -61.5948 246C73.7622 246 367 373.014 367 508.599Z"
              fill="url(#paint0_linear_left)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_left"
              x="-698.4"
              y="0.6"
              width="1310.8"
              height="981.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="122.7" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
              id="paint0_linear_left"
              x1="-43"
              y1="246"
              x2="-43"
              y2="737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCF1FF" />
              <stop offset="0.5" stopColor="#92EAFD" />
              <stop offset="1" stopColor="#1071FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Middle Hue */}
      <div className="absolute bottom-0 left-[15%] w-[80vw] max-w-[1440px] h-auto">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 337"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <g filter="url(#filter0_f_mid)">
            <path
              d="M1406 565C1406 787.018 925.018 939 703 939C480.982 939 61 740.018 61 518C61 295.982 480.982 135 703 135C925.018 135 1406 342.982 1406 565Z"
              fill="url(#paint0_linear_mid)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_mid"
              x="-73.7"
              y="0.3"
              width="1614.4"
              height="1073.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="67.35" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
              id="paint0_linear_mid"
              x1="733.5"
              y1="135"
              x2="733.5"
              y2="939"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCF1FF" />
              <stop offset="0.5" stopColor="#A79EFA" />
              <stop offset="1" stopColor="#9FE1FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Hue */}
      <div className="absolute bottom-0 right-0 w-[35vw] max-w-[459px] h-auto max-h-[400px]">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 459 528"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <g filter="url(#filter0_f_right)">
            <path
              d="M1066 508.6C1066 644.185 772.762 737 637.405 737C502.048 737 246 615.483 246 479.897C246 344.311 502.048 246 637.405 246C772.762 246 1066 373.014 1066 508.6Z"
              fill="url(#paint0_linear_right)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_right"
              x="0.6"
              y="0.6"
              width="1310.8"
              height="981.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="122.7" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
              id="paint0_linear_right"
              x1="656"
              y1="246"
              x2="656"
              y2="737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCF1FF" />
              <stop offset="0.5" stopColor="#92EAFD" />
              <stop offset="1" stopColor="#1071FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default BottomBackgroundHue;
