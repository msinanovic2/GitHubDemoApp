import React, { useState,useRef } from 'react'
import  AppBar  from '@material-ui/core/AppBar';
import { IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import {useContext  } from "react";
import { CustomThemeContext } from './Theme/CustomThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { AccountCircle, ArrowBack, Home } from '@material-ui/icons';
import {useHistory} from 'react-router-dom'
import { AuthService } from './AuthService';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  iconWrap:{
    display :"inline"
  }
}));

function Header(props) {
  const loggedIn = props.loggedIn
  const setLoggedIn = props.setLoggedIn
  const history = useHistory();
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')
  const [openMenu,setOpenMenu] = useState(false)
  const accountButtonRef = useRef(null)
  
  const handleLogOut = ()=>{
    AuthService.logout()
    setLoggedIn(false)
  }

  
  const switchTheme = () => {
    isDark? setTheme("normal"): setTheme("dark")
  }
    return <div className={classes.root} ref= {accountButtonRef}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={()=>history.goBack()}>
            <ArrowBack/>
          </IconButton>
          <Typography color={"textPrimary"} variant="h6" className={classes.title} >
            DemoApp
          </Typography>
          <IconButton onClick={(event)=>history.push('/')}>
            <Home/>
          </IconButton>
          <IconButton onClick={switchTheme} >
            <BrightnessMediumIcon/>
          </IconButton>
          <IconButton onClick={(event)=>setOpenMenu(true)} >
            <AccountCircle/>
          </IconButton>

          <Menu open={openMenu} 
          anchorEl={accountButtonRef.current}
          getContentAnchorEl={null}
          anchorOrigin={{
            horizontal:"right",
            vertical:"bottom"
          }}
          transformOrigin={
            {
               horizontal:"left",
              vertical:"top"

            }
          }
          onClose={()=>setOpenMenu(false)}
           >
            {!loggedIn?<MenuItem onClick={(event)=>(history.push('/login'))}> Sign in</MenuItem>:null}
            {loggedIn?<MenuItem onClick={(event)=>(history.push('/myaccount'))}> MyAccount</MenuItem>:null}
            {loggedIn?<MenuItem onClick={handleLogOut}> Sign Out</MenuItem>:null}
            
          </Menu>
        </Toolbar>
      </AppBar>
    </div>

}

export default Header



