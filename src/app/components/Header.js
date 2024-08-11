"use client";
import {
  StarIcon,
  ShareIcon,
  LightningBoltIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-20 pl-28 pr-28 pb-20 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            alt="Logo of Avawatz"
            title="Avawatz"
            src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png"
            className="h-10 w-10 border"
          />
          <h1 className="text-5xl font-extrabold ml-4">Avawatz</h1>
        </div>
        <div className="flex space-x-4">
          <div className="relative flex items-center group">
            <StarIcon className="h-6 w-6 text-gray-500 cursor-pointer group-hover:text-yellow-500" />
            <div
              className="absolute w-40 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ width: "105px", height: "25px" }}
            >
              Follow Avawatz
            </div>
          </div>

          <div
            className="relative inline-block text-left"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="h-6 w-6 text-gray-500 cursor-pointer">
              <ShareIcon />
            </button>

            {open && (
              <div
                className="absolute right-0 w-25 bg-white border border-gray-200 round-small shadow-lg"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-6 w-6 text-blue-600"
                  />
                  <span>Facebook</span>
                </button>
                <button className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-6 w-6 text-blue-600"
                  />
                  <span>Twitter</span>
                </button>
                <button className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-6 w-6 text-blue-600"
                  />
                  <span>LinkedIn</span>
                </button>
                <button className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="h-6 w-6 text-blue-600"
                  />
                  <span>Telegram</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 text-lg text-gray-500">
        Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious
        Tasks
      </p>

      <div className="mt-2 flex space-x-2">
        <span className="px-1 py-0.5 bg-white text-pink-500 font-xs border flex items-center space-x-1 text-xs">
          <LightningBoltIcon className="h-3 w-3" />
          <span className="text-xs">SPECIAL</span>
        </span>
        <span className="px-1 py-0.5 bg-yellow-100 text-yellow-700 rounded-sm text-xs flex items-center">
          AAPI FOUNDERS
        </span>

        <span className="px-1 py-0.5 bg-red-200 text-gray-700 rounded-sm text-xs flex items-center">
          IMMIGRANT FOUNDERS
        </span>
        <span className="px-1 py-0.5 bg-blue-100 text-gray-500 rounded-sm text-xs flex items-center">
          WOMEN FOUNDERS
        </span>
        <span className="px-1 py-0.5 bg-gray-100 text-gray-500 rounded-sm text-xs flex items-center">
          SECURITY & DEFENSE
        </span>
        <span className="px-1 py-0.5 bg-gray-100 text-gray-500 rounded-sm text-xs flex items-center">
          B2B
        </span>
        <span className="px-1 py-0.5 bg-gray-100 text-gray-500 rounded-sm text-xs flex items-center">
          B2G
        </span>
        <span className="px-1 py-0.5 bg-gray-100 text-gray-500 rounded-sm text-xs flex items-center">
          ROBOTICS
        </span>
      </div>

      <div className="flex-item center">
        <div className="mt-6 flex justify-between items-start space-x-4">
          <div className="w-3/4">
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/previews/default/000/027/248/27248-1714582181-e3c6ee14e95c09c7d0d75c26d4b48f49351ff74a.jpeg"
              alt="Robot Teams accomplish more faster and safer"
              className="pr-10 w-full rounded-lg"
            />
          </div>
          <div className="w-1/4 p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 px-1 py-0.5 bg-gray-100 text-gray-500 rounded-sm text-xs">
                <LightningBoltIcon className="h-4 w-4 text-pink-500 cursor-pointer" />
                <span className="text-xxs font-bold text-pink-500">
                  SPECIAL TERMS: 82D 05H 12M LEFT
                </span>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-4xl font-extrabold">$358,884</div>
                  <div className="flex w-full items-center justify-between">
                    <div className="text-sm text-gray-500">Committed</div>
                    <InformationCircleIcon className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <hr />
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-4xl font-extrabold">18</div>
                  <div className="text-sm text-gray-500">Investors</div>
                </div>
                <hr />
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-4xl font-extrabold">83 days</div>
                  <div className="text-sm text-gray-500">Left to invest</div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <button className="px-12 py-4 text-lg bg-blue-600 text-white rounded-lg">
                  Invest in Avawatz
                </button>
                <div className="text-xs text-gray-500">
                  $2,500 minimum investment - Form CRS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
