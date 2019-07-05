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
    contact: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        display: 'flex',
        flexDirection: 'column'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2rem'
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

                

                <div className="contact">
                <div className={classes.contact}>
                    <div className={classes.icon}>
                    <i className="material-icons">email</i>
                    <i className="material-icons">location_on</i>
                    </div>

                    <div className={classes.text}>
                        <span className='email'> 
                            vandecastro95@gmail.com
                        </span>
                        <span className='location'> 
                            Austin, Texas
                        </span>
                    </div>
                </div>
                </div>

                

                <Box alignSelf="flex-end" ml={2} mt={6} className={classes.socialMedia}>
                <a href="https://www.linkedin.com/in/vandecastro/">
                <img alt="instagram" src="https://img.icons8.com/material/50/FFF9C4/linkedin.png"></img>
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