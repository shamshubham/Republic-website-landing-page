import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161d2d]">
      <div className="w-full mx-auto px-8 max-w-[1170px] pb-16 pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative text-base">
          <div className="p-4">
            <div>
              <img
                src="https://assets.republic.com/assets/logo/full/white/logo-f84869c4f7fd2d0fe2ff22e9a15c82b63809ed42014f19c2a8e3bb455778c6df.svg"
                alt="logo"
              />
            </div>
            <div className="mt-6 mb-6 leading-[1.3] font-normal text-[rgba(255,255,255,0.4)] text-white/40">
              <p>Giving everyone access to early-stage startup investing</p>
            </div>
            <div className="text-[rgba(255,255,255,0.4)]">
              <a href="#" className="inline-block mr-2 text-white/40">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="inline-block mr-2 text-white/40">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="inline-block mr-2 text-white/40">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="inline-block mr-2 text-white/40">
                <FaLinkedin size={25} />
              </a>
              <a href="#" className="inline-block mr-2 text-white/40">
                <FaDiscord size={25} />
              </a>
            </div>
          </div>
          <div className="p-4">
            <div>
              <h2 className="ft-heading">For investors</h2>
            </div>
            <div className="">
              <ul className="leading-[1.7] text-white/70 transition-colors duration-100 ease-in-out list-none pl-0 mb-0">
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Why invest
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    How it works
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    FAQ Risks
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Privacy policy
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="tno-underline break-words text-lg">
                    Accessibility
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Cookie Preferences
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Form CRS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <div>
              <h2 className="ft-heading">For startups</h2>
            </div>
            <div>
              <ul className="leading-[1.7] text-white/70 transition-colors duration-100 ease-in-out list-none pl-0 mb-0">
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Why raise
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    FAQ
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Instruments
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Crowd SAFE
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Tokenized assets
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <div>
              <h2 className="ft-heading">Company</h2>
            </div>
            <div>
              <ul className="leading-[1.7] text-white/70 transition-colors duration-100 ease-in-out list-none pl-0 mb-0">
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    About
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Journal
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Events
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    Contact
                  </a>
                </li>
                <li className="leading-[1.7]">
                  <a href="#" className="no-underline break-words text-lg">
                    We're hiring!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fd-referral">
          <div className="p-6">
            <div>
              <img
                className="inline mr-4"
                src="https://assets.republic.com/assets/layouts/dollar-582d5a155e415013ca316098b15357e5557a7e43a142badb0eede421774a7684.svg"
              />
              <span className="text-[18px] text-white/80">
                Refer a startup, get $2,500
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-[18px] inline mr-10 text-white/60">
              Invest in the app
            </p>
            <a href="#">
              <img
                className="w-[142px] h-[48px] inline mr-4"
                src="https://assets.republic.com/assets/layouts/play-store-0d44180dd0587978e08f2ac3eb53b810461ff33756799fef2981667aee24dd2a.png"
              />
            </a>
            <a href="#">
              <img
                className="w-[142px] h-[48px] inline mr-4"
                src="https://assets.republic.com/assets/layouts/app-store-9101bc9fe34a6cdc55e4436229c0ba5125905ec10aa243ce3346ab6e36e8d5c6.png"
              />
            </a>
          </div>
        </div>
        <div className="border-white/10 text-white/50 pb-[15px] mb-4 border-b border-solid border-b-[1px]">
          <p className="mb-4 text-white/50 text-[13px]">
            This site (the "Site") is owned and maintained by OpenDeal Inc.,
            which is not a registered broker-dealer. OpenDeal Inc. does not give
            investment advice, endorsement, analysis or recommendations with
            respect to any securities. All securities listed here are being
            offered by, and all information included on this Site is the
            responsibility of, the applicable issuer of such securities. The
            intermediary facilitating the offering will be identified in such
            offering’s documentation.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            All funding-portal activities are conducted by OpenDeal Portal LLC
            doing business as Republic, a funding portal which is registered
            with the US Securities and Exchange Commission (SEC) as a funding
            portal (Portal) and is a member of the Financial Industry Regulatory
            Authority (FINRA). OpenDeal Portal LLC is located at 149 E 23rd St
            #1314, New York, NY 10010, please check out background on FINRA’s
            Funding Portal page.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            All broker-dealer related securities activity is conducted by
            OpenDeal Broker LLC, an affiliate of OpenDeal Inc. and OpenDeal
            Portal LLC, and a registered broker-dealer, and member of FINRA |
            SiPC, located at 1345 Avenue of the Americas, 15th Floor, New York,
            NY 10105, please check our background on FINRA’s BrokerCheck.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Certain pages discussing the mechanics and providing educational
            materials regarding regulation crowdfunding offerings may refer to
            OpenDeal Broker LLC and OpenDeal Portal LLC collectively as
            “Republic”, solely for explanatory purposes.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC
            make investment recommendations and no communication, through this
            Site or in any other medium should be construed as a recommendation
            for any security offered on or off this investment platform.
            Investment opportunities posted on this Site are private placements
            of securities that are not publicly traded, involve a high degree of
            risk, may lose value, are subject to holding period requirements and
            are intended for investors who do not need a liquid investment. Past
            performance is not indicative of future results. Investors must be
            able to afford the loss of their entire investment. Only qualified
            investors, which may be restricted to only Accredited Investors or
            non-U.S. persons, may invest in offerings hosted by OpenDeal Broker.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC,
            nor any of their officers, directors, agents and employees makes any
            warranty, express or implied, of any kind whatsoever related to the
            adequacy, accuracy or completeness of any information on this Site
            or the use of information on this site. Offers to sell securities
            can only be made through official offering documents that contain
            important information about the investment and the issuers,
            including risks. Investors should carefully read the offering
            documents. Investors should conduct their own due diligence and are
            encouraged to consult with their tax, legal and financial advisors.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            By accessing the Site and any pages thereof, you agree to be bound
            by the Terms of Use and Privacy Policy. Please also see OpenDeal
            Broker’s Business Continuity Plan and Additional Risk Disclosures.
            All issuers offering securities under regulation crowdfunding as
            hosted by OpenDeal Portal LLC are listed on the All Companies Page.
            The inclusion or exclusion of an issuer on the Platform Page and/or
            Republic’s Homepage, which includes offerings conducted under
            regulation crowdfunding as well as other exemptions from
            registration, is not based upon any endorsement or recommendation by
            OpenDeal Inc, OpenDeal Portal LLC, or OpenDeal Broker LLC, nor any
            of their affiliates, officers, directors, agents, and employees.
            Rather, issuers of securities may, in their sole discretion, opt-out
            of being listed on the Platform Page and Homepage.
          </p>
          <p className="mb-4 text-white/50 text-[13px] text-center font-medium px-6 mb-4 py-4">
            Investors should verify any issuer information they consider
            important before making an investment.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Investments in private companies are particularly risky and may
            result in total loss of invested capital. Past performance of a
            security or a company does not guarantee future results or returns.
            Only investors who understand the risks of early stage investment
            and who meet the Republic's investment criteria may invest.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC
            verify information provided by companies on this Site and makes no
            assurance as to the completeness or accuracy of any such
            information. Additional information about companies fundraising on
            the Site can be found by searching the EDGAR database, or the
            offering documentation located on the Site when the offering does
            not require an EDGAR filing.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            To help the government fight the funding of terrorism and money
            laundering activities, Federal law requires all financial
            institutions to obtain, verify, and record information that
            identifies each person who opens an account. Therefore, when you use
            the Services we will ask for your name, address, date of birth, and
            other information that will allow us to identify you. We may also
            ask to see your driver's license, passport or other identifying
            documents.
          </p>
          <p className="mb-4 text-white/50 text-[13px]">
            Republic and its affiliates are not and do not operate or act as a
            bank. Certain banking services are provided by BankProv, member FDIC
            / member DIF. Digital (crypto) assets and investment products are
            not insured by the FDIC, may lose value, and are not deposits or
            other obligations of BankProv and are not guaranteed by BankProv.
            Terms and conditions apply.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <p className="text-white/50 text-[13px]">Made in SF/NYC</p>
          </div>
          <div className="flex justify-end">
            <img src="https://assets.republic.com/assets/layouts/credit_cards-fb323581910488f0885fc63613e42a2d07ebc908e0af4df4ed139ed8cb3254fc.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
