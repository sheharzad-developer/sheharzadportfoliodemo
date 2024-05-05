/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import HTMLIcon from "../../assets/HtmlIcon.png";
import CSSIcon from "../../assets/CSSIcon.png";
import JSIcon from "../../assets/JSIcon.png";
import BootstrapIcon from "../../assets/Bootstrap.png";
import SassIcon from "../../assets/sassIcon.png";
import ReactJS from "../../assets/reactJS.png";
import npmIcon from "../../assets/npmIcon.png";
import firebaseIcon from "../../assets/firebase.png";
import gitIcon from "../../assets/gitIcon.png";
import exIcon from "../../assets/exIcon.png";
import nuxtIcon from "../../assets/nuxtjsIcon.png";
import { meta } from "../../components/Content/Content";
import { Fade } from "react-awesome-reveal";
import SkillBar from "react-skillbars";
import "./Skills.css";

const style = makeStyles((theme) => ({
  SkillsIcon: {
    width: 60, // Set a specific size for the img className="SkillsIcon"
    height: 60,
    objectFit: "contain", // This will not work directly here; shown for context
  },
  SkillsBackground: {
    padding: "40px 0 80px",
    display: "flex",
    backgroundColor: "#484a4c",
  },
  SkillText: {
    fontSize: "55px",
    textAlign: "center",
    padding: "40px 0",
    color: "#fff",
    fontFamily: "Touche",
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  Box: {
    width: "355px",
    height: "400px",
    boxShadow:
      "5px 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "10px",
    "&:hover": {
      transform: "scale(1.10)",
      transitionDuration: "600ms",
      transitionProperty: "all",
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      "&:hover": {
        transform: "none",
        transitionDuration: "600ms",
        transitionProperty: "all",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "362px",
      "&:hover": {
        transform: "none",
        transitionDuration: "600ms",
        transitionProperty: "all",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "362px",
      "&:hover": {
        transform: "none",
        transitionDuration: "600ms",
        transitionProperty: "all",
      },
    },
  },
  logoCenter: {
    display: "flex",
    padding: "5%",
    paddingBottom: "0",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "60px",
    height: "80%",
    objectFit: "none",
  },
  skillsText: {
    textAlign: "center",
    fontSize: "1.6rem",
    paddingTop: "10px",
    paddingBottom: "20px",
    color: "#fff",
  },
  PaddingLeft: {
    paddingLeft: "9%",
    display: "flex",
  },
  Skills: {
    display: "flex",
    justifyContent: "center",
    li: {
      margin: "20px",
    },
    img: {
      width: 60, // Set a specific size for the img className="SkillsIcon"
      height: 60,
      objectFit: "contain",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: "17px 0",
      textAlign: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "17px 0",
      textAlign: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  SkillsText: {
    fontSize: "20px",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
    },
  },
  SkillsList: {
    listStyleType: "circle",
  },
  skillsIcon: {
    objectFit: "contain !important",
  },
}));

const Skills = (props) => {
  const classes = style();
  // const skills = [
  //     { type: 'HTML', level: 90 },
  //     { type: 'CSS', level: 85 },
  //     { type: 'Bootstrap', level: 80 },
  //     { type: 'ReactJS', level: 60 },
  //     { type: 'Javascript', level: 50 },
  //     { type: 'NodeJS', level: 20 },
  //     { type: 'ExpressJS', level: 5 },
  //     { type: 'PostgreSQL', level: 5 },
  //     { type: 'MongoDB', level: 2 },
  //     { type: 'NextJS', level: 2 },
  // ];

  // const colors = {
  //     bar: "#FEC948",
  //     title: {
  //         text: "#fff",
  //         background: "#0A1931"
  //     },
  // };
  return (
    <div className={classes.SkillsBackground} id="skills">
      <Container>
        <Box>
          <Fade direction="fadeInDown">
            <Typography className={classes.SkillText}>
              {meta.WhatDoI}
            </Typography>
          </Fade>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Fade direction="fadeInDown">
            <ul className={classes.Skills}>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={HTMLIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={CSSIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={JSIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={BootstrapIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={SassIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={ReactJS} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={npmIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={firebaseIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={gitIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={exIcon} />
              </li>
              <li style={{ padding: "20px 20px 40px 20px" }}>
                <img className="SkillsIcon" src={nuxtIcon} />
              </li>
            </ul>
          </Fade>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Fade direction="fadeInDown">
            <ul>
              <li>
                <Typography className={classes.SkillsText}>
                  - {meta.AppWeb}
                  <br />
                </Typography>
              </li>
              <li>
                <Typography className={classes.SkillsText}>
                  - {meta.AppWeb2}
                </Typography>
              </li>
              {/* <li>
                <Typography className={classes.SkillsText}>
                  - {meta.collaboration}
                </Typography>
              </li>
              <li>
                <Typography className={classes.SkillsText}>
                  - {meta.background}
                </Typography>
              </li> */}
            </ul>
          </Fade>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
