import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex py-2 md:py-3 justify-between items-center w-full bg-[#FCFDFD]">
      <div className="flex items-center gap-3 md:gap-7">
        {/* Menu Icon - Interactive on mobile */}
        <button
          onClick={onMenuClick}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors lg:cursor-default lg:hover:bg-transparent"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#1B2528"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex h-6 md:h-8 items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66659 17.3333C6.66659 19.5312 7.5529 21.522 8.98758 22.9679C9.12595 23.1074 9.19513 23.1771 9.23597 23.2442C9.27493 23.3081 9.29762 23.3632 9.31502 23.4361C9.33326 23.5124 9.33326 23.5993 9.33326 23.7731V26.9333C9.33326 27.3067 9.33326 27.4934 9.40592 27.636C9.46984 27.7614 9.57183 27.8634 9.69727 27.9273C9.83987 28 10.0266 28 10.3999 28H12.9333C13.3066 28 13.4933 28 13.6359 27.9273C13.7614 27.8634 13.8634 27.7614 13.9273 27.636C13.9999 27.4934 13.9999 27.3067 13.9999 26.9333V26.4C13.9999 26.0266 13.9999 25.8399 14.0726 25.6973C14.1365 25.5719 14.2385 25.4699 14.3639 25.406C14.5065 25.3333 14.6932 25.3333 15.0666 25.3333H16.9333C17.3066 25.3333 17.4933 25.3333 17.6359 25.406C17.7614 25.4699 17.8634 25.5719 17.9273 25.6973C17.9999 25.8399 17.9999 26.0266 17.9999 26.4V26.9333C17.9999 27.3067 17.9999 27.4934 18.0726 27.636C18.1365 27.7614 18.2385 27.8634 18.3639 27.9273C18.5065 28 18.6932 28 19.0666 28H21.6C21.9734 28 22.1601 28 22.3027 27.9273C22.4281 27.8634 22.5301 27.7614 22.594 27.636C22.6667 27.4934 22.6667 27.3067 22.6667 26.9333V25.6324C22.6667 25.363 22.6667 25.2283 22.705 25.1202C22.7418 25.0165 22.7881 24.944 22.8666 24.867C22.9486 24.7867 23.0874 24.7222 23.3649 24.5934C24.6746 23.9854 25.7921 23.0334 26.6015 21.8536C26.7439 21.6461 26.815 21.5423 26.891 21.4811C26.9637 21.4225 27.0289 21.3881 27.1183 21.3613C27.2119 21.3333 27.3229 21.3333 27.545 21.3333H28.2667C28.6401 21.3333 28.8267 21.3333 28.9694 21.2607C29.0948 21.1968 29.1968 21.0948 29.2607 20.9693C29.3334 20.8267 29.3334 20.64 29.3334 20.2667V15.7143C29.3334 15.3589 29.3334 15.1812 29.2673 15.044C29.2018 14.908 29.092 14.7982 28.956 14.7327C28.8189 14.6667 28.6411 14.6667 28.2857 14.6667C28.0284 14.6667 27.8998 14.6667 27.7961 14.6317C27.6844 14.5941 27.6061 14.544 27.525 14.4584C27.4498 14.379 27.3885 14.2462 27.2657 13.9806C26.8718 13.1283 26.3322 12.357 25.679 11.6987C25.5407 11.5593 25.4715 11.4896 25.4306 11.4225C25.3917 11.3585 25.369 11.3034 25.3516 11.2306C25.3334 11.1542 25.3334 11.0673 25.3334 10.8936V9.4141C25.3334 8.93404 25.3334 8.69401 25.2334 8.53267C25.1458 8.39134 25.0086 8.28784 24.8486 8.24246C24.666 8.19066 24.4352 8.2566 23.9737 8.38848L20.8102 9.29229C20.7565 9.30765 20.7296 9.31533 20.7023 9.32072C20.678 9.32551 20.6535 9.32895 20.6288 9.33101C20.6011 9.33333 20.5731 9.33333 20.5172 9.33333H19.9454M6.66659 17.3333C6.66659 14.2612 8.39821 11.5936 10.9386 10.2532M6.66659 17.3333H5.33335C3.86059 17.3333 2.66669 16.1394 2.66669 14.6667C2.66659 13.6796 3.20295 12.8178 4.00002 12.3568M20 8.66667C20 11.244 17.9107 13.3333 15.3334 13.3333C12.756 13.3333 10.6667 11.244 10.6667 8.66667C10.6667 6.08934 12.756 4 15.3334 4C17.9107 4 20 6.08934 20 8.66667Z"
              stroke="#437D8E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-[#437D8E] font-timmana text-lg md:text-2xl font-normal leading-[100%] tracking-[-0.36px] md:tracking-[-0.48px]">
            FinTrack
          </div>
        </Link>
      </div>

      <div className="flex justify-end items-center gap-3 md:gap-7">
        {/* Search Icon - Hidden on mobile */}
        <svg
          className="hidden sm:block w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0004 21L16.6504 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#1B2528"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* App Grid Icon - Hidden on mobile */}
        <svg
          className="hidden sm:block w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3H3V10H10V3Z"
            stroke="#1B2528"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 3H14V10H21V3Z"
            stroke="#1B2528"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 14H14V21H21V14Z"
            stroke="#1B2528"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14H3V21H10V14Z"
            stroke="#1B2528"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Profile Picture */}
        <Link
          href="/"
          className="flex w-8 h-8 md:w-10 md:h-10 justify-center items-center flex-shrink-0 rounded-full relative hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-full border-[1.5px] border-transparent absolute left-0 top-0"
            src="/45b30b3d4c0520714585134f43acb8db2f152056.png"
            alt="User profile"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
