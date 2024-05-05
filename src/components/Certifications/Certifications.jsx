import React from "react";
import { meta } from "../Content/Content";
import one from "../../assets/certifications/1.jpg";
import two from "../../assets/certifications/2.jpg";
import three from "../../assets/certifications/3.jpg";
import four from "../../assets/certifications/4.jpg";
import five from "../../assets/certifications/5.jpg";
import { makeStyles } from "@material-ui/core";
import "./Certifications.css";

const style = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "55px",
    textAlign: "center",
    padding: "40px 0",
    color: "#fff",
    fontFamily: "Touche",
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
}));

function CertificationPopup({ imageUrl }) {
  return (
    <div className="col-md-12">
      <img src={imageUrl} alt="Certification" style={{ width: "100%" }} />
    </div>
  );
}

function Certifications() {
  const classes = style();
  return (
    <>
      <div className="CertificationsGrid" id="certifications">
        <div className="container">
          <div className={classes.mainTitle}>
            <h2>{meta.Certifications}</h2>
          </div>
          <div className="row">
            <div className="certificationsView col-md-8">
              <ul>
                <li>
                  <a href={one} target="_blank">
                    <div className="certificationImage">
                      <img src={one} alt="Certification" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href={two} target="_blank">
                    <div className="certificationImage">
                      <img src={two} alt="Certification" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href={three} target="_blank">
                    <div className="certificationImage">
                      <img src={three} alt="Certification" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="certificationsView col-md-8">
              <ul>
                <li>
                  <a href={four} target="_blank">
                    <div className="certificationImage">
                      <img src={four} alt="Certification" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href={five} target="_blank">
                    <div className="certificationImage">
                      <img src={five} alt="Certification" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certifications;
