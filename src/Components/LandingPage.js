import React from 'react'
import background from '../bg.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Paper } from '@material-ui/core';
import Location from './location.png';
import './landingpage.css'
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#cbc693',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    ImageBox: {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`,
        backgroundSize: 'cover', 
        minHeight: '100vh',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '100rem'
        }
    },
    header: {
        display: 'flex',
        flexDirection:'row'
    },
    h1: {
        fontFamily: "\"Avant Garde\", \'Avantgarde\', \"Century Gothic\", \'CenturyGothic\', \"AppleGothic\", 'sans-serif",
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
        backgroundColor: '#FFF9C4',
        minHeight: '95vh', 
        paddingTop: '1rem',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100rem'
          }
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
            <Grid item={true} xs={12} sm={12} md={12} lg={4} xl={5} className={classes.ImageBox}>
                <Box className={classes.h1}>
                 <h1 className='shadow'>
                  Van de castro
                </h1>

                <span className='location'> 
                <i class="material-icons">location_on</i>
                Austin, Texas
                </span>

                </Box>
            </Grid>
            
            <Grid item={true} xs={12} sm={12} m={12} lg={8} xl={7} className={classes.aboutBox} >
            <PageOne />
            </Grid>

            <Grid item={true} xs={12} sm={12} m={12} lg={8} xl={7} className={classes.projectBox} >
            <PageTwo />
            </Grid>
       </Grid>
    );
  }