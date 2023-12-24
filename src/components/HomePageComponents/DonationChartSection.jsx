import "./donationChartSection.scss";
import styled from "styled-components";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 25 },
  { name: "Group B", value: 35 },
  { name: "Group C", value: 40 },
];

const colorCodes = [
  {
    id: 1,
    colorCode: "#FFF0CA",
    text: "25% feeding people",
  },
  {
    id: 2,
    colorCode: "#AC94F1",
    text: "35% treatment program",
  },
  { id: 3, colorCode: "#BEF3C0", text: "40% cancer care home" },
];

const ColorSpan = styled.span`
  background: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
`;

const DonationChartComponent = () => {
  return (
    <PieChart width={300} height={300} onMouseEnter={() => {}}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        innerRadius={80}
        outerRadius={140}
        fill="#fff"
        dataKey="value"
        startAngle={90}
        endAngle={450}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colorCodes[index]?.colorCode} />
        ))}
      </Pie>
    </PieChart>
  );
};

const DonationChartSection = () => {
  return (
    <div className="donation-container">
      <div className="donation-content">
        <div className="donation-textcontent">
          <h2 className="header-text">
            How we spend your donations and where it goes
          </h2>
          <p className="paragraph-text">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="donation-legend">
            {colorCodes.map((legendItem) => (
              <div className="legend-item" key={legendItem.id}>
                <ColorSpan
                  className="legend-color"
                  $bgColor={legendItem.colorCode}
                />
                <span className="legend-text">{legendItem.text}</span>
              </div>
            ))}
          </div>
        </div>
        <DonationChartComponent />
      </div>
    </div>
  );
};

export default DonationChartSection;
