import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function NavBar({login}) {

    const toggleLoginButton = (JSON.stringify(login) === '{}')

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Chip
                color='primary'
                style={{backgroundColor:'white', color:'blue'}}
                // icon ={<TravelExploreIcon/>} 
                label="College Exchange"
                />
                {/* Empty Typography Just For Spacing */}
                <Typography
                sx={{ flexGrow: 1 }}
                >
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                    <HomeIcon />   
                </IconButton>
                </Link> 
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button color="inherit">{toggleLoginButton?
                    "Login" : "Logout"
                    }</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar