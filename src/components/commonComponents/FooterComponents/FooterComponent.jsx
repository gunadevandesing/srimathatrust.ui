import "./footerComponent.scss";

import ButtonComponent from "../ButtonComponent";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-title">Sri Matha trust</div>
        <div className="links-container">
          <div className="links-list">
            {["Home", "About us", "Team", "What we do", "Contact"].map(
              (item) => (
                <div key={item} className="link-item">
                  {item}
                </div>
              )
            )}
          </div>
          <div className="links-list">
            {["More", "Projects", "Events", "Donate", "Blog"].map((item) => (
              <div key={item} className="link-item">
                {item}
              </div>
            ))}
          </div>
          <div className="links-list">
            {["Connect", "Facebook", "Instagram", "Twitter", "LinkedIn"].map(
              (item) => (
                <div key={item} className="link-item">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <div className="subscribe-section">
          <div className="subscribe-text">Subscribe to get latest updates</div>
          <div className="input-section">
            <input type="email" placeholder="Your email" />
            <ButtonComponent
              buttonType="secondary"
              buttonText="Subscribe"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
