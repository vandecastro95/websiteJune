import React from 'react'
import background from '../bg.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import './landingpage.css'  
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    ImageBox: {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6) ), url(${background})`,
        backgroundSize: 'cover', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '100rem'
        }
    },
    header: {
        display: 'flex',
        flexDirection:'row'
    },
    h1: {
        fontFamily: "\"Avant Garde\", 'Avantgarde', \"Century Gothic\", 'CenturyGothic', \"AppleGothic\", 'sans-serif",
        textTransform: 'uppercase',
        textRendering: 'optimizeLegibility',
        padding: '1rem',
        margin:'0 auto',
        marginTop: '4rem'
    },
    aboutBox: {
        backgroundColor: '#FFF9C4',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    projectBox: {
        display: 'flex',
        backgroundColor: '#ccc893',
        overflow: 'hidden',
        paddingTop: '1rem',
        alignContent: 'center',
        justifyContent: 'center',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100rem'
          }
    },
    contactBox: {
        background: '#191919',
        color: '#DFE2DB'
    },
    Location: {
        backgroundColor: '#FFF9C4',
        marginTop: '20rem',
        width: '40% ',
        margin: '0 auto'
    },
    h4: {
        marginTop: '-20px'
    }
  });

  export default function Dashboard() {
    const classes = useStyles();
    return (
       <Grid container className={classes.root} >
       {background &&
            <Grid item={true} xs={12} sm={12} md={12} lg={4} xl={5} className={classes.ImageBox}>
                <Box className={classes.h1}>
                 <h1 className='shadow'>
                  Van de castro
                </h1>

                <span className='location'> 
                <i className="material-icons">location_on</i>
                Austin, Texas
                </span>

                <Box alignSelf="flex-end" ml={2} mt={6} className={classes.socialMedia}>
                <a href="https://www.instagram.com/vaaanst/">
                <img alt="linkedin" src="https://img.icons8.com/ios/50/FFF9C4/linkedin-filled.png"/>
                </a>
                <a href="https://www.linkedin.com/in/vandecastro/">
                <img alt="instagram" src="https://img.icons8.com/material/50/FFF9C4/instagram-new.png"></img>
                </a>
                <a href="https://github.com/vandecastro95">
                <img alt="github" src="https://img.icons8.com/material/50/FFF9C4/github.png"></img>
                </a>
                </Box>

                </Box>
            </Grid>
       }
    
            <Grid item={true} xs={12} sm={12} m={12} lg={8} xl={7} className={classes.aboutBox} >
            <PageOne />
            </Grid>
       
            <Grid item={true} xs={12} sm={12} m={12} lg={12} xl={12} className={classes.projectBox} >
            <PageTwo />
            </Grid>
       
       </Grid>
    );
  }