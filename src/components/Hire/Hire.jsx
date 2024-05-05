/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component, useRef } from "react";
import {
  Typography,
  makeStyles,
  Container,
  TextField,
  TextareaAutosize,
  Button,
  Input,
  Box,
  Grid,
  Link,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import Contact from '../../components/Contact/Contact';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { meta } from "../../components/Content/Content";
import { Fade } from "react-awesome-reveal";
import "./Hire.css";

const style = makeStyles((theme) => ({
  HireBackground: {
    backgroundColor: "#282C34",
    padding: "122px 0",
    [theme.breakpoints.down("lg")]: {
      padding: "60px 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "60px 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0",
    },
  },
  Container: {
    maxWidth: "1520px",
    [theme.breakpoints.down("lg")]: {
      width: "80px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80px",
    },
  },
  hireText: {
    fontSize: "55px",
    fontFamily: "Touche",
    color: "white",
    paddingBottom: "12px",
    textAlign: "center",
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
  hireTitle: {
    fontFamily: "Arial",
    fontSize: "19px",
    color: "white",
    paddingBottom: "26px",
    textAlign: "center",
  },
  LinkedinText: {
    color: "white",
    textDecoration: "none",
  },
  InputText: {
    width: "550px",
    borderRadius: "16px",
    paddingBottom: "20px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98",
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-outlined": {
      color: "#fff",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#fff",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  InputArea: {
    width: "550px",
    height: "120px",
  },
  SendButton: {
    width: "226px",
    height: "50px",
    backgroundColor: "#F9004D",
    fontSize: "12px",
    borderRadius: "6px",
    color: "#fff",
    display: "flex",
    margin: "0 auto",
    "&:hover": {
      backgroundColor: "#282C34",
      border: "1px solid white",
      borderRadius: "6px",
      transition: "1s",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  HireImg: {
    width: "300px",
    height: "300px",
    objectFit: "contain",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  HireImgBox: {
    display: "flex",
    alignItems: "center",
  },
  HireMe: {
    marginTop: "5rem",
    [theme.breakpoints.down("lg")]: {
      marginRight: "0",
      fontSize: "13px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginRight: "0",
    },
  },
  LeftForm: {
    textAlign: "center",
    margin: "0 auto",
  },
  IconLi: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "50px",
    justifyContent: "flex-start",
  },
  li: {
    padding: "0 30px 0 0",
    [theme.breakpoints.down("lg")]: {
      padding: "0 30px 0 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 30px 0 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 24px 0 0",
    },
  },
  facebookIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  instagramIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  linkedInIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  twitterIcon: {
    width: "50px",
    height: "50px",
    lineHeight: "47px",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "100%",
    textAlign: "center",
    border: "2px solid #fff",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: "#F9004D",
      transition: "1s",
    },
    [theme.breakpoints.down("lg")]: {
      width: "20px !important",
      height: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
}));

const Hire = (props) => {
  const classes = style();
  return (
    <div className={classes.HireBackground} id="hireSection">
      <Container>
        <div className={classes.box}>
          <div className={classes.HireMe}>
            <Fade>
              <Typography className={classes.hireText}>{meta.Hire}</Typography>
              <Typography className={classes.hireTitle}>
                {meta.Available}
                <br /> {meta.Connect}
                <br />
                <a
                  className={classes.LinkedinText}
                  href="https://www.linkedin.com/in/sheharzad-salahuddin/"
                >
                  {" "}
                  https://www.linkedin.com/in/sheharzad-salahuddin/
                </a>
              </Typography>
              <Contact/>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hire;
