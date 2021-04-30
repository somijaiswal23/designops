import React, {useEffect} from 'react';
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
    listItemText : {
        color: '#0a2243',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
    },
  }));

const NavigationBar = (props) => {
    const [routes, setRoutes] = React.useState(ROUTES)
    const {pathname} = window?.location
    useEffect(()=>{
      onSelection(pathname)
    },[pathname])
    const onSelection=(pathname)=>{
      const updatedRoutes = ROUTES.map(item=>{
        return item.path === pathname ? {...item, active:true}:{...item, active:false}
      })
      setRoutes(updatedRoutes)
    }
    const classes = useStyles();
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
            {routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key} onClick={()=>onSelection(prop.path)}>
                  <MenuItem selected={prop.active}>
                    <ListItemText primary={prop.name} className={classes.listItemText}/>
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
