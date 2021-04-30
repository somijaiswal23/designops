import React from 'react';
import {Switch,Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, CssBaseline, Toolbar, Typography} from '@material-ui/core';
import {SignIn, StickyFooter} from './lib'

import NavigationBar from './NavigationBar'
import {CustomModalDemo} from './examples';

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
          <Toolbar>
            <Typography variant="h6" noWrap>
              RXP Design Library
            </Typography>
          </Toolbar>
        </AppBar>
        <NavigationBar {...props}/>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route path='/' exact component={SignIn} {...props}/>
            <Route path='/stickyfooter' component={StickyFooter} {...props}/>
            <Route path='/modal' component={CustomModalDemo} {...props}/>
          </Switch>
        </main>
      </div>
  )
}

export default MainPage;