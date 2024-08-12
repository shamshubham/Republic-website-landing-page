import BonusPerks from "../components/BonusPerks";
import DealTerms from "../components/DealTerms";
import Documents from "../components/Documents";

const Pitch = () => {
  return (
    <div>
      <div className="flex">
        {/* For left side HTML */}
        <div className="w-3/4">
          {/* Investment summary */}
          <div className="bg-white p-6">
            <h2 className="text-2xl font-extrabold text-gray-500 mb-3">
              Investment Summary
            </h2>
            <hr className="w-14 border-gray-200 mt-3 border-0.1" />
            <div>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li className="text-black-500">
                  $4.5M+ funding raised, including $2.3M+ R&amp;D funding from
                  US Defense
                </li>
                <li className="text-black-500">
                  The US Air Force and Army are using our technology
                </li>
                <li className="text-black-500">
                  Beta launch of GENIE: Key to Precision &amp; Efficiency in
                  AI/ML Model Training
                </li>
                <li className="text-black-500">
                  Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams
                </li>
                <li className="text-black-500">
                  The current Sales Pipeline is over $16M
                </li>
                <li className="text-black-500">
                  The AI market is predicted to reach $1.07 Trillion by 2027
                </li>
                <li className="text-black-500">
                  The global Robotic market is predicted to reach $141B by 2027
                </li>
              </ul>
            </div>
          </div>

          {/* The Artile below Investment summary */}
          <article className="py-12 space-y-2">
            <section className="py-12 mb-4" id="custom">
              <div className="clearfix text-center">
                <div>
                  <p className="text-sm italic mb-6">
                    OpenDeal Broker LLC charges you a two percent (2%)
                    administrative fee on the gross principal transaction with a
                    minimum fee of $5 and a maximum of $300. The fee is added to
                    the total amount of your investment at checkout.
                  </p>
                  <p className="text-sm italic mb-6">
                    Past financial results are no guarantee of future
                    performance.
                    <a
                      href="https://republic.com/help/forward-looking-financial-projections-disclaimer-bda22d32-4ea8-4f51-8920-2d89729e29c8"
                      rel="nofollow"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Click here for important information regarding Financial
                      Projections
                    </a>{" "}
                    which are not guaranteed.
                  </p>
                  <p className="text-sm italic mb-6">
                    Investments in private companies are particularly risky and
                    may result in total loss of invested capital.
                  </p>
                  <p className="text-sm italic mb-6">
                    <a
                      href="https://republic.co/risks"
                      rel="nofollow"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Risks of early stage investment
                    </a>
                    . Not an offer to buy or sell securities. This is a
                    long-term speculative illiquid investment. Investment is not
                    FDIC or SiPC insured.
                  </p>
                  <p className="text-sm italic">
                    There may be other available opportunities that are similar
                    to this investment but have different{" "}
                    <span className="read-more">
                      …
                      <a href="#" className="text-blue-500 hover:text-blue-700">
                        Read more
                      </a>
                    </span>
                  </p>
                </div>
                <div className="hidden">
                  <p className="text-sm italic">
                    OpenDeal Broker LLC charges you a two percent (2%)
                    administrative fee on the gross principal transaction with a
                    minimum fee of $5 and a maximum of $300. The fee is added to
                    the total amount of your investment at checkout.
                  </p>
                  <p className="text-sm italic">
                    Past financial results are no guarantee of future
                    performance.
                    <a
                      href="https://republic.com/help/forward-looking-financial-projections-disclaimer-bda22d32-4ea8-4f51-8920-2d89729e29c8"
                      rel="nofollow"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Click here for important information regarding Financial
                      Projections
                    </a>{" "}
                    which are not guaranteed.
                  </p>
                  <p className="text-sm italic">
                    Investments in private companies are particularly risky and
                    may result in total loss of invested capital.
                  </p>
                  <p className="text-sm italic">
                    <a
                      href="https://republic.co/risks"
                      rel="nofollow"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Risks of early stage investment
                    </a>
                    . Not an offer to buy or sell securities. This is a
                    long-term speculative illiquid investment. Investment is not
                    FDIC or SiPC insured.
                  </p>
                  <p className="text-sm italic">
                    There may be other available opportunities that are similar
                    to this investment but have different attributes,
                    characteristics, cost factors, and fees.
                  </p>
                  <p className="text-sm italic">
                    <a
                      href="https://republic.com/help/forward-looking-financial-projections-disclaimer-31098212479"
                      target="_blank"
                      rel="nofollow"
                    >
                      <img
                        src="https://lh7-us.googleusercontent.com/Svi1opUPvq7ultL1IjAhw-MEjGCfuPZMBe0OD_ToTyJ_CcmAzt_LGjyvNwNG3XTDuIlUY6YJFktzZD1s2JWS0NDHdT4vo9pPpoIaKsHYx04z0Pb5GljgwLKubdiQokz8yk8C2KZswBVFe10VNUmnyi0"
                        className="inline-block"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 mb-4" id="pitch">
              <header>
                <h2 className="text-2xl font-extrabold text-gray-600 mb-4">
                  Pitch
                </h2>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-4" />
              </header>
              <div className="flex">
                <div>
                  <h3 className="text-2xl font-bold text-gray-600">
                    AvaWatz: Unlocking the Power of AI Robotics
                  </h3>
                  <br />
                  <p className="text-2xl text-gray-600">
                    At AvaWatz, we aim to unlock the true potential of robotics
                    with our trusted AI platform. Our AI empowers robots to work
                    together like teammates in harsh, unpredictable
                    environments, freeing humans from danger and high-risk
                    tasks. We aim to make robots smarter and safer, boosting
                    efficiency and keeping humans out of harm's way. Think
                    advanced AI for robotics that tackles inspections,
                    maintenance, and more, all delivered through our easy-to-use
                    platform.
                  </p>
                  <p>
                    <img
                      src="https://uploads.republic.com/p/images/attachments/original/000/117/816/117816-1706917520-5d2b172ad3b931c2bce2d919031d65ad9f8dbb81.png"
                      className="inline-block"
                    />
                  </p>
                  <h3 className="text-2xl font-extrabold text-gray-600 mt-6">
                    Transforming Robots Into Cooperative Teams with Trusted AI
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mt-3 pl-5">
                    <li className="text-2xl text-black-200 flex-center justify-content">
                      `Share information and make joint decisions: Robots
                      analyze data, assess situations, and adapt their actions
                      like a cohesive unit.`
                    </li>
                    <li className="text-2xl text-black-200 flex-center justify-content">
                      Handle the hard stuff: From hazardous inspections to
                      disaster...
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-2xl mb-4" id="leadership">
              <header>
                <h2 className="text-2xl text-gray-600 mb-4 font-extrabold">
                  Leadership
                </h2>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-4" />
              </header>
              <div className="flex items-start">
                <div className="js-pitch_content_summary">
                  <h3 className="font-bold text-gray-600">
                    Meet the Minds Behind AvaWatz: A Team Built for AI Robotics
                    Brilliance
                  </h3>
                  <p>
                    <img
                      src="https://uploads.republic.com/p/images/attachments/original/000/129/468/129468-1713375773-c656b2263c540b9a75a0b6a227271fedd6389d99.jpg"
                      alt="AvaWatz Team"
                      className="pl-2 mb-4"
                    />
                  </p>
                  <p className="mb-8 text-black-200">
                    AvaWatz isn't just about the future of robotics. It's about
                    the visionary minds making that future a reality. Led by a
                    diverse group of seasoned innovators, entrepreneurs, and AI
                    experts, this team possesses the firepower to revolutionize
                    collaborative robots.
                  </p>
                  <p className="mb-8">
                    <strong className="text-gray-600">
                      Dr. Rajini Anachi, Founder &amp; CEO
                    </strong>
                    : A serial innovator in AI and robotics, Rajini has
                    conquered challenges across industries, from defense to
                    mining to cybersecurity. With a passion for empowering
                    robots to work like teams, her vision is to redefine safety
                    and efficiency with intelligent collaboration.
                  </p>
                  <p>
                    <strong className="text-gray-600">
                      Bala Jana, Co-Founder &amp; Board Member
                    </strong>
                    : A seasoned investor and veteran of start-up success, Bala
                    brings a track
                    <span className="read-more">
                      …
                      <a href="#" className="text-blue-500">
                        Read more
                      </a>
                    </span>
                  </p>
                </div>
                <div className="js-pitch_content_details hidden">
                  <h3 className="font-bold">
                    Meet the Minds Behind AvaWatz: A Team Built for AI Robotics
                    Brilliance
                  </h3>
                  <p>
                    <img
                      src="https://uploads.republic.com/p/images/attachments/original/000/129/468/129468-1713375773-c656b2263c540b9a75a0b6a227271fedd6389d99.jpg"
                      alt="AvaWatz Team"
                      className="mx-auto mb-4"
                    />
                  </p>
                  <p>
                    AvaWatz isn't just about the future of robotics. It's about
                    the visionary minds making that future a reality. Led by a
                    diverse group of seasoned innovators, entrepreneurs, and AI
                    experts, this team possesses the firepower to revolutionize
                    collaborative robots.
                  </p>
                  <p>
                    <strong>Dr. Rajini Anachi, Founder &amp; CEO</strong>: A
                    serial innovator in AI and robotics, Rajini has conquered
                    challenges across industries, from defense to mining to
                    cybersecurity. With a passion for empowering robots to work
                    like teams, her vision is to redefine safety and efficiency
                    with intelligent collaboration.
                  </p>
                  <p>
                    <strong>Bala Jana, Co-Founder &amp; Board Member</strong>: A
                    seasoned investor and veteran of start-up success, Bala
                    brings a track record of driving product innovation and
                    market fit. His expertise ensures AvaWatz delivers solutions
                    that resonate, paving the way for rapid growth.
                  </p>
                  <p>
                    <strong>J.R. May, Business Development &amp; Sales</strong>:
                    With a proven record of success in both DoD and commercial
                    sales, J.R. boasts an extensive network that fuels AvaWatz's
                    market reach. His leadership translates into direct sales,
                    strategic partnerships, and rapid scaling.
                  </p>
                  <p>
                    <strong>Dr. Rishabh Iyer, AI Researcher</strong>: As an
                    Assistant Professor at UT Dallas, Dr. Iyer brings academic
                    rigor and cutting-edge research to AvaWatz. His expertise in
                    efficient machine learning and optimization ensures the AI
                    powering AvaWatz robots is always at the forefront.
                  </p>
                  <p>
                    Our dynamic team embodies the spirit of AvaWatz: driven,
                    innovative, and dedicated to pushing the boundaries of
                    what's possible. With our combined expertise and passion, we
                    feel we're on track to unleash a paradigm shift in AI
                    robotics, paving the way for a safer, more efficient future
                    for all.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-12 mb-8" id="opportunity">
              <header>
                <h1 className="text-2xl font-extrabold text-gray-600 mb-3">
                  Opportunity
                </h1>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-3" />
              </header>
              <div className="js-pitch_content_summary">
                <div>
                  <h2 className="text-2xl font-bold text-gray-600 mb-4">
                    Unleash the Power of Collaborative Robots
                  </h2>
                  <p className="text-gray-600 mb-3 ">
                    Today, countless "dirty, dull, and dangerous" tasks still
                    fall on human shoulders. Hazardous inspections, disaster
                    response, and infrastructure maintenance—these crucial but
                    risky jobs put lives at stake and limit productivity. While
                    robots excel at specific tasks, they often struggle to
                    cooperate in unstructured environments. Changing weather,
                    shifting terrain, and unpredictable conditions can throw
                    traditional robots off balance.
                  </p>
                  <p className="text-gray-600 mb-3">
                    AvaWatz provides a solution with our leading-edge AI
                    platform that equips robots with the ability to communicate,
                    strategize, and adapt on the fly. Robots powered by our
                    trusted AI can share data and insights in real-time,
                    participate in joint decision-making efforts,
                    <span className="read-more">
                      …
                      <a href="#" className="text-blue-500">
                        Read more
                      </a>
                    </span>
                  </p>
                </div>
                <div className="js-pitch_content_details hidden">
                  <h3 className="font-bold">
                    Unleash the Power of Collaborative Robots
                  </h3>
                  <p>
                    Today, countless "dirty, dull, and dangerous" tasks still
                    fall on human shoulders. Hazardous inspections, disaster
                    response, and infrastructure maintenance—these crucial but
                    risky jobs put lives at stake and limit productivity. While
                    robots excel at specific tasks, they often struggle to
                    cooperate in unstructured environments. Changing weather,
                    shifting terrain, and unpredictable conditions can throw
                    traditional robots off balance.
                  </p>
                  <p>
                    <img
                      src="https://lh7-us.googleusercontent.com/Tcm_tisMQ5c3QOd6nQnnHkg0-zFFU4CThf5nzyLCR6YAdbvbT5a7bxOI9xpeiAvq8CXPke_DGHd6gJ_gvrOJqNJFlNpuW5I_7Dvk6c27OJoOD1iKBHI4IS0uMda3zcx2gBMOaGO30NLrFexoPruiEuk"
                      alt="Collaborative Robots"
                      className="float-left mr-4 mb-4"
                    />
                  </p>
                  <p>
                    AvaWatz provides a solution with our leading-edge AI
                    platform that equips robots with the ability to communicate,
                    strategize, and adapt on the fly. Robots powered by our
                    trusted AI can share data and insights in real-time,
                    participate in joint decision-making efforts, coordinate
                    their actions seamlessly, and adjust to changing conditions.
                  </p>
                  <p>
                    This means that robots can take on the hard stuff while
                    humans stay safe and focus on higher-level tasks. No more
                    sending engineers into perilous pipelines. No more putting
                    first responders in harm's way. With AvaWatz, robots can
                    collaborate and solve problems, boosting safety and
                    efficiency across industries.
                  </p>
                  <p>
                    <img
                      src="https://lh7-us.googleusercontent.com/Bnib7ZxGXi6tlgiXMhzWHg5APhYs9tsXbfWyNeDdxlwEFp4bIMchD92wZAQ656aOekFfy8RhSWqujDyLrytR2yuT9VgjvqDY0dIH4YzYfZvpbf8kXutK9PYCYYjCU3vcTc5g5P6GMzcLUwsn1f2gT5o"
                      alt="Collaborative Robots"
                      className="float-left mr-4 mb-4"
                    />
                  </p>
                  <p>
                    At AvaWatz, we're creating an AI platform for perceiving the
                    world, sharing information with robot and human teammates,
                    making consensus-based decisions, and acting to accomplish
                    shared goals. It's the same cooperative process humans have
                    used to complete every task since the beginning of time, and
                    by doing the same for robots, we aim to usher in a new era.
                  </p>
                  <p>
                    <img
                      src="https://lh7-us.googleusercontent.com/6X-ooNMXSsW4C01vRQbIZW8ej1pE0gGH_JHdb5tzjaRSRPenk-UZGmGeHWSEnNrXKtSn2OuwJEZJOvImkwPX5Cb4ni7RwhPx7xQPnimyy-aSDmuQMw06H_RVHhmed26vqohyZQIWfmz4WrzFt4kALQY"
                      alt="Collaborative Robots"
                      className="float-left mr-4 mb-4"
                    />
                  </p>
                  <p className="font-bold">
                    Potential of AvaWatz Trusted AI Robotics Platform:
                  </p>
                  <ul className="list-disc ml-5">
                    <li>
                      Companies can create robots for specific tasks, like
                      inspecting pipelines in the dark or exploring dangerous
                      environments.
                    </li>
                    <li>
                      Researchers can develop even more advanced AI algorithms
                      for robotics applications.
                    </li>
                    <li>
                      With AvaWatz Trusted AI platform, the future of robotics
                      is wide open, with nearly endless possibilities for how
                      they can help us in the real world.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="pt-12 mb-8" id="market-traction">
              <header>
                <h2 className="text-2xl text-gray-600 mb-6 font-extrabold mb-3">
                  Market &amp; Traction
                </h2>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-3" />
              </header>
              <div className="flex">
                <div>
                  <h3 className="text-2x1 font-bold text-gray-600">
                    A $1.2 Trillion Opportunity: AvaWatz Takes on the Future of
                    AI Robotics
                  </h3>
                  <p className="mb-3">
                    AvaWatz is tapping into a massive $1.2 Trillion combined
                    market hungry for exactly what it offers: collaborative
                    robotic solutions.
                  </p>
                  <p>
                    <img
                      src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"
                      alt="Market Opportunity"
                      className="float-left h-60% w-75% mr-4 mb-4"
                    />
                  </p>
                  <p className="mb-1 text-2x1">
                    Here's why this opportunity is bigger than robots:
                  </p>
                  <ul className="list-disc ml-5">
                    <li>
                      <p>
                        The Global AI Market is Booming: Projected to reach
                        $1.07 Trillion by 2027, AI is fueling the demand for
                        smarter, more sophisticated solutions. (
                        <a
                          href="https://www.precedenceresearch.com/artificial-intelligence-market"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                    <li>
                      <p>
                        Robots are Teaming Up: The need for autonomous mobile
                        robots and intelligent collaboration is exploding across
                        industries, from smart airports to infrastructure
                        maintenance, expected to collectively reach $634 billion
                        by 2026. (
                        <a
                          href="https://www.grandviewresearch.com/press-release/global-smart-airports-market#:~:text=The%20global%20smart%20airport%20market%C2%A0size%20is%20expected%20to%20reach%20USD%2025.09%20billion%20by%202025"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://www.prnewswire.com/news-releases/global-634-billion-transit-and-ground-passenger-transport-market-to-2025-with-long-term-forecast-to-2030-301335582.html#:~:text=The%20market%20is%20expected%20to%20reach%20%24634.99%20billion%20in%202025%20at%20a%20CAGR%20of%208%25."
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                    <li>
                      <p>
                        The robotics market is experiencing unprecedented growth
                        propelled by a surge in investments coupled with the
                        widespread adoption of service robots globally and
                        escalating demand for industrial robots. This momentum
                        is anticipated to propel the market to reach a
                        staggering $141 billion by the year 2027. (
                        <a
                          href="https://www.precedenceresearch.com/robotics-technology-market"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                  </ul>
                  <span className="read-more">
                    …{" "}
                    <a href="#" className="text-blue-500">
                      Read more
                    </a>
                  </span>
                </div>
                <div className="js-pitch_content_details hidden">
                  <h3 className="font-bold">
                    A $1.2 Trillion Opportunity: AvaWatz Takes on the Future of
                    AI Robotics
                  </h3>
                  <p>
                    AvaWatz is tapping into a massive $1.2 Trillion combined
                    market hungry for exactly what it offers: collaborative
                    robotic solutions.
                  </p>
                  <p>
                    <img
                      src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"
                      alt="Market Opportunity"
                      className="float-left mr-4 mb-4"
                    />
                  </p>
                  <p>Here's why this opportunity is bigger than robots:</p>
                  <ul className="list-disc ml-5">
                    <li>
                      <p>
                        The Global AI Market is Booming: Projected to reach
                        $1.07 Trillion by 2027, AI is fueling the demand for
                        smarter, more sophisticated solutions. (
                        <a
                          href="https://www.precedenceresearch.com/artificial-intelligence-market"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                    <li>
                      <p>
                        Robots are Teaming Up: The need for autonomous mobile
                        robots and intelligent collaboration is exploding across
                        industries, from smart airports to infrastructure
                        maintenance, expected to collectively reach $634 billion
                        by 2026. (
                        <a
                          href="https://www.grandviewresearch.com/press-release/global-smart-airports-market#:~:text=The%20global%20smart%20airport%20market%C2%A0size%20is%20expected%20to%20reach%20USD%2025.09%20billion%20by%202025"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>{" "}
                        |{" "}
                        <a
                          href="https://www.prnewswire.com/news-releases/global-634-billion-transit-and-ground-passenger-transport-market-to-2025-with-long-term-forecast-to-2030-301335582.html#:~:text=The%20market%20is%20expected%20to%20reach%20%24634.99%20billion%20in%202025%20at%20a%20CAGR%20of%208%25."
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                    <li>
                      <p>
                        The robotics market is experiencing unprecedented growth
                        propelled by a surge in investments coupled with the
                        widespread adoption of service robots globally and
                        escalating demand for industrial robots. This momentum
                        is anticipated to propel the market to reach a
                        staggering $141 billion by the year 2027. (
                        <a
                          href="https://www.precedenceresearch.com/robotics-technology-market"
                          rel="nofollow"
                          className="text-blue-500"
                        >
                          Source
                        </a>
                        )
                      </p>
                    </li>
                  </ul>
                  <p>
                    Our leading-edge Trusted AI platform empowers robots to work
                    together in harsh environments, from hazardous material
                    tracking to infrastructure maintenance, all while keeping
                    humans safe. AvaWatz sits at the intersection of these
                    trends, addressing a combined $1.2 trillion market ready for
                    innovation.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="js-pitch_section pt-12 mb-8"
              id="business-model"
            >
              <header>
                <h2 className="text-2xl text-gray-600 mb-3 font-extrabold">
                  Business model
                </h2>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-3" />
              </header>
              <div className="text-2x1">
                <p>
                  The company’s business model consists of subscription services
                  (SaaS) with Service Level (SL) focused on three areas of
                  market verticals: Inspection &amp; Maintenance, Surveillance,
                  and Early Warning for Safety. The airfield flight line
                  operation is one of the solutions under the Inspection &amp;
                  Maintenance track. Our services can potentially benefit
                  commercial markets, both the private sector and the US
                  military. The contract duration is from 1 year to 5 years
                  long.
                </p>
              </div>
            </section>

            <section className="js-pitch_section pt-12 mb-8" id="competition">
              <header>
                <h2 className="text-2xl text-gray-600 mb-3 font-extrabold">
                  Competition
                </h2>
                <hr className="w-14 border-gray-200 mt-2 border-0.1 mb-3" />
              </header>
              <div className="js-pitch_content clearfix">
                <div className="js-pitch_content_summary">
                  <p className="mb-3 text-2xl ">
                    AvaWatz is in the service robots industry. The International
                    Organization for Standardization defines a “service robot”
                    as a robot “that performs useful tasks for humans or
                    equipment excluding industrial automation applications.”
                  </p>
                  <p className="mb-3 text-2xl">
                    Service robots typically perform tedious, tiring, or
                    dangerous tasks for humans. Indirect competitors in this
                    industry are Locus Robotics, InVia Robotics in warehouse
                    operation, Badger Technologies in retail inventory, and
                    Savioke for indoor delivery-hospitality. There are drone
                    manufacturers such as DJI, Parrot, Skydio, and ground robot
                    manufacturers such as Boston Dynamics who would be better
                    partners than competitors.
                  </p>
                  <p className="mb-3 text-2xl">
                    AvaWatz started out to build robotics for airfield
                    flightline operations, and we realized that
                    <span className="read-more">
                      …{" "}
                      <a href="#" className="text-blue-500">
                        Read more
                      </a>
                    </span>
                  </p>
                </div>
                <div className="js-pitch_content_details hidden">
                  <p>
                    AvaWatz is in the service robots industry. The International
                    Organization for Standardization defines a “service robot”
                    as a robot “that performs useful tasks for humans or
                    equipment excluding industrial automation applications.”
                  </p>
                  <p>
                    Service robots typically perform tedious, tiring, or
                    dangerous tasks for humans. Indirect competitors in this
                    industry are Locus Robotics, InVia Robotics in warehouse
                    operation, Badger Technologies in retail inventory, and
                    Savioke for indoor delivery-hospitality. There are drone
                    manufacturers such as DJI, Parrot, Skydio, and ground robot
                    manufacturers such as Boston Dynamics who would be better
                    partners than competitors.
                  </p>
                  <p>
                    AvaWatz started out to build robotics for airfield
                    flightline operations, and we realized that we could solve
                    the customer’s problem better and more completely by using
                    robots that work together to do different parts of the task,
                    with some robots optimized for finding debris and others
                    optimized for disposing of the debris. This focus on
                    building teams of robots with different capabilities to
                    perform complex tasks is what sets us apart from others in
                    the industry.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-12 mb-8" id="summary">
              <header className="mb-10">
                <h2 className="text-2xl text-gray-600 mb-3 font-extrabold">
                  Summary
                </h2>
                <hr className="w-14 border-gray-200 border-0.1 mb-3" />
              </header>
              <div className="flex justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://uploads.republic.com/p/videos/attachments/original/000/004/233/4233-1708099267-96f54db3e02f1a2f579c7b629e605860889311c3.mp4"
                  className="w-90 h-[1095.48px]"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </section>

            <section className="pt-12 mb-8" id="disclaimers">
              <header>
                <h2 className="text-2xl text-gray-600 mb-3 font-extrabold">
                  Disclaimers
                </h2>
                <hr className="w-14 border-gray-200 border-0.1 mb-3" />
              </header>
              <div className="mt-4">
                <div className="text-base">
                  <p>
                    Certain information set forth in this presentation contains
                    “forward-looking information”, including “future-oriented
                    financial information” and “financial outlook”, under
                    applicable securities laws (collectively referred to herein
                    as forward-looking statements). Except for statements of
                    historical fact, the information contained herein
                    constitutes forward-looking statements and includes, but is
                    not limited to, the (i) projected financial performance of
                    the Company; (ii) completion of, and the use of proceeds
                    from, the sale of the shares being offered hereunder; (iii)
                    the expected development of the Company’s business,
                    projects, and joint ventures; (iv) execution of the
                    Company’s vision and growth strategy, including with respect
                    to future
                  </p>
                </div>
              </div>
            </section>
          </article>
          {/* Last above about avawatz */}
          <hr className="w-100% border-gray-200 border-0.1 mb-3" />
          <div className="bg-white p-6" data-rc="offerings/show/invest_section">
            <form
              className="space-y-4 flex-center justify-content"
              action="/avawatz/invest"
              acceptCharset="UTF-8"
              method="get"
            >
              <input name="utf8" type="hidden" value="✓" autoComplete="off" />
              <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
                <div className="col-span-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-lg text-gray-500">
                      $
                    </div>
                    <input
                      autoComplete="false"
                      className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                      placeholder="2,500 min."
                      type="text"
                      name="investment[amount]"
                      id="investment_amount"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <button
                    name="button"
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-sm text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Invest in Avawatz
                  </button>
                </div>
              </div>
            </form>
          </div>

          <hr />
        </div>
        {/* For right side HTML */}
        <div className="w-1/4">
          <DealTerms></DealTerms>
          <Documents></Documents>
          <BonusPerks></BonusPerks>
        </div>
      </div>
      {/* From About avawatz */}
      <div>
        <div>
          {/* About avawatz */}
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-gray-600 font-extrabold">
                About Avawatz
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400">Legal Name</div>
                  <div className="text-xl text-gray-800">AvaWatz Company</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400">Founded</div>
                  <div className="text-xl text-gray-800">Feb 2019</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400">Form</div>
                  <div className="text-xl text-gray-800">Texas Corporation</div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400">Employees</div>
                  <div className="text-xl text-gray-800">17</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400">Website</div>
                  <div className="text-xl text-gray-800">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://avawatz.com"
                      className="text-blue-500 hover:underline"
                    >
                      avawatz.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-medium text-gray-400">Social Media</div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      href="https://twitter.com/Avawatz_Co"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      href="https://www.instagram.com/avawatz_company/"
                      className="text-pink-400 hover:text-pink-600"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Linkedin"
                      href="https://www.linkedin.com/company/avawatz/"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                      href="https://www.facebook.com/Avawatz-104116278846445"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Youtube"
                      href="https://www.youtube.com/@avawatz_company"
                      className="text-red-600 hover:text-red-800"
                    >
                      <i className="fab fa-youtube fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Tiktok"
                      href="https://www.tiktok.com/@avawatz"
                      className="text-black hover:text-gray-700"
                    >
                      <i className="fab fa-tiktok fa-2x"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Medium"
                      href="https://medium.com/@avawatz"
                      className="text-black hover:text-gray-700"
                    >
                      <i className="fab fa-medium fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Column */}
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="font-medium text-gray-400 mb-2">
                    Headquarters
                  </div>
                  <div className="text-xl text-gray-800 position: relative">
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113903.19291331046!2d75.87758079999999!3d26.8566528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723392476447!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", height: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1px",
                        left: "0px",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        padding: "1px",
                        borderRadius: "0px",
                        color: "#fff",
                        width: "100%",
                        zIndex: 10,
                      }}
                      className="text-xs"
                    >
                      3662 West Camp Wisdom Road Suite 2044, Dallas, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-20"></hr>
          </div>

          {/* Avawatz team */}
          <div>
            <section
              id="team"
              className="js-section offerings-show__section py-12"
            >
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="mb-4">
                    <div className="text-gray-600 text-2xl font-semibold">
                      Avawatz Team
                    </div>
                    <div className="text-gray-500 text-base font-light mt-2">
                      Everyone helping build Avawatz, not limited to employees
                    </div>
                  </h2>
                  <hr className="w-24 mx-auto border-b-2 border-blue-500 mt-2" />
                </div>
                <div
                  className="offerings-show-team_section"
                  data-rc="offerings/show/team_section"
                >
                  <div
                    className="js-sort_data"
                    data-featured-placeholder-klass="offerings-show-team_section__featured_team_member mb-4 border border-gray-300"
                    data-placeholder-klass="offerings-show-team_section__team_member mb-4 border border-gray-300"
                  ></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="team-member">
                      <div className="text-center">
                        <div className="avatar avatar--large offerings-show-team_section__avatar_header mb-6">
                          <img
                            alt="Profile picture of Rajini Anachi"
                            title="Rajini Anachi"
                            src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/019/586/19586-1708105097-b598900ea74dd0b98c591810d26b3bdc0e1c0665.jpg"
                            className="rounded-md w-32 h-32 object-cover mx-auto"
                          />
                        </div>
                        <div className="text-xl font-semibold">
                          Rajini Anachi
                        </div>
                        <div className="font-light text-lg text-gray-700 mt-2">
                          Founder
                        </div>
                        <div className="text-sm font-light mt-4 leading-relaxed px-2">
                          2x founder, previously founded CyGlass, which was
                          acquired by Nominet in 2020. Focused on bringing
                          tremendous value to AvaWatz customers, employees, and
                          investors.
                        </div>
                        <div className="mt-4">
                          <a
                            target="_blank"
                            className="text-blue-500 hover:underline"
                            href="https://www.linkedin.com/in/rajini-anachi/"
                          >
                            <i className="icon-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <div className="text-center">
                        <div className="avatar avatar--large offerings-show-team_section__avatar_header mb-6">
                          <img
                            alt="Profile picture of Bala Jana"
                            title="Bala Jana"
                            src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/313/20313-1707608322-2e202f3e82387bd8b0fa4b7cad6a47e105918f87.JPG"
                            className="rounded-md w-32 h-32 object-cover mx-auto"
                          />
                        </div>
                        <div className="text-xl font-semibold">Bala Jana</div>
                        <div className="font-light text-lg text-gray-700 mt-2">
                          Co-Founder, Board Member
                        </div>
                        <div className="text-sm font-light mt-4 leading-relaxed px-2">
                          Investor and early team member at several start-ups
                          acquired by Fortune 500 companies. Leading product
                          innovation, commercialization, and product-market fit.
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <div className="text-center">
                        <div className="avatar avatar--large offerings-show-team_section__avatar_header mb-6">
                          <img
                            alt="Profile picture of Bala Jana"
                            title="Bala Jana"
                            src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/550/20550-1708105159-42f8a94e3b29f36dfac66621550b29c71e8f6ac4.jpg"
                            className="rounded-md w-32 h-32 object-cover mx-auto"
                          />
                        </div>
                        <div className="text-xl font-semibold">JR May</div>
                        <div className="font-light text-lg text-gray-700 mt-2">
                          Business Development & Sales
                        </div>
                        <div className="text-sm font-light mt-4 leading-relaxed px-2">
                          Proven expertise in DoD and commercial sales. Brings
                          an extensive network of connections for direct sales,
                          partnerships, and rapidly scaling for growth.
                          Previously led business development at mZeal/Cyglass
                          (acquired by Nominet in 2020)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-12">
                    <a
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md"
                      href="#"
                    >
                      5 more team members
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Press */}
          <div className="container mx-auto max-w-screen-xl px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-gray-600 text-2xl font-extrabold">Press</h2>
              <hr className="w-12 mx-auto border-b-2 border-blue-500 mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://finance.yahoo.com/news/avawatz-patents-falcon-trust-assessment-125100328.html"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96."
                        alt="Yahoo Finance"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        AvaWatz Patents FALCON, A New Trust Assessment and
                        Auto-C...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Yahoo Finance</span>
                        <span className="text-gray-400">·</span>
                        <span>Sep 12, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        AvaWatz Company ("AvaWatz"), a technology company that
                        supports collaboration among robots, is pleased to
                        announce the fi...
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.benzinga.com/startups/23/05/32519263/the-startup-pioneering-the-all-robot-workforce-with-colloborative-drones-and-robots"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/137/41137-1708026267-b8b25c8947d0e72efc2831187ba286421ede46d6."
                        alt="Benzinga"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        The Startup Pioneering The All-Robot Workforce With
                        Colla...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Benzinga</span>
                        <span className="text-gray-400">·</span>
                        <span>May 22, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        On the surface, everything about AvaWatz sounds like
                        something out of a science fiction movie. Through the
                        use of decisio...
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://finance.yahoo.com/news/avawatz-patents-falcon-trust-assessment-125100328.html"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96."
                        alt="Yahoo Finance"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        AvaWatz Patents FALCON, A New Trust Assessment and
                        Auto-C...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Yahoo Finance</span>
                        <span className="text-gray-400">·</span>
                        <span>Sep 12, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        AvaWatz Company ("AvaWatz"), a technology company that
                        supports collaboration among robots, is pleased to
                        announce the fi...
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://finance.yahoo.com/news/avawatz-patents-falcon-trust-assessment-125100328.html"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96."
                        alt="Yahoo Finance"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        AvaWatz Patents FALCON, A New Trust Assessment and
                        Auto-C...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Yahoo Finance</span>
                        <span className="text-gray-400">·</span>
                        <span>Sep 12, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        AvaWatz Company ("AvaWatz"), a technology company that
                        supports collaboration among robots, is pleased to
                        announce the fi...
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://finance.yahoo.com/news/avawatz-patents-falcon-trust-assessment-125100328.html"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96."
                        alt="Yahoo Finance"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        AvaWatz Patents FALCON, A New Trust Assessment and
                        Auto-C...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Yahoo Finance</span>
                        <span className="text-gray-400">·</span>
                        <span>Sep 12, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        AvaWatz Company ("AvaWatz"), a technology company that
                        supports collaboration among robots, is pleased to
                        announce the fi...
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://finance.yahoo.com/news/avawatz-patents-falcon-trust-assessment-125100328.html"
                  className="block hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96."
                        alt="Yahoo Finance"
                        className="h-6"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">
                        AvaWatz Patents FALCON, A New Trust Assessment and
                        Auto-C...
                      </h3>
                      <div className="text-gray-500 text-sm mt-1 flex items-center space-x-1">
                        <span>Yahoo Finance</span>
                        <span className="text-gray-400">·</span>
                        <span>Sep 12, 2023</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                        AvaWatz Company ("AvaWatz"), a technology company that
                        supports collaboration among robots, is pleased to
                        announce the fi...
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Show all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
