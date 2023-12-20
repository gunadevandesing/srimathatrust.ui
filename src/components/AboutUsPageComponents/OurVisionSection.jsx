import "./ourVisionSection.scss";

import Logo1 from "../../assets/svg-icons/logo-1.svg";
import Logo2 from "../../assets/svg-icons/logo-2.svg";
import Logo3 from "../../assets/svg-icons/logo-3.svg";
import Logo4 from "../../assets/svg-icons/logo-4.svg";
import Logo5 from "../../assets/svg-icons/logo-5.svg";
import Logo6 from "../../assets/svg-icons/logo-6.svg";

const OurVisionSection = () => {
  return (
    <div className="ourvision-container">
      <div className="ourvision-content">
        <div className="ourvision-title">OUR VISION</div>
        <div className="ourvision-header">
          Cancer destroys lives and families.
        </div>
        <div className="ourvision-paragraph">
          There are different types of this deadly disease. And sometimes, very
          hard to detect in the early stages. Over several decades, a massive
          amount of research has gone into its study, and millions of dollars
          have been spent towards seeking a cure. And now, thanks to various
          remedial measures taken by doctors globally, early cancer detection
          will facilitate a cure. While this is a tremendous booster, this
          dreadful disease cannot be treated for all types and stages. Cancer
          patients not only suffer excruciating pain but are often saddled with
          financial debt that can wipe out their families. The rich may still
          find a recourse but it’s the poor who are in a pitiable state where
          they simply have to let their loved ones go. It’s heart-wrenching!
          Deeply moved by the plight of poor cancer patients, Mr. V.
          Krishnamoorthy, an extremely kind-hearted human being, floated an NGO.
          The name of the Trust he started in 2000, is Sri Matha Trust.
        </div>
        <div className="supporters-row">
          <div>OUR SUPPORTERS</div>
          <div className="supporters-logo-row">
            <img src={Logo1} alt="logo-1" />
            <img src={Logo2} alt="logo-2" />
            <img src={Logo3} alt="logo-3" />
            <img src={Logo4} alt="logo-4" />
            <img src={Logo5} alt="logo-5" />
            <img src={Logo6} alt="logo-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionSection;
