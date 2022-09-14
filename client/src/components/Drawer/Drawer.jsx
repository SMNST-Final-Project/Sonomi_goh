import * as React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//icons
import Category from '@mui/icons-material/Category';
import CardGiftcard from '@mui/icons-material/CardGiftcard';
import Tune from '@mui/icons-material/Tune';
import { Collections } from '@mui/icons-material';

//styled components
const Container = styled.div`
  height: 80px;
  background-color: #ebe2e2;
`;
const Wrapper = styled.div`
  padding: 20px 40px;
  color: snow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Drawer = () => {
  const [state, setState] = React.useState({
    teas: false,
    oils: false,
    skincare: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (

    
    <Box
      sx={{ width: anchor === 'teas' || anchor === 'skincare' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Categories', 'Special', 'Articles', 'Most Popular'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Category /> : <CardGiftcard />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>–
      <Divider />
      <List>
        {['Tea Ware', 'Customize', 'Delivery Options'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Tune /> : <Collections />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container>
        <Wrapper>
    <div >
      {['Teas', 'Oils', 'Skincare', 'Gifts'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    </Wrapper>
   </Container> 
  );
}
