/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  Typography,
  makeStyles,
  Box,
  Paper,
  Button,
  Container,
  Grid,
  Link,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { meta } from "../../components/Content/Content";
// import { Fade } from 'react-awesome-reveal';
// import "animate.css/animate.min.css";
import Lottie from "react-lottie";
import sherry from "../../assets/LottieFiles/sherry.json";
import "./Profile.css";
// import 'animate.css';

const style = makeStyles((theme) => ({
  ProfileBackground: {
    flexDirection: "row",
    display: "flex",
    paddingBottom: "7%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
  button: {
    width: "208px",
    height: "72px",
    border: "2px solid #F9004D",
    color: "#ffff",
    fontFamily: "Arial",
    fontSize: "18px",
    borderRadius: "35px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#F9004D",
    },
  },
  BoxJustify: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  Box: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  codingGifImage: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      justifyContent: "center",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    textAlign: "right",
  },
  facebookIcon: {
    color: "white",
    fontSize: "2rem !important",
    paddingBottom: "50px",
    "&:hover": {
      color: "#F9004D",
      transition: "2s",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
    },
  },
  instagramIcon: {
    color: "white",
    fontSize: "2rem !important",
    paddingBottom: "50px",
    "&:hover": {
      color: "#F9004D",
      transition: "2s",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
    },
  },
  linkedInIcon: {
    color: "white",
    fontSize: "2rem !important",
    paddingBottom: "50px",
    "&:hover": {
      color: "#F9004D",
      transition: "2s",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
    },
  },
  twitterIcon: {
    color: "white",
    fontSize: "2rem !important",
    paddingBottom: "50px",
    "&:hover": {
      color: "#F9004D",
      transition: "2s",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem !important",
    },
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Touche",
    fontSize: "42px",
    color: "white",
    lineHeight: "1.5",
    [theme.breakpoints.down("lg")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      textAlign: "center",
      margin: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "44px",
      lineHeight: "2em",
      textAlign: "center",
      paddingTop: "40px",
    },
  },
  Typography: {
    width: "100%",
    // animation: 'fadeInUp 1s'
  },
  styleButton: {
    width: "208px",
    height: "63px",
    border: "2px solid #F9004D",
    color: "#ffff",
    fontFamily: "Arial",
    fontSize: "15px",
    borderRadius: "35px",
    "&:hover": {
      background: "#ffff",
      color: "#F9004D",
    },
    [theme.breakpoints.down("lg")]: {
      width: "180px",
      fontSize: "13px",
      height: "55px",
      fontWeight: "bold",
      marginRight: "50px"
    },
    [theme.breakpoints.down("md")]: {
      width: "150px",
      fontSize: "13px",
      height: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      fontsSize: "13px",
      height: "55px",
    },
  },
  ulInline: {
    marginTop: "30px",
    display: "inline-flex",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  liPadding: {
    paddingRight: "50px",
    [theme.breakpoints.down("lg")]: {
      paddingRight: "30px",
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "30px",
    },
  },
  styleWidth: {
    textAlign: "center",
    // animation: 'fadeInDown 1s',
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      textAlign: "center;",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  LottieWidth: {
    // [theme.breakpoints.down('md')]: {
    //     height: 150,
    //     width: 150,
    // },
    // [theme.breakpoints.down('sm')]: {
    //     height: 100,
    //     width: 100,
    // }
  },
}));

const Profile = (props) => {
  const classes = style();
  const scrollingBottom = () => {
    console.log("Clicked");
    document.querySelector("#hireSection").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollingProfile = () => {
    console.log("Clicked");
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sherry,
    rendererSettings: {
      className: "lottie-svg-class",
      id: "lottie-svg-id",
    },
  };
  return (
    // <ScrollAnimation animateIn='fadeLeft'>
    <div className="ProfileBackground container-fluid" id="home">
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <div className={classes.BoxJustify}>
              <Box className={classes.box}>
                <div class={classes.Typography}>
                  <div className={classes.Box}>
                    <i>
                      <Typography
                        variant="h1"
                        component="h1"
                        className={classes.text}
                      >
                        {meta.title}. <br />
                        {meta.designation}
                      </Typography>
                    </i>
                  </div>
                </div>
              </Box>

              <Box className={classes.box}>
                <Box>
                  <Lottie options={defaultOptions} />
                </Box>
              </Box>
            </div>
            <div className={classes.styleWidth}>
            <Link>
                <Button
                  className={classes.styleButton}
                  onClick={scrollingProfile}
                >
                  {meta.Profile}
                </Button>
              </Link>
              <Link>
                <Button
                  className={classes.styleButton}
                  onClick={scrollingBottom}
                >
                  {meta.getIn}
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    // </ScrollAnimation>
  );
};

export default Profile;
