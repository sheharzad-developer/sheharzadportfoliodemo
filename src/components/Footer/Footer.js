/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Typography, makeStyles, Box, Paper, Button, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SheharzadLogo from '../../assets/S-Logo.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { meta } from '../../components/Content/Content'
import './Footer.css';


const style = makeStyles(theme => ({
    Footer: {
        padding: '30px 0',
        backgroundColor: '#313233',
        display: 'inline-flex',
        width: '100%'
    },

    IconLi: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        float: 'left',
        alignItems: 'center',
        cursor: 'pointer'
    },
    li: {
        padding: '0 30px',
        [theme.breakpoints.down('lg')]: {
            padding: '0 30px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0 30px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 24px',
        }
    },
    Inline: {
        display: 'flex',
        float: 'left',
    },
    facebookIcon: {
        width: '50px',
        height: '50px',
        lineHeight: '47px',
        fontSize: '16px',
        color: '#fff',
        borderRadius: '100%',
        textAlign: 'center',
        border: '2px solid #fff',
        padding: '10px 10px',
        '&:hover': {
            backgroundColor: '#F9004D',
            transition: '1s',
        },
        [theme.breakpoints.down('lg')]: {
            width: '20px !important',
            height: '20px !important'
        },
        [theme.breakpoints.down('md')]: {
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        }
    },
    instagramIcon: {
        width: '50px',
        height: '50px',
        lineHeight: '47px',
        fontSize: '16px',
        color: '#fff',
        borderRadius: '100%',
        textAlign: 'center',
        border: '2px solid #fff',
        padding: '10px 10px',
        '&:hover': {
            backgroundColor: '#F9004D',
            transition: '1s',
        },
        [theme.breakpoints.down('lg')]: {
            width: '20px !important',
            height: '20px !important'
        },
        [theme.breakpoints.down('md')]: {
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        }
    },
    linkedInIcon: {
        width: '50px',
        height: '50px',
        lineHeight: '47px',
        fontSize: '16px',
        color: '#fff',
        borderRadius: '100%',
        textAlign: 'center',
        border: '2px solid #fff',
        padding: '10px 10px',
        '&:hover': {
            backgroundColor: '#F9004D',
            transition: '1s',
        },
        [theme.breakpoints.down('lg')]: {
            width: '20px !important',
            height: '20px !important'
        },
        [theme.breakpoints.down('md')]: {
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        }
    },
    twitterIcon: {
        width: '50px',
        height: '50px',
        lineHeight: '47px',
        fontSize: '16px',
        color: '#fff',
        borderRadius: '100%',
        textAlign: 'center',
        border: '2px solid #fff',
        padding: '10px 10px',
        '&:hover': {
            backgroundColor: '#F9004D',
            transition: '1s',
        },
        [theme.breakpoints.down('lg')]: {
            width: '20px !important',
            height: '20px !important'
        },
        [theme.breakpoints.down('md')]: {
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        }
    },
    TypographyBackground: {
        backgroundColor: '#282C34'
    },
    TypographyRight: {
        color: 'white',
        textAlign: 'center',
        padding: '50px 0',
    },
    Boxflex: {
        display: 'flex'
    }
}))

const Footer = (props) => {
    const classes = style()

    return (
        <div className={classes.Footer}>
            <Container fluid>
                <Box className={classes.Boxflex}>
                    <ul className={classes.IconLi}>
                        <li className={classes.li}><FacebookIcon className={classes.facebookIcon} /></li>
                        <li className={classes.li}><InstagramIcon className={classes.instagramIcon} /></li>
                        <li className={classes.li}><LinkedInIcon className={classes.linkedInIcon} /></li>
                        <li className={classes.li}><TwitterIcon className={classes.twitterIcon} /></li>
                    </ul>
                </Box>
            </Container>

        </div>
    )
}

export default Footer;
