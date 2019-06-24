import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Box, Paper } from '@material-ui/core';
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
        fontFamily: "\"Avant Garde\", 'Avantgarde', \"Century Gothic\", 'CenturyGothic', \"AppleGothic\", 'sans-serif",
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

            <Box className={classes.h1}>
                    
                    <h1 className='shadow-21'>
                    Front End Developer
                    </h1>
                
            </Box>


            <div className={classes.iconBoxContainer}>
                <Paper className={classes.iconBox} square={true} elevation={7}>
                    
                <Box className={classes.iconBoxI}>
                    <div className="skillsImg">
                        <img alt="react" height="48" width="48" title="React.js" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" />
                        <img alt="MongoDB" height="48" width="48" title="MongoDB" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" />
                        <img alt="React-Redux" height="48" width="48" title="React Redux" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redux.svg" />
                        <img alt="Node.js" height="48" width="48" title="Node.js" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" />
                        <img alt="MySQL" height="48" width="48" title="MySQL" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" />
                        <img alt="Javascript" height="48" width="48" title="Javascript" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" />
                        <img alt="CSS3" height="48" width="48" title="CSS3" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" />
                        <img alt="HTML5" height="48" width="48" title="HTML5" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" />
                        <img alt="MaterialUI" height="48" width="48" title="Material UI" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/materialdesign.svg" />
                        <img alt="GraphQL" height="48" width="48" title="GraphQL" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphql.svg" />
                        <img alt="Github" height="48" width="48" title="Github" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                        <img alt="Git" height="48" width="48" title="Git" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" />
                        <img alt="Jest" height="48" width="48" title="Jest/Enzyme" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jest.svg" />
                        <img alt="Webpack" height="48" width="48" title="Webpack" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webpack.svg" />
                        <img alt="Auth0" height="48" width="48" title="Auth0" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg" />
                        <img alt="NPM" height="48" width="48" title="NPM" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/npm.svg" />
                        <img alt="Stack Overflow" height="48" width="48" title="Stack Overflow" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg" />
                        <img alt="Firebase  " height="48" width="48" title="Firebase" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" />
                    </div>
                </Box>
                <Box className="shadow-3">
                &nbsp;&nbsp; SKILLS
                </Box>
                
                </Paper>
            </div>
       </Grid>
    );
  }