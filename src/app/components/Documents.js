import { FaFileAlt } from "react-icons/fa";
const docs = [
  "Subscription Agreement",
  "AvaWatz IOM Supplement #3 .pdf",
  "AvaWatz IOM Supplement #2 .pdf",
  "AvaWatz Reg S IOM Supplement #1 (05.28.24).pdf",
  "AvaWatz Company IOM.pdf",
  "Form CRS.pdf",
  "Disclosures & Disclaimers.pdf",
  "Additional Risk Disclosures.pdf",
];
const Documents = () => {
  return (
    <div className="mb-8 w-[300px] m-[30px]">
      <h2 className="text-[#666] font-extrabold text-[25px] mb-2 leading-[.92] tracking-[-.03em] mb-4">
        Documents
      </h2>
      <div className="border border-[#eee] rounded-[4px]">
        <div className="border-b border-[#eee] py-[10px] px-4 pb-4 text-[#666] font-normal text-[14px]">
          Capital R (OpenDeal Broker LLC, CRD #291387) is hosting this Reg S
          securities offering by AvaWatz Company.
        </div>
        <div className="border-b border-[#eee] py-[10px] px-4 pb-4 text-[#666] font-normal text-[16px]">
          <div className="text-[14px]">Company documents</div>
          {docs.map((doc, index) => (
            <a
              key={index}
              href="#"
              className="text-[#333] no-underline py-2 px-4 -ml-4 -mr-4 w-full block font-normal mt-1.5"
            >
              <FaFileAlt className="inline-block mr-2" size={25} />
              <span className="ml-1">{doc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
