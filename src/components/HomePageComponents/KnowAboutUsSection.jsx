import "./knowAboutUsSection.scss";

import Logo1 from "../../assets/svg-icons/logo-1.svg";
import Logo2 from "../../assets/svg-icons/logo-2.svg";
import Logo3 from "../../assets/svg-icons/logo-3.svg";
import Logo4 from "../../assets/svg-icons/logo-4.svg";
import Logo5 from "../../assets/svg-icons/logo-5.svg";
import Logo6 from "../../assets/svg-icons/logo-6.svg";

const KnowAboutUSSection = () => {
  return (
    <div className="knowaboutus-container">
      <div className="knowaboutus-content">
        <div className="knowaboutus-leftsection">
          <div className="knowaboutus-title">
            <span className="horizontal-line"></span>
            KNOW ABOUT US
          </div>
          <div className="knowaboutus-textcontent">
            <div className="knowaboutus-header">Sri Matha Trust</div>
            <div className="knowaboutus-subheader">
              20 YEAR OF DEDICATED SELFLESS SERVICE
            </div>
            <div className="knowaboutus-paragraph">
              World’s deadliest disease is cancer. Different kinds of cancer
              have been posing challenge to the entire humanity. Medical
              fraternity has been doing research after research to contain the
              disease. Millions of dollars are being spent to control the
              disease. Thanks to various remedial measures taken by the doctors
              across the world, now a situation has arrived that early deduction
              of cancer will facilitate curing. This is a real good news. Yet
              this dreadful disease has not been eradicated fully.
            </div>
            <button className="knowaboutus-learnmore" onClick={() => {}}>
              Learn more
            </button>
          </div>
        </div>
        <div className="knowaboutus-video"></div>
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
  );
};

export default KnowAboutUSSection;
