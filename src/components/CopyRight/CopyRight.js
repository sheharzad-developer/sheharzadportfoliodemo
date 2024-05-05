/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Typography, makeStyles, Box, Paper, Button, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {meta} from '../../components/Content/Content'
import './CopyRight.css';

const style = makeStyles(theme => ({
    TypographyBackground: {
        backgroundColor: '#282C34'
    },
    TypographyRight: {
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        fontSize:'22px',
        fontFamily: 'Arial',
        
    },
    CopyRight: {
        backgroundColor: '#282C34',
    }
}))

const Footer = (props) => {
    const classes = style()
    return (
        <div className={classes.CopyRight}>
            <Typography className={classes.TypographyBackground}>
                <div className={classes.TypographyRight}>
                    <h6>{meta.footerContent}</h6>
                </div>
            </Typography>
        </div>
    )
}

export default Footer
