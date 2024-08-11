import { HeartIcon, ChatIcon } from "@heroicons/react/solid";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Updates = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* <!-- First Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">Aug 8</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            AI-powered Drones: Saving Lives One Flight at a Time
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Fascinating story on how AI-powered drones are being used in New
            York City to warn residents about potential storm dangers!{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Second Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 31</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Prepare to Be Amazed: The Future of Autonomous Tech is Here
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            At Avavatz, we’re redefining the future of autonomous technology
            with our state-of-the-art AI and computer vision solutions...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Third Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 23</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The final small line --> */}
          <div className="w-px h-4 bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">$16,500 locked</h3>
          <p className="text-gray-700">
            <span className="font-bold">$16,500</span> of raised funds were
            locked in a rolling close.
            <span className="font-bold"> Avawatz </span>
            can now start using a percentage of these funds to grow its business
            while continuing to accept new investments in the campaign.
            <a
              href="/help/what-is-a-rolling-close-1"
              className="text-blue-500 underline ml-1"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* <!-- Fourth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 17</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            From Runways to Riches: The AI Robot Market to Triple by 2028 - a
            Revolution You Can't Ignore
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            The AI Robots market is poised for explosive growth, set to soar
            from $15.55 billion in 2024 to a staggering $44.29 billion by 2028,
            growing at a compound annual growth rate (CAGR) of 29.9%. This...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Fifth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 16</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            What if AI Could Predict Security Threats? (Spoiler: It Can)
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We're thrilled to share recent developments in AI-powered
            surveillance technology that align perfectly with our security and
            surveillance product ARWEN:Enhanced monitoring systems now offer...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Sixth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 12</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Thanks for watching us!{" "}
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We're thrilled that you chose to follow our journey.&nbsp;You are
            among more than 112 Republic investors who now keep tabs on our
            raise -- and more than 900 previous investors who have joined our...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Seventh Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 5</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Happy Independence Day!{" "}
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            As we celebrate Independence Day, we want to share an exciting
            update on AvaWatz's progress in revolutionizing AI robotics. Just as
            our nation's founders envisioned a bold future, we at AvaWatz are...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Eighth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jul 3</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Top 3 Reasons to Invest{" "}
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Top 3 Reasons to Double Down on Avawatz:Revolutionizing Safety: From
            Skies to IndoorsAvaWatz was founded with a clear vision: to develop
            AI robotics that push the boundaries of innovation and make...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Ninth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jun 25</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Industry Insight Webinar with Dr. Rajini Anachi
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Mark Your Calendar!We are excited to announce Rajini Anachi, our CEO
            will be talking to Greg Bomberg of the Republic on their live
            Webcast on Thursday, June 27, 2024, at 2 pm ET/11 am PTThis...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Tenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jun 17</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Exciting Update: Major Partnership and Revenue Boost for AvaWatz
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We are thrilled to share the incredible news that marks a
            significant milestone for AvaWatz's success. We just secured a major
            contract through a defense strategic partnership, which positions
            us...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Eleventh Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jun 13</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The final small line --> */}
          <div className="w-px h-4 bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">$55,596 locked</h3>
          <p className="text-gray-700">
            <span className="font-bold">$55,596</span> of raised funds were
            locked in a rolling close.
            <span className="font-bold"> Avawatz </span>
            can now start using a percentage of these funds to grow its business
            while continuing to accept new investments in the campaign.
            <a
              href="/help/what-is-a-rolling-close-1"
              className="text-blue-500 underline ml-1"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* <!-- Twelth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jun 10</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Robotics Technology Market is on the Rise
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We are thrilled that the global robotics technology market is
            experiencing unprecedented growth. According to the latest research,
            the market size is projected to reach a staggering $341.41
            billion...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Thirteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">Jun 6</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            The Future of AI Market
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We are thrilled to share the booming prospects of the artificial
            intelligence (AI) market, as highlighted by recent research. The
            global AI market, valued at $454.12 billion in 2022, is projected...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Fourteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 31</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Have you met Dr. Rishabh Iyer?
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We are pleased to introduce Dr. Rishabh Iyer, a key member of the
            AvaWatz team. Dr. Iyer has been with us since the beginning, and we
            are excited to share his invaluable contributions with
            you.&nbsp;As...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Fifteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 31</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Security Threats on the Rise! AvaWatz's ARWEN is the Answer!!
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            The global security landscape is rapidly evolving, with escalating
            threats driving an urgent need for advanced surveillance
            capabilities. The AI-based security market reached $25.22 billion in
            2024...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Sixteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 28</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Honoring Heroes, Building a Safer Future
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            This Memorial Day, we at Avawatz pause to honor the brave men and
            women who have made the ultimate sacrifice in service to our nation.
            Their courage inspires us to build a future where fewer lives...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Seventeenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 21</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            What's on the Horizon for AvaWatz?
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            AvaWatz is at the forefront of the rapidly growing Robotics
            Inspection market with its trusted AI Robotics solutions. AvaWatz's
            innovative solutions disrupt traditional inspection methods,
            offering...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Eighteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 21</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Rise of the Robo-Inspectors?
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            One of the areas that AvaWatz specializes in is the inspection and
            maintenance of critical infrastructure with the help of robot teams.
            The Inspection Robots Market is witnessing remarkable growth,...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Nineteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 20</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Unleashing the Power of GENIE
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Imagine a world where autonomous robots seamlessly navigate complex
            environments, medical imaging analysis reaches unprecedented
            accuracy, and even the most elusive runway debris is detected
            with...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Nineteenth Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 20</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Webinar Introducing AvaWatz's GENIE
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            We recently held a webinar with our CEO, Dr. Rajini Anachi, and
            Director of AI, Dr. Rishabh Iyer. We discussed how we developed
            GENIE initially to address our need for high-performance ML
            models...{" "}
            <a href="#" className="text-blue-500">
              Read more...
            </a>
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Ajay Jain"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900">Ajay Jain</h4>
              <p className="text-xs text-gray-500">Avavatz</p>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg> */}
              <HeartIcon className="h-5 w-5 text-gray-500" />
              Like (2)
            </a>
            <a href="#" className="text-sm text-gray-600 flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4"
                />
              </svg> */}
              <ChatIcon className="h-5 w-5 text-gray-500" />
              Comments
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Third Item --> */}
      <div className="relative flex space-x-6 py-4">
        {/* <!-- Date --> */}
        <div className="flex flex-col items-center">
          {/* <!-- The line --> */}
          <div className="w-px h-full bg-gray-300"></div>
          <span className="text-xs text-gray-400">May 10</span>
          <span className="text-xs text-gray-400">2024</span>
          {/* <!-- The final small line --> */}
          <div className="w-px h-4 bg-gray-300"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900">
            Launched <i className="fas fa-rocket"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Updates;
