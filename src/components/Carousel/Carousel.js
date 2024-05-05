/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
    Typography, makeStyles, Box, Grid, Item, Paper,
    Card, CardActions, CardContent, Button, Container,
    CardMedia, ImageList, ImageListItem, Slider
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import OceanWallpaper from '../../assets/ocean-wallpaper.jpg'
import './Carousel.css'

const style = makeStyles(theme => ({
    CarouselBackground: {
        paddingTop: '140px',
        backgroundColor: '#313233',
        paddingBottom: '140px',
        [theme.breakpoints.down('lg')]: {
            paddingTop: '80px',
            paddingBottom: '80px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        }
    },
    container: {
        maxWidth: '1520px',
        padding: '0',
        backgroundColor: '#313233',
    },
    projectTitle: {
        fontSize: '55px',
        paddingBottom: '80px',
        textAlign: 'center',
        fontFamily: 'Touche',
        color: 'white',
        [theme.breakpoints.down('lg')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        }
    },
}))

function MyCarousel() {
    const classes = style()
    return (
        <Container fluid>
            <div className={classes.CarouselBackground}>
                <Carousel>
                    <div>
                        <img src={OceanWallpaper} />
                    </div>
                    <div>
                        <img src={OceanWallpaper} />
                    </div>
                    <div>
                        <img src={OceanWallpaper} />
                    </div>
                </Carousel>
            </div>
        </Container>
    );
}

export default MyCarousel


