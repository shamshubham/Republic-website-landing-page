const perks = [
  {
    id: 1,
    amount: "$20,000",
    bonus: "5% Additional Bonus Share",
  },
  {
    id: 2,
    amount: "$50,000",
    bonus: "10% Additional Bonus Share",
  },
  {
    id: 3,
    amount: "$100,000",
    bonus: "15% Additional Bonus Share",
  },
  {
    id: 4,
    amount: "$250,000",
    bonus: "25% Additional Bonus Share",
  },
];
const BonusPerks = () => {
  return (
    <div className="mb-8 w-[300px] m-[30px]">
      <h2 className="text-[#666] font-extrabold text-[25px] mb-2 leading-[.92] tracking-[-.03em]">
        Bonus Perks
      </h2>
      <div className="text-[#666] font-normal text-[16px] mb-4">
        In addition to your shares, you'll receive perks for investing in
        Avawatz.
      </div>
      <div className="border border-[#eee] rounded-[4px]">
        {perks.map((perk) => (
          <div
            className="border-b border-[#eee] py-[10px] px-4 pb-4 text-[#666] font-normal text-[16px]"
            key={perk.id}
          >
            <div>
              <div className="mb-6">
                <div className="mb-1.5 font-semibold text-[16px]">Invest</div>
                <div className="text-[#0049ff] leading-[1] text-[35px]">
                  {perk.amount}
                </div>
              </div>
              <div>
                <div className="mb-1.5 font-semibold text-[16px]">Receive</div>
                <ul className="list-disc mb-0 pl-3">
                  <li>{perk.bonus}</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-[#222] bg-white shadow-inner border border-[#e0e0e0] inline-block appearance-none font-semibold tracking-normal text-center no-underline cursor-pointer border-none bg-center transition-colors transition-border transition-shadow transition-colors duration-100 ease-in-out py-[10px] px-6 rounded-[4px] text-[16px] invest-btn"
              >
                Invest {perk.amount}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusPerks;
