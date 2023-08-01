import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import {VscThreeBars} from 'react-icons/vsc'

import { useState } from 'react';
import { Stack, Typography, ListItemButton,ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


const pageAndUrl = [
    {pageText:'Home',pageurl: '/'},
    {pageText:'About', pageurl:'/about'},
    {pageText:'Contact', pageurl:'/contact'},
    {pageText:'Course Catalogue', pageurl:'/course-catalogue'},
]

function Header() {
  const [left, setLeft] = useState(false)

  const toggleDrawer = ( open) => event => {
     if (
       event.type === 'keydown' &&
       (event.key === 'Tab' || event.key === 'Shift')
     ) {
       return;
     }

     setLeft(open);
   };

  const list = anchor => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        padding: 3,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer( false)}
    >
      <Typography
        fontFamily={'Montserrat Alternates'}
        fontWeight={'bold'}
        fontSize={'1.5rem'}
      >
        Course Catalogue
      </Typography>
      <Divider />
      <List>
        <Stack direction={'column'} spacing={4} mt={2}>
          {pageAndUrl.map((page, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={page.pageurl}
                autoFocus="true"
              >
                <ListItemText
                  primary={page.pageText}
                  disableTypography={true}
                  sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:2
      }}
    >
      <Button onClick={toggleDrawer(true)}>
        <VscThreeBars fontSize={'3rem'} />
      </Button>
      <Drawer open={left} onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>

      <Typography fontFamily={'Montserrat Alternates'} fontWeight={'bold'} fontSize={'3rem'}>
        Course Catalogue
      </Typography>
      <Button variant={'contained'} size='medium' color={'secondary'}>
        Login
      </Button>
    </Box>
  );
}

export default Header;
