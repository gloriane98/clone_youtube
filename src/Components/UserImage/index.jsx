import React from 'react'
import{Box,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Tooltip, Typography} from '@mui/material'
import { CheckBox, LogoutRounded, PersonAdd,Settings } from '@mui/icons-material';
import Logout from '../Logout'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom'
import authAxios from '../../utils/client';
import { useEffect } from 'react';
const UserImage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
let userImg=window.localStorage.getItem('image')

const getUser=()=>{
  authAxios().then(async(axios)=>{
    const user = await axios.get(`/user`)
    // console.log(user)
    localStorage.setItem('name', user.data.name)
  })
}

useEffect(()=>{
  getUser()
},[])
const name= localStorage.getItem('name');

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2,mt:1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50 }} src={userImg}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      
        <MenuItem>
          <ListItemIcon>
            <FacebookIcon/>
          </ListItemIcon>
            {/* {facebook} */}
          Facebook
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <InstagramIcon/>
          </ListItemIcon>
          Instagram
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <TwitterIcon/>
          </ListItemIcon>
          Twitter
        </MenuItem>
        <Divider />
        <Link to='/profile'>
        <MenuItem color='#1f1e1e'>
          <Avatar /> Modify
        </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <Typography>{name}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutRounded/>
          </ListItemIcon>
           <Logout/>
        </MenuItem>
      </Menu>
    </>

  )
}

export default UserImage;