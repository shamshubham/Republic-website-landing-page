"use client";
import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  HomeIcon,
  UserIcon,
  CogIcon,
  ChevronUpRightIcon,
} from "@heroicons/react/outline";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [investorsOpen, setInvestorsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="bg-white border-b relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                alt="Republic"
                title="Republic"
                className="h-7 w-28 sm:w-30 md:w-38 lg:w-48"
                src="https://assets.republic.com/assets/logo/full/black/logo-2c113fd1a194abf7fa3c5809c1470ca753c7a8dda7c2a3e86544990495e3056e.svg"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 ml-12">
              <div
                onMouseEnter={() => setInvestorsOpen(true)}
                onMouseLeave={() => setInvestorsOpen(false)}
              >
                <a
                  href="#"
                  className="text-black-300 flex items-center justify-content"
                >
                  <div className="relative group">
                    <span className="mr-2 h-20 flex items-center ">
                      Investors
                    </span>
                    <hr className="absolute bottom-0 left-0 w-full border-blue-500 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
                {investorsOpen && (
                  <div className="absolute left-0 h-[400px] w-[1349px] bg-white border border-gray-300 shadow-lg z-10 flex">
                    <div className="flex space-x-8 pt-12 pl-12 w-3/4 ml-2 mt-2">
                      {/* Growth Capital Solutions */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-4">
                          All Investors
                        </div>
                        <div className="space-y-4">
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Primary market</div>
                            <div className="text-xs text-gray-600">
                              Invest in startups
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Secondary market</div>
                            <div className="text-xs text-gray-600">
                              Buy and sell assets
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Republic Note</div>
                            <div className="text-xs text-gray-600">
                              Own a piece of republic's upside
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">
                              Investor Network Membership
                            </div>
                            <div className="text-xs text-gray-600">
                              Receive exclusive discounts and benefits
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Web3 Services */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-4">
                          Accredited only
                        </div>
                        <div className="space-y-4">
                          <div className="mb-8 cursor-pointer">
                            <div className="flex items-center font-low">
                              Republic Venture
                            </div>
                            <div className="text-xs text-gray-600">
                              Oppurtinity for accredited investors
                            </div>
                          </div>
                          <div className="text-2x1 font-semibold mb-4">
                            Institutional
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Republic capital</div>
                              <div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                  className="h-3 w-3 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Multi-stage venture firm
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Republic Digital</div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Capital hedge fund
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Institutional Services */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-2">More</div>
                        <div className="space-y-4">
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              Wallet
                            </div>
                            <div className="text-xs text-gray-600">
                              Manage your digital assets
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Mobile app</div>
                            <div className="text-xs text-gray-600">
                              Available on iOS or Android
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Learning center</div>
                            <div className="text-xs text-gray-600">
                              Explore investor resources
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">FAQ</div>
                            <div className="text-xs text-gray-600">
                              Get your questions answered
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 flex flex-col space-y-4 p-4">
                      <div className="text-2x1 font-semibold mb-4 mt-10">
                        What's new
                      </div>
                      <div className="mb-4">
                        <img
                          src="https://imgproxy.republic.com/PY-CMwBulJxR7SiXEDjqPcMtsMVOfmrQjFMff31X5JA/rs:auto:576:1024/aHR0cHM6Ly91cGxv/YWRzLnJlcHVibGlj/LmNvbS9wL2V2ZW50/cy9jb3Zlcl9waG90/b3Mvb3JpZ2luYWwv/MDAwLzAwMC80Mzkv/NDM5LTE2OTUxMzE0/MjEtODQwMjUyYmQ4/ZjU2Yjc5ZGFhMmJj/MGJkNTkxMDQ5OTg4/MzJhNWFiYS5wbmc"
                          alt="Event Image"
                          className="rounded-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="font-medium">Unicorn Hunt</div>
                        <div className="text-xs text-gray-600">
                          Thu, Aug 22 23:30pm - 00:30am
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setBusinessOpen(true)}
                onMouseLeave={() => setBusinessOpen(false)}
              >
                <a
                  href="#"
                  className="text-black-300 flex items-center justify-content"
                >
                  <div className="relative group">
                    <span className="mr-2 h-20 flex items-center ">
                      Businesses
                    </span>
                    <hr className="absolute bottom-0 left-0 w-full border-blue-500 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
                {businessOpen && (
                  <div className="absolute left-0 h-[400px] w-[1349px] bg-white border border-gray-300 shadow-lg z-10">
                    <div className="flex space-x-8 pt-12 pl-12 w-3/4 ml-2 mt-2">
                      {/* Growth Capital Solutions */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-4">
                          Growth Capital Solutions
                        </div>
                        <div className="space-y-4">
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">
                              Community Fundraising
                            </div>
                            <div className="text-xs text-gray-600">
                              Raise on Republic
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Tokenized Assets</div>
                            <div className="text-xs text-gray-600">
                              Design, launch, manage tokenized assets
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Sharedrops</div>
                            <div className="text-xs text-gray-600">
                              Gift equity as a reward
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Web3 Services */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-4">
                          Web3 Services
                        </div>
                        <div className="space-y-4">
                          <div className="mb-4 cursor-pointer">
                            <div className="flex items-center font-low">
                              <div>Advisory</div>
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                className="h-3 w-3 ml-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </div>
                            <div className="text-xs text-gray-600">
                              Access veteran web3 advisors
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Infrastructure</div>
                              <div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                  className="h-3 w-3 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Stake your digital assets
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Tokenization</div>
                              <div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                  className="h-3 w-3 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Deploy your assets on-chain
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Asset Management</div>
                              <div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                  className="h-3 w-3 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Explore digital asset funds
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Institutional Services */}
                      <div className="flex-1">
                        <div className="text-2x1 font-semibold mb-2">
                          Institutional Services
                        </div>
                        <div className="space-y-4">
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low flex items-center">
                              <div>Capital Fundraising</div>
                              <div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="#1D4ED8" // Blue color (Tailwind's blue-700)
                                  className="h-3 w-3 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">
                              Venture growth-stage funding
                            </div>
                          </div>
                          <div className="mb-4 cursor-pointer">
                            <div className="font-low">Broker Dealer</div>
                            <div className="text-xs text-gray-600">
                              Regulated capital services
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                {/* Overlay */}
                {searchFocused && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10"
                    onClick={() => setSearchFocused(false)}
                  />
                )}

                {/* Search Input */}
                <div className="relative z-20">
                  <input
                    type="search"
                    placeholder="Search commands..."
                    className={`transition-all duration-300 ease-in-out ${
                      searchFocused
                        ? "w-[400px] pl-12 pr-3 py-3 border-2"
                        : "w-48 pl-10 pr-3 py-2 border"
                    } border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <span
                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                      searchFocused ? "pl-4" : ""
                    }`}
                  >
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                  </span>
                </div>

                {/* Command Palette Dropdown */}
                {searchFocused && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 shadow-lg rounded-md z-20 transition-all duration-300 ease-in-out">
                    <div className="p-4">
                      <p className="text-sm text-gray-700">Most traction</p>

                      {/* Command Options */}
                      <div className="mt-2 space-y-4">
                        {/* Command Item */}
                        <div className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-lg">
                          <img
                            src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/009/145/9145-1717007097-268e0c4d27cb362b97f3b655808ba82a010ade11.png"
                            alt="Icon 1"
                            className="w-10 h-10 rounded-md mr-3"
                          />
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Watford FC
                            </h3>
                            <p className="text-xs text-gray-500">
                              Own a team one step from Premier League
                            </p>
                          </div>
                        </div>

                        {/* Command Item */}
                        <div className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-lg">
                          <img
                            src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/001/997/1997-1718138336-c3fb881550591c7c55e87962d558845e617a8a92.png"
                            alt="Icon 2"
                            className="w-10 h-10 rounded-md mr-3"
                          />

                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Circuit City
                            </h3>
                            <p className="text-xs text-gray-500">
                              Recharged with AI. Tech Reimagined
                            </p>
                          </div>
                        </div>

                        {/* Command Item */}
                        <div className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-lg">
                          <img
                            src="https://uploads.republic.com/p/offerings/logos/small/000/005/364/5364-1696517836-2164d36b0b47d0f74ce142c0a88841bcdccc9990.png"
                            alt="Icon 3"
                            className="w-10 h-10 rounded-md mr-3"
                          />
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              CYBER
                            </h3>
                            <p className="text-xs text-gray-500">
                              CYBER: Finding the Needle in the Cyber Haystack
                              with Artificial Intelligence(AI)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a
                  href="#"
                  className="text-gray-900 font-low hover:text-gray-700 flex items-center ml-60"
                >
                  <GlobeAltIcon className="h-16 w-6" />
                  US
                </a>
                {isOpen && (
                  <div
                    className="absolute right-0 mt-0 w-55 bg-white border border-gray-300 shadow-lg"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <div className="block px-4 py-2 text-gray-700">
                      <div className="font-bold mb-2">Region Preference</div>
                      <div className="text-gray-500 text-small">
                        You are viewing the US site
                      </div>
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black-700 hover:bg-gray-100"
                    >
                      Global
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
                    >
                      US
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black-700 hover:bg-gray-100"
                    >
                      Europe
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search */}
          {/* <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-2 left-1 pl-3 flex items-center">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-low hover:text-gray-700">
              Log in
            </a>
            <a href="#" className="text-gray-900 font-low hover:text-gray-700">
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base"
            >
              Investors
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base"
            >
              Businesses
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base"
            >
              US
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium block px-3 py-2 rounded-md text-base"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
