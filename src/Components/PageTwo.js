import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Paper } from '@material-ui/core';
import './landingpage.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF9C4',
        width: '100%',
        color: 'black',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '100%',
          margin: 'auto 0'
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
        backgroundColor: '#FFF9C4',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            marginTop: '0rem',
          },
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0',
        }
    },
  });


  export default function PageTwo() {
    const classes = useStyles();
    return (
       <Grid container className={classes.root} >

            <Paper className={classes.h1} elevation={0} square={true}>
                    <h1 className='shadow-2'>
                    Projects
                    </h1>
            </Paper>
            
       </Grid>
    );
  }