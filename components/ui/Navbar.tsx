import { useContext } from 'react';
import NextLink from 'next/link';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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

     <NextLink href='/' passHref>
      <Typography variant='h6' color='white'>
       OpenJira
      </Typography>
     </NextLink>
    </Toolbar>
   </AppBar>
  </Box>
 );
};
