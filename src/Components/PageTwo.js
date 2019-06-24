import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import Portfolio from './Portfolio';
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
        padding: '0 1rem',
        paddingBottom: '1rem',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
          maxWidth: '80rem',
          margin: 'auto 1rem',
          marginBottom: '1rem',
          paddingTop: '-2rem'
        },
        ['@media (min-width:320px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
          }
    },
    h1: {
        fontFamily: "\"Avant Garde\", 'Avantgarde', \"Century Gothic\", 'CenturyGothic', \"AppleGothic\", 'sans-serif",
        textTransform: 'uppercase',
        textRendering: 'optimizeLegibility',
        backgroundColor: '#FFF9C4',
        marginBottom: '10px',
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
          },
        ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0',
        }
    },
  });


  export default function PageTwo() {
    const classes = useStyles();
    return (
       <Paper className={classes.root} square={true} elevation={21}>

            <Paper className={classes.h1} elevation={0} square={true}>
                    <h1 className='shadow-2'>
                    Projects
                    </h1>
            </Paper>
            
            <Portfolio />
       </Paper>
    );
  }