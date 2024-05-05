/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-undef */
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
    Avatar,
    CircularProgress,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
// import LinearProgress from '../../components/LinearProgress/LinearProgress';
import SkillBar from "react-skillbars";
import { meta } from "../../components/Content/Content";
import { Fade } from "react-awesome-reveal";
import "./Proficiency.css";

const style = makeStyles((theme) => ({
    ProficiencyBackground: {
        padding: "40px 0 80px",
        display: "flex",
        backgroundColor: "#373738",
    },
    ProficiencyText: {
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
    Box: {
        backgroundColor: "#fff",
        boxShadow:
            "5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "10px",
    },
    logoCenter: {
        display: "flex",
        padding: "5%",
        paddingBottom: "0",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: "80px",
        height: "80%",
        objectFit: "none",
    },
    skillsText: {
        textAlign: "center",
        fontSize: "1.6rem",
        paddingTop: "10px",
        paddingBottom: "20px",
    },
    PaddingLeft: {
        paddingLeft: "9%",
        display: "flex",
    },
    SoftwareEngineerGif: {
        width: "350px",
        height: "350px",
        display: "flex",
        margin: "0 auto",
    },
}));

const Proficiency = (props) => {
    const classes = style();
    const skills = [
        { type: "HTML", level: 95 },
        { type: "CSS", level: 90 },
        { type: "Bootstrap", level: 85 },
        { type: "ReactJS", level: 75 },
        { type: "Javascript", level: 60 },
        { type: "NodeJS", level: 50 },
        { type: "ExpressJS", level: 50 },
        { type: "NuxtJS", level: 40 },
        { type: "PostgreSQL", level: 25 },
        { type: "MongoDB", level: 25 },
        { type: "NextJS", level: 25 },
    ];

    const colors = {
        bar: "#FEC948",
        title: {
            text: "#fff",
            background: "#0A1931",
        },
    };
    return (
        <div className={classes.ProficiencyBackground} id="proficiency">
            <Container>
                <Box>
                    <Fade direction="fadeInDown">
                        <Typography className={classes.ProficiencyText}>
                            {meta.Proficiency}
                        </Typography>
                    </Fade>
                </Box>
                <Fade direction="fadeInUp">
                    <SkillBar
                        skills={skills}
                        colors={colors}
                        style={{ fontFamily: "Touche" }}
                    />
                </Fade>
            </Container>
        </div>
    );
};

export default Proficiency;
