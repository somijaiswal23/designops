import React from 'react';
import {Switch,Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, CssBaseline, Toolbar, Typography} from '@material-ui/core';
import NavigationBar from './NavigationBar'
import {CustomModalDemo, CustomCardDemo, SignInDemo, StickyFooterDemo, ColorPalette} from './examples';
import './index.css';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
  
const MainPage = (props) =>{
    const classes = useStyles();
    return (
       
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="toolContainer">
            <div className="toolBar">
                <img 
                    src="https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg" 
                    width="150" alt="RXP Group"/> 
                <Typography variant="h6" noWrap className="toolText">
                    RXP Design Library
                </Typography>
            </div>     
          </Toolbar>
        </AppBar>
        <NavigationBar {...props}/>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
          <Route path='/' exact component={ColorPalette} {...props}/>
            <Route path='/signin' exact component={SignInDemo} {...props}/>
            <Route path='/stickyfooter' component={StickyFooterDemo} {...props}/>
            <Route path='/modal' component={CustomModalDemo} {...props}/>
            <Route path='/card' component={CustomCardDemo} {...props}/>
          </Switch>
        </main>
      </div>
  )
}

export default MainPage;