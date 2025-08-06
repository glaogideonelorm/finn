"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import TransactionTable from "./components/TransactionTable";

export default function Dashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="flex flex-col w-full min-h-screen px-4 md:px-8 lg:px-12 bg-[#FCFDFD] relative">
      {/* Header */}
      <Header onMenuClick={toggleMobileSidebar} />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <>
          {/* Transparent Backdrop - Click to close */}
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-[#FCFDFD] shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#1B2528"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="px-4">
              <Sidebar isMobile={true} />
            </div>
          </div>
        </>
      )}

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-8 lg:gap-12 w-full">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-start flex-1 w-full lg:w-auto">
          {/* Dashboard Title Section */}
          <div className="flex py-4 md:py-7 flex-col items-start gap-4 md:gap-7 w-full bg-[#FCFDFD]">
            {/* Header Frame */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start w-full gap-4 md:gap-0">
              {/* Title and Status Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                {/* Title Container */}
                <div className="flex items-center gap-1">
                  <div className="text-[#1B2528] font-public-sans text-[24px] md:text-[34px] font-bold leading-tight md:leading-10 tracking-[-0.48px] md:tracking-[-0.68px]">
                    Wallet Ledger
                  </div>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.86274 9C8.65111 9 8.04529 9 7.76477 9.23959C7.52136 9.44749 7.39218 9.75934 7.4173 10.0785C7.44624 10.4462 7.87462 10.8746 8.73137 11.7314L10.8686 13.8686C11.2646 14.2646 11.4627 14.4627 11.691 14.5368C11.8918 14.6021 12.1082 14.6021 12.309 14.5368C12.5373 14.4627 12.7354 14.2646 13.1314 13.8686L15.2686 11.7314C16.1254 10.8746 16.5538 10.4462 16.5827 10.0785C16.6078 9.75934 16.4786 9.44749 16.2352 9.23959C15.9547 9 15.3489 9 14.1373 9H9.86274Z"
                      fill="#1B2528"
                    />
                  </svg>
                </div>

                {/* Project Status */}
                <div className="flex py-1 px-2 justify-center items-center gap-2 rounded-2xl border-[1.5px] border-transparent bg-[rgba(52,97,111,0.09)]">
                  <svg
                    className="w-1.5 h-1.5"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#087A2E" />
                  </svg>
                  <div className="text-[#1B2528] text-center font-public-sans text-[13px] md:text-[15px] font-medium leading-4 md:leading-5 line-clamp-1 overflow-hidden text-ellipsis">
                    Active
                  </div>
                </div>
              </div>

              {/* Actions Container */}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex py-2 px-3 md:px-[18px] justify-center items-center rounded-2xl bg-[#4B8B9F]">
                  <div className="text-[#020303] font-public-sans text-[13px] md:text-[15px] font-medium leading-4 md:leading-5">
                    Share
                  </div>
                </div>
                <div className="flex p-2 justify-center items-center rounded-2xl border-[1.5px] border-[rgba(73,101,110,0.20)] bg-[#FCFDFD]">
                  <div className="flex w-4 h-4 md:w-5 md:h-5 justify-center items-center relative">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 absolute -left-0.5 -top-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="#1B2528"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Pictures Container */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <div className="flex items-start gap-[-6px]">
                <div className="flex w-6 h-6 md:w-8 md:h-8 justify-center items-center rounded-full border-2 border-[#FCFDFD] relative">
                  <Image
                    className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded-full border-[1.5px] border-transparent absolute left-0 top-0"
                    src="/45b30b3d4c0520714585134f43acb8db2f152056.png"
                    alt="Profile picture"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex w-6 h-6 md:w-8 md:h-8 justify-center items-center rounded-full border-2 border-[#FCFDFD] relative -ml-1.5">
                  <Image
                    className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded-full border-[1.5px] border-transparent absolute left-0 top-0"
                    src="/e54f65ebefdc9596b942226b0c3531736436f0e9.png"
                    alt="Profile picture"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex w-6 h-6 md:w-8 md:h-8 justify-center items-center rounded-full border-2 border-[#FCFDFD] relative -ml-1.5">
                  <Image
                    className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded-full border-[1.5px] border-transparent absolute left-0 top-0"
                    src="/e9e99b2334700d7c5d6d77de3a4cc413042614c9.png"
                    alt="Profile picture"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex w-6 h-6 md:w-8 md:h-8 justify-center items-center rounded-full border-2 border-[#FCFDFD] relative -ml-1.5">
                  <Image
                    className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 rounded-full border-[1.5px] border-transparent absolute left-0 top-0"
                    src="/f4d9f75ce73fa0c4383233bf9f6ce5d667e1db90.png"
                    alt="Profile picture"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
                <div className="text-[rgba(21,39,45,0.62)] font-public-sans text-[13px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.075px]">
                  Ava, Liam, Noah
                </div>
                <div className="text-[rgba(21,39,45,0.62)] font-public-sans text-[13px] md:text-[15px] font-normal leading-4 md:leading-5 tracking-[-0.075px]">
                  +12 others
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex items-start w-full border-b-[1.5px] border-[rgba(73,101,110,0.20)] overflow-x-auto">
              <div className="flex py-2 md:py-3 px-4 md:px-7 justify-center items-center gap-2 border-b-[1.5px] border-[#4B8B9F] whitespace-nowrap">
                <div className="text-[#437D8E] font-public-sans text-[13px] md:text-[15px] font-medium leading-4 md:leading-5">
                  Overview
                </div>
              </div>
              <div className="flex py-2 md:py-3 px-4 md:px-7 justify-center items-center gap-2 whitespace-nowrap">
                <div className="text-[rgba(21,39,45,0.62)] font-public-sans text-[13px] md:text-[15px] font-medium leading-4 md:leading-5">
                  Transactions
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <SummaryCards />

          {/* Transaction Table */}
          <TransactionTable />
        </div>
      </div>

      {/* Footer */}
      <div className="h-12 flex-shrink-0 w-full bg-[#FCFDFD]"></div>
    </div>
  );
}
