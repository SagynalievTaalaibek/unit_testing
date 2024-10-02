import Layout from './components/Layout/Layout.jsx';
import Card from './tasks/Card/Card.jsx';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Route, Routes } from 'react-router-dom';
import { LABS } from './app/constant.js';
import Fibonacci from './tasks/Fibonacci/Fibonacci.jsx';
import Binary from './tasks/Binary/Binary.jsx';

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {LABS.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton component={Link} to={text.nav}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Layout>
      <Box sx={{ margin: '20px 0' }}>
        <Button onClick={toggleDrawer(true)} variant="contained">
          Open
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
      <Routes>
        <Route path={'/'} element={<Card />} />
        <Route path={'/lab1'} element={<Card />} />
        <Route path={'/lab2'} element={<Fibonacci />} />
        <Route path={'/lab3'} element={<Binary />} />
        <Route path={'*'} element={<h1>Not found</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
