import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import {Drawer, MenuList, MenuItem, ListItemText, Toolbar} from '@material-ui/core';
import ROUTES from './routes'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const NavigationBar = (props) =>{
    const classes = useStyles();
    const activeRoute = (routeName) => {
        return window.location.pathname === routeName ? true : false;
      }
    return (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MenuList>
            {ROUTES.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.name} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
          </div>
        </Drawer>
    )
}

export default NavigationBar
