import { useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UiContext } from '@/context/ui';

export const Navbar = () => {
 const { handlerOpenMenu } = useContext(UiContext);
 return (
  <AppBar position='sticky'>
   <Toolbar>
    <IconButton size='large' edge='start' onClick={handlerOpenMenu}>
     <MenuOutlinedIcon />
    </IconButton>

    <Typography variant='h5'>Jiro</Typography>
   </Toolbar>
  </AppBar>
 );
};
