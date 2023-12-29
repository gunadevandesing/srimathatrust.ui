import "./ProjectReadMore1_Cancer.scss";
import cancer_Readmore from "../../assets/images/cancer_ReadMore.png";
const ProjectReadMore1_Cancer = () => {
  return (
    <>
      <div className="readmoreCancer-container">
        <div className="readmoreCancer-content">
          <div className="readmoreCancer-title">
            <span className="horizontal-line"></span>
            CANCER
          </div>
          <div className="readmoreCancer-textcontent">
            <div className="readmoreCancer-header">
              Cancer destroys lives & families.
            </div>
            <div className="readmoreCancer-paragraph">
              There are different types of this deadly disease. And sometimes,
              very hard to detect in the early stages. Over several decades, a
              massive amount of research has gone into its study, and millions
              of dollars have been spent towards seeking a cure. And now, thanks
              to various remedial measures taken by doctors globally, early
              cancer detection will facilitate a cure. While this is a
              tremendous booster, this dreadful disease cannot be treated for
              all types and stages. <br />
              <br />
              Cancer patients not only suffer excruciating pain but are often
              saddled with financial debt that can wipe out their families. The
              rich may still find a recourse but it’s the poor who are in a
              pitiable state where they simply have to let their loved ones go.
              It’s heart-wrenching! Deeply moved by the plight of poor cancer
              patients, Mr. V. Krishnamoorthy, an extremely kind-hearted human
              being, floated an NGO. The name of the Trust he started in 2000,
              is Sri Matha Trust.
              <br />
              <br /> Please include message of Shri Jeyendra Periyava Ninaivyu
              Muthiyor Illam (Page 11 of Brochure){" "}
            </div>
          </div>
        </div>
        {/* <img src={cancer_Readmore}/> */}
      </div>
      <img src={cancer_Readmore} />
    </>
  );
};

export default ProjectReadMore1_Cancer;
