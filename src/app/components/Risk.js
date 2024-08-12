"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
const riskList = [
  {
    id: 0,
    name: "Risks Of Borrowing:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 1,
    name: "General Economic Conditions:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 2,
    name: "Inadequacy Of Funds:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 3,
    name: "Possible Fluctuations In Operating Results:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 4,
    name: "Uncertain Risk:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 5,
    name: "Dependence On Management:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 6,
    name: "Risks Associated with Expansion:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 7,
    name: "Customer Base and Market Acceptance:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 8,
    name: "Competition:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 9,
    name: "Unanticipated Obstacles To Execution Of The Business Plan:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 10,
    name: "Management Discretion As To Use Of Proceeds:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 11,
    name: "Control By Management:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 12,
    name: "Our future success depends on the efforts of a small management team:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 13,
    name: "Dividend Policy:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 14,
    name: "No Assurances of Protection for Proprietary Rights; Reliance on Trade Secrets:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 15,
    name: "We may need to raise additional capital, which might not be available or might be available only on term unfavorable to us or our investors:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 16,
    name: "Limited Transferability & Liquidity:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 17,
    name: "Long Term Nature of Investment:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 18,
    name: "If the Company cannot raise sufficient funds it will not succeed:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 19,
    name: "We rely on third parties to provide services essential to the success of our business:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 20,
    name: "Insufficient Funds:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 21,
    name: "No Current Market for Shares:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 22,
    name: "Terms of subsequent financings may adversely impact your investment:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 23,
    name: "Management Discretion as to Use of Proceeds:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 24,
    name: "You are trusting that management will make the best decision for the company:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 25,
    name: "Insufficient Funds:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 26,
    name: "Projections: Forward-Looking Information:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 27,
    name: "The loss of one or more of our key personnel, or our failure to attract and retain other highly qualified personnel in the future, could harm our business:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 28,
    name: "Compliance with Securities Laws:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 29,
    name: "Terrorist Attacks Or Other Acts Of Violence Or War May Affect The Industry In Which The Company Operates, Its Operations & Its Profitability:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 30,
    name: "Some of our products are still in prototype phase and might never be operational products:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 31,
    name: "Our trademarks, copyrights, and other intellectual property could be unenforceable or ineffective:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 32,
    name: "Our ability to sell our product or service is dependent on outside government regulation which can be subject to change at any time:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 33,
    name: "Developing new products and technologies entails significant risks and uncertainties:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 34,
    name: "Our business projections are only projections:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 35,
    name: "The cost of enforcing our trademarks and copyrights could prevent us from enforcing them:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
  {
    id: 36,
    name: "The Company is vulnerable to hackers and cyber-attacks:",
    value:
      "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  },
];
const Risk = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pt-12 border-t border-t-solid border-t-[#eee] bg-white mb-24">
      <div className="max-w-[1170px] w-full mx-auto px-8">
        <div className="text-center">
          <h2 className="text-[25px] font-black pb-4 inline-block mb-12 relative text-[#666] leading-[.92] tracking-[-.03em] risk">
            Risks
          </h2>
        </div>
        {riskList.map((risk) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" key={risk.id}>
            <div className="">
              <div key={risk.id}>
                <a
                  href="#"
                  className={`block py-4 inline-block text-black w-full relative pr-8 risk-item ${
                    selected === risk.id ? "risk-active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(risk.id);
                  }}
                >
                  {risk.name}
                  {selected === risk.id ? (
                    <FaChevronRight className="inline" />
                  ) : (
                    ""
                  )}
                </a>
              </div>
            </div>
            <div className="">
              {selected === risk.id && (
                <div className="py-4 px-6 bg-[#f7f7f7] break-words text-[16px] border-gray-200 overflow-wrap absolute">
                  <p className="mb-4">{risk.value}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default Risk;
