import { useContext } from 'react';
import NextLink from 'next/link';

import {
 AppBar,
 Box,
 IconButton,
 Link,
 Toolbar,
 Typography,
} from '@mui/material';
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

     <NextLink href='/' passHref>
      <Link underline='none' color='white'>
       <Typography variant='h6'>OpenJira</Typography>
      </Link>
     </NextLink>
    </Toolbar>
   </AppBar>
  </Box>
 );
};
