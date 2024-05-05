import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Lottie from 'react-lottie';
import skills from '../../assets/LottieFiles/skills.json';
import { meta } from '../../components/Content/Content';
import './About.css';

const useStyles = makeStyles((theme) => ({
    AboutBackground: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        paddingTop: '100px',
        paddingBottom: '60px',
        marginBottom: '60px',
        backgroundColor: '#282C34',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    aboutText: {
        textAlign: 'center',
        fontSize: '55px',
        fontFamily: 'Touche',
        color: 'white',
        paddingBottom: '50px !important',
        [theme.breakpoints.down('lg')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '17px 0',
            textAlign: 'center',
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '17px 0',
            textAlign: 'center',
            width: '100%'
        }
    },
    experienceText: {
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '19px',
        fontFamily: 'Arial',
        color: 'white',
        lineHeight: '36px',
        paddingBottom: '33px',
        position: 'relative',
        top: '100px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center',
            top: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center'
        }
    },
    boxJustify: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingTop: '3%',
        },
    },
    box: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    lottie: {
        [theme.breakpoints.down('md')]: {
            height: 150,
            width: 150,
        },
        [theme.breakpoints.down('sm')]: {
            height: 100,
            width: 100,
        }
    }
}));

const About = () => {
    const classes = useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: skills,
        rendererSettings: {
            className: "lottie-svg-class",
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={classes.AboutBackground} id="about">
            <Container>
                <div className={classes.aboutText}>{meta.aboutText}</div>
                <div className={classes.boxJustify}>
                    <div className={classes.box}>
                        <Lottie options={defaultOptions} className={classes.lottie} />
                    </div>
                    <div className={classes.box}>
                        <div className={classes.experienceText}>
                            {meta.description}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;