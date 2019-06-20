import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Paper } from '@material-ui/core';
import {Animated} from "react-animated-css";
import './landingpage.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#FFF9C4',
        width: '100%',
        color: 'black',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '85%'
        },
        ['@media (min-width:320px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
          }
    },
    h1: {
        fontFamily: "\"Avant Garde\", \'Avantgarde\', \"Century Gothic\", \'CenturyGothic\', \"AppleGothic\", 'sans-serif",
        textTransform: 'uppercase',
        textRendering: 'optimizeLegibility',
        padding: '0 2rem',
        alignItems: 'center',
        backgroundColor: '#FFF9C4',
        justifyContent: 'center',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            marginTop: '5rem',
            margin: '0'
          },
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0',
        }
    },
    iconBoxContainer: {
        width: '100%',
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0',
            width: '109%',
        }

    },
    iconBox: {
        backgroundColor: '#FFF9C4',
        width: '80%',
        margin: '1rem auto',
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            padding: '0',
            margin: '1rem auto',
        }
    },
    icon: {
        width: '1.6rem',
        height: '1.6rem',
    },
    iconBoxI: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          marginTop: '7rem'
        },
    },
    span: {
        fontSize: '30px'
    }
  });


  export default function PageOne() {
    const classes = useStyles();
    return (
       <Grid container className={classes.root} >

            <Box className={classes.h1} square={true}>

                <Animated animationIn="fadeIn" isVisible={true}>
                    
                    <h1 className='shadow-2'>
                    Front End Developer
                    </h1>
                </Animated>
                
            </Box>


            <div className={classes.iconBoxContainer}>
                <Paper className={classes.iconBox} square={true} elevation={21}>
                    
                <Animated animationIn="fadeIn" isVisible={true}>
                <Box className={classes.iconBoxI}>
                    <i className={classes.icon} class="devicon-react-original colored"></i>
                    <i className={classes.icon} class="devicon-express-original-wordmark"></i>
                    <i className={classes.icon} class="devicon-mongodb-plain-wordmark colored"></i>
                    <i className={classes.icon} class="devicon-nodejs-plain colored"></i>
                    <i className={classes.icon} class="devicon-html5-plain-wordmark"></i>
                    <i className={classes.icon} class="devicon-css3-plain"></i>
                    <i className={classes.icon} class="devicon-javascript-plain colored"></i>
                    <i className={classes.icon} class="devicon-jquery-plain-wordmark colored"></i>
                    <i className={classes.icon} class="devicon-bootstrap-plain"></i>
                    <i className={classes.icon} class="devicon-heroku-original-wordmark"></i>
                    <i className={classes.icon} class="devicon-git-plain"></i>
                    <i className={classes.icon} class="devicon-github-plain-wordmark"></i>
                    <i className={classes.icon} class="devicon-babel-plain"></i>
                    <i className={classes.icon} class="devicon-mysql-plain colored"></i>
                    <i className={classes.icon} class="devicon-sequelize-plain-wordmark"></i>
                    <i className={classes.icon} class="devicon-webpack-plain-wordmark"></i>
                </Box>
                </Animated>
                <Box className="shadow-3">
                &nbsp;&nbsp; SKILLS
                </Box>
                
                </Paper>
            </div>
       </Grid>
    );
  }