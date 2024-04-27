import React from 'react'
import logo from '../assets/logo.jpg'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from 'react';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Service",
    },
    {
      text: "Contact",
    },

  ];
  return (
    <nav> 
     <div className='nav-container'>
         <a style={{color:"rgb(238, 179, 17)", fontSize:"25px"}}> gilchay</a>
         <a href=''>Home</a>
         <a href=''>Service</a>
         <a href=''>About us</a>
         <a href=''>Contact</a>
     </div>
     <div className='nav-searchbar'>
     <input type='search' placeholder='search....' style={{padding:"10px"}}/>
     <button className='primary-button' type='submit'>Register</button>
     </div>

     <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
   
  )
}

export default Nav