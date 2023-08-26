import { useContext } from 'react';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { UiContext } from '@/context/ui';

export const Navbar = () => {
 const { handlerOpenMenu } = useContext(UiContext);
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position='sticky'>
    <Toolbar>
     <IconButton size='large' edge='start' onClick={handlerOpenMenu}>
      <MenuOutlinedIcon />
     </IconButton>

     <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
      Jiro
     </Typography>

     <IconButton>
      <DarkModeOutlinedIcon />
     </IconButton>
    </Toolbar>
   </AppBar>
  </Box>
 );
};
