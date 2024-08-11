import { FaBolt, FaInfo } from "react-icons/fa";

const deals = [
  {
    title: "Fund Raised",
    amount: "$163,247",
  },
  {
    title: "Allocation",
    amount: "$5",
  },
  {
    title: "Valuation",
    amount: "$80.85M",
  },
  {
    title: "Share Price",
    amount: "$4",
  },
  {
    title: "Security Type",
    amount: "Preferred Share",
  },
  {
    title: "Minimum Investment",
    amount: "$2,500",
  },
  {
    title: "Deadline",
    amount: "November 1, 2024",
  },
];

const DealTerms = () => {
  return (
    <div className="mb-8 w-[300px] m-[30px]">
      <div>
        <h2 className="text-[#666] font-extrabold text-[25px] mb-2 leading-[.92] tracking-[-.03em] mb-4 relative">
          Deal Terms
          <a
            href="#"
            className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full absolute right-0 bg-transparent border border-red-500 text-red-500 rounded-[5px]"
          >
            <FaBolt size={12} />
            <span className="ml-1.5">Special</span>
          </a>
        </h2>
        <hr className="w-[56px] my-6" />
      </div>
      <div>
        {deals.map((deal, index) => (
          <div
            className="border-b border-[#eee] pt-0 pb-[19px] font-normal deal pt-[19px] pb-[19px]"
            key={index}
          >
            <div className="relative pr-6 leading-[1.2] flex">
              <div className="text-[#333] flex-grow overflow-wrap break-word leading-[1.2] text-[15px]">
                {deal.title}
              </div>
              <div className="font-semibold text-right ml-4 leading-[1.2] text-[15px]">
                <span>{deal.amount}</span>
                <FaInfo
                  size={15}
                  className="inline-block bg-[#f2f2f2] p-1 rounded-[5px] ml-1.25"
                />
              </div>
            </div>
            <div className="pt-4 text-[13px] text-[#333] deal-desc ">
              <div>
                Funds raised publicly & privately on and off Republic on the
                same terms
              </div>
              <div className="text-center text-[14px] mt-[30px] opacity-65 font-sans">
                Powered by{" "}
                <a href="#" className="text-[#0049ff] no-underline break-words">
                  Froala Editor
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealTerms;
