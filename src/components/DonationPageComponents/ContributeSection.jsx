import "./contributeSection.scss";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const ContributeSection = () => {
  return (
    <div className="contribute-container">
      <div className="contribute-content">
        <div className="left-section">
          <h2 className="header-text">
            How you can contribute to caring for cancer patient
          </h2>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="right-section">
          <Tabs defaultActiveKey="Overview" className="mb-3">
            <Tab eventKey="Overview" title="Overview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
              <br />
              <br />
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </Tab>
            <Tab eventKey="Impact" title="Impact">
              Lorem Impact dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Tab>
            <Tab eventKey="What You get" title="What You get">
              Lorem What you get dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContributeSection;
