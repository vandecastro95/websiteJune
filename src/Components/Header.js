import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        backgroundColor: '#191919',
        display: 'flex',
        flexDirection: 'row-reverse',
        color: '#DFE2DB',
        position: 'fixed',
        zIndex: '999'
    },
    ImageBox: {
    }
  });

  export default function Header() {
    const classes = useStyles();
    return (
       <Box width={1} className={classes.root}>
            <Box m={2}> Projects </Box>
            <Box m={2}> Contact </Box>
            <Box m={2}> About </Box>
       </Box>
    );
  }