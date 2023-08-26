import {
 Box,
 Divider,
 Drawer,
 List,
 ListItem,
 ListItemIcon,
 ListItemText,
 Typography,
} from '@mui/material';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useState } from 'react';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
 const [open, setOpen] = useState(true);

 const handlerMenu = () => {
  setOpen(!open);
 };

 return (
  <Drawer anchor='left' open={open} onClose={handlerMenu}>
   <Box sx={{ width: 250 }}>
    <Box sx={{ padding: '5px 10px' }}>
     <Typography variant='h4'>Menu</Typography>
    </Box>

    <List>
     {menuItems.map((text, index) => (
      <ListItem key={text}>
       <ListItemIcon>
        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
       </ListItemIcon>
       <ListItemText primary={text} />
      </ListItem>
     ))}
    </List>

    <Divider />

    <List>
     {menuItems.map((text, index) => (
      <ListItem key={text}>
       <ListItemIcon>
        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
       </ListItemIcon>
       <ListItemText primary={text} />
      </ListItem>
     ))}
    </List>
   </Box>
  </Drawer>
 );
};
