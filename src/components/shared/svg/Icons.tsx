import React from "react";

interface Props {
  fill?: string;
  stroke?: string;
  className?: string;
}

export const Copy: React.FC<Props> = ({
  className = "w-[14px] h-[16px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 14 16"
    fill="none"
  >
    <rect
      x="4.74121"
      y="1.94287"
      width="8.25878"
      height="8.8209"
      rx="1"
      fill="#413111"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="1.17297"
      y="5.23621"
      width="8.25878"
      height="8.8209"
      rx="1"
      fill="#413111"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

export const BlackCopy: React.FC<Props> = ({
  className = "w-[14px] h-[16px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 14 16"
    fill="none"
  >
    <rect
      x="4.74097"
      y="1.94287"
      width="8.25878"
      height="8.8209"
      rx="1"
      fill="#F1F1F1"
      stroke="#1D1D1D"
      strokeWidth="2"
    />
    <rect
      x="1.17285"
      y="5.23621"
      width="8.25878"
      height="8.8209"
      rx="1"
      fill="#F1F1F1"
      stroke="#1D1D1D"
      strokeWidth="2"
    />
  </svg>
);

export const Insta: React.FC<Props> = ({
  fill = "#EB4E60",
  className = "w-[22px] h-[22px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6C0 2.68629 2.68629 0 6 0H16C19.3137 0 22 2.68629 22 6V16C22 19.3137 19.3137 22 16 22H6C2.68629 22 0 19.3137 0 16V6ZM17 3.50052C16.1719 3.50052 15.5 4.17161 15.5 5C15.5 5.82812 16.1719 6.5 17 6.5C17.8281 6.5 18.5 5.82812 18.5 5C18.5 4.17188 17.8281 3.5 17 3.5V3.50052ZM5.5 11.0006C5.5 7.96294 7.9627 5.50012 11.0002 5.5H11.0004C14.038 5.50012 16.5 7.96294 16.5 11.0006C16.5 14.0382 14.0381 16.5 11.0004 16.5C7.96282 16.5 5.5 14.0382 5.5 11.0006ZM15 11.0006C15 8.7911 13.2093 7.00012 11.0004 7H11.0002C8.79115 7.00012 7 8.79134 7 11.0006C7 13.2095 8.79088 15 11.0004 15C13.2097 15 15 13.2098 15 11.0006Z"
      className={fill}
    />
  </svg>
);

export const Facebook: React.FC<Props> = ({
  className = "w-[22px] h-[22px]",
  fill = "#EB4E60",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.00293 0C2.68922 0 0.00292969 2.68629 0.00292969 6V16C0.00292969 19.3137 2.68922 22 6.00293 22H16.0029C19.3166 22 22.0029 19.3137 22.0029 16V6C22.0029 2.68629 19.3166 0 16.0029 0H6.00293ZM11.9927 10.9993V17H9.33213V10.9995H8.00293V8.93166H9.33213V7.69011C9.33213 6.00314 10.0827 5 12.2151 5H13.9904V7.06811H12.8807C12.0506 7.06811 11.9957 7.3571 11.9957 7.89643L11.9927 8.93142H14.0029L13.7677 10.9993H11.9927Z"
      className={fill}
    />
  </svg>
);

export const Twitter: React.FC<Props> = ({
  className = "w-[22px] h-[22px]",
  fill = "#EB4E60",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0C2.68629 0 0 2.68629 0 6V16C0 19.3137 2.68629 22 6 22H16C19.3137 22 22 19.3137 22 16V6C22 2.68629 19.3137 0 16 0H6ZM11.3527 9.09073L11.3267 8.6582C11.2486 7.53716 11.9336 6.51322 13.0175 6.116C13.4163 5.97476 14.0926 5.95711 14.5348 6.08069C14.7082 6.13365 15.0377 6.31019 15.2718 6.46908L15.6967 6.76038L16.1649 6.61031C16.425 6.53087 16.7719 6.39846 16.9279 6.31019C17.0753 6.23075 17.2054 6.18661 17.2054 6.2131C17.2054 6.36316 16.8846 6.87513 16.6158 7.1576C16.2516 7.55481 16.3557 7.59012 17.0927 7.32531C17.5349 7.17525 17.5435 7.17525 17.4568 7.34296C17.4048 7.43124 17.136 7.74018 16.8499 8.02265C16.3643 8.50814 16.3383 8.5611 16.3383 8.96715C16.3383 9.59388 16.0435 10.9003 15.7487 11.6153C15.2025 12.957 14.0319 14.3429 12.8614 15.0402C11.214 16.02 9.02029 16.2672 7.17344 15.6934C6.55782 15.4992 5.5 15.0049 5.5 14.9166C5.5 14.8901 5.82081 14.8548 6.21099 14.846C7.02604 14.8283 7.84108 14.5988 8.53473 14.1928L9.00295 13.9103L8.46537 13.725C7.70235 13.4601 7.01737 12.8511 6.84395 12.2773C6.79193 12.0919 6.80927 12.0831 7.29483 12.0831L7.79773 12.0743L7.37286 11.8713C6.86996 11.6153 6.41042 11.1828 6.18498 10.7414C6.02024 10.4236 5.81214 9.62036 5.87284 9.55857C5.89018 9.53209 6.07226 9.58505 6.28036 9.65567C6.87864 9.87634 6.95667 9.82338 6.60984 9.45264C5.95955 8.78178 5.76012 7.78432 6.07226 6.83982L6.21967 6.41612L6.79193 6.98988C7.96247 8.14623 9.3411 8.83475 10.9192 9.03777L11.3527 9.09073Z"
      className={fill}
    />
  </svg>
);

export const Tiktok: React.FC<Props> = ({
  className = "w-[22px] h-[22px]",
  fill = "#EB4E60",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0C2.68629 0 0 2.68629 0 6V16C0 19.3137 2.68629 22 6 22H16C19.3137 22 22 19.3137 22 16V6C22 2.68629 19.3137 0 16 0H6ZM14.5879 7.39408C15.1182 7.77741 15.7785 8.00464 16.4941 8.00464C16.4945 8.00464 16.4977 8.00464 16.4992 8.00445C16.4996 8.0044 16.4999 8.00434 16.5 8.00427V8.53209V9.95483C15.8 9.95507 15.1199 9.82362 14.4785 9.56423C14.066 9.39733 13.6818 9.18231 13.3303 8.92246L13.3408 13.3017C13.3364 14.2878 12.9294 15.2144 12.1927 15.9122C11.5931 16.4803 10.8334 16.8416 10.01 16.9585C9.81653 16.9859 9.61962 17 9.42051 17C8.53906 17 7.70219 16.7263 7.01766 16.2214C6.88884 16.1263 6.76565 16.0233 6.64833 15.9122C5.84992 15.1559 5.43822 14.1308 5.50753 13.0524C5.56043 12.2315 5.90331 11.4487 6.47493 10.8351C7.23123 10.0231 8.28925 9.57245 9.42051 9.57245C9.61962 9.57245 9.81653 9.58677 10.01 9.61423V10.1403V11.6036C9.82657 11.5456 9.63064 11.5137 9.42663 11.5137C8.3931 11.5137 7.55696 12.3219 7.57239 13.3132C7.58219 13.9475 7.94368 14.5019 8.47686 14.8076C8.7274 14.9512 9.01567 15.0402 9.32328 15.0564C9.56427 15.0691 9.79571 15.0369 10.01 14.9691C10.7484 14.7353 11.2811 14.0705 11.2811 13.2865L11.2836 10.3539V5H13.3279C13.3298 5.19413 13.3504 5.38356 13.3886 5.56712C13.5429 6.31007 13.9798 6.95466 14.5879 7.39408ZM16.5 8.00417C16.5 8.0042 16.5 8.00424 16.5 8.00427V8.00417Z"
      className={fill}
    />
  </svg>
);

export const PlayButton: React.FC<Props> = ({
  className = "w-[58px] h-[60px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 58 60"
    fill="none"
  >
    <circle
      cx="28"
      cy="30"
      r="27"
      fill="white"
      fill-opacity="0.4"
      stroke="#C9C9C9"
    />
    <rect x="12" y="18" width="32" height="23" rx="11.5" fill="black" />
    <rect x="24.5" y="25" width="2" height="9" fill="white" />
    <rect x="29.5" y="25" width="2" height="9" fill="white" />
    <path
      d="M28 57C42.9117 57 55 44.9117 55 30C55 15.0883 42.9117 3 28 3"
      stroke="#FB4C62"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export const Player: React.FC<Props> = ({
  className = "w-[150px] h-[60px]",
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 150 60"
    fill="none"
  >
    <circle
      cx="75"
      cy="30"
      r="27"
      fill="white"
      fill-opacity="0.4"
      stroke="#C9C9C9"
    />
    <rect x="59" y="18" width="32" height="23" rx="11.5" fill="black" />
    <rect x="71.5" y="25" width="2" height="9" fill="white" />
    <rect x="76.5" y="25" width="2" height="9" fill="white" />
    <path
      d="M75 57C89.9117 57 102 44.9117 102 30C102 15.0883 89.9117 3 75 3"
      stroke="#FFE81E"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <rect y="19" width="32" height="23" rx="11.5" fill="black" />
    <path d="M13 31L19 26.6699L19 35.3301L13 31Z" stroke="white" />
    <line x1="11.5" y1="27" x2="11.5" y2="35" stroke="white" />
    <rect
      width="32"
      height="23"
      rx="11.5"
      transform="matrix(-1 0 0 1 150 19)"
      fill="black"
    />
    <path d="M137 31L131 26.6699L131 35.3301L137 31Z" stroke="white" />
    <line
      y1="-0.5"
      x2="8"
      y2="-0.5"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 139 27)"
      stroke="white"
    />
  </svg>
);