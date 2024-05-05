import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Container, Link, makeStyles, Button } from '@material-ui/core';
// import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Profile/Profile';
import {meta} from '../../components/Content/Content'
import SheharzadLogo from '../../assets/S-Logo.jpg';
import "./Navbar.css";

const style = makeStyles(theme => ({
    HashLink: {
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '16px',
        paddingBottom: '3px',
        borderBottom: '2px solid transparent',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: '2px solid red',
            TransitionEvent: '0.5s',
        }
        ,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '0'
        }
    },
}))

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const classes = style()
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                <img src={SheharzadLogo} />
            </a>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#home" className={classes.HashLink} smooth>{meta.Home}</HashLink >
                    </li>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#about" className={classes.HashLink} smooth>{meta.About}</HashLink >
                    </li>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#skills" className={classes.HashLink} smooth>{meta.Portfolio}</HashLink >
                    </li>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#proficiency" className={classes.HashLink} smooth>{meta.Proficiency}</HashLink >
                    </li>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#certifications" className={classes.HashLink} smooth>{meta.Certifications}</HashLink >
                    </li>
                    <li>
                        <HashLink onClick={() => setIsNavExpanded(false)} to="#hireSection" className={classes.HashLink} smooth>{meta.Contact}</HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;