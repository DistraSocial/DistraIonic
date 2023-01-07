import './Navigation.css';
import { Header as GromHeader, Nav, Button, Text, Footer, Box, Sidebar } from 'grommet';
import { IonItem } from '@ionic/react'
import {
  Home,
  Search,
  Notification,
  SettingsOption,
} from 'grommet-icons';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Navigation: React.FC = ({ ...props }) => {
  const [menuState, setMenuState] = useState(true)
  let history = useHistory();

  const sidebarNavigate = (link:string) => {
    history.push(link)
    setMenuState(true)

  }

  return (
    <>
      <div className='navigation'>
        <div onClick={() => {setMenuState(true)}} className={`${menuState ? '' : 'sidebar-bg-active'}`} ></div>
        <GromHeader
          className='navbar-container'
          background="light-1"
          pad={{ left: "none", right: "none", vertical: "none" }}
        >
          <Nav className='navbar' direction="row">
            <Box pad={{ left: 'small', right: 'medium', vertical: 'medium' }}>
              <Button onClick={() => { setMenuState(!menuState) }} plain >
                <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
              </Button>
            </Box>
            <div>
              
            </div>
          </Nav>
        </GromHeader>

      </div>
      <div className={`sidebar ${menuState ? 'sidebar-hidden' : 'sidebar-active'}`}>
        <Box direction="row" height={{ min: '100%' }}>
          <Sidebar
            responsive={false}
            background="white"
            width={{ min: '100%' }}
            pad={{ left: 'none', right: 'none', vertical: 'none' }}
            footer={<SidebarFooter />}
          >
            <SidebarButton onClick={() => sidebarNavigate('/tab1')} icon={<Home />} label="Home" />
            <SidebarButton onClick={() => sidebarNavigate('/tab2')} icon={<Search />} label="Explore" />
            <SidebarButton onClick={() => sidebarNavigate('/tab3')} icon={<Notification />} label="Notifications" />
            <div style={{ width: '100%', backgroundColor: 'lightgrey', height: 1 }}></div>
            <SidebarButton icon={<SettingsOption />} label="Settings" />
          </Sidebar>
        </Box>
      </div>
    </>
  );
};

interface SidebarButtonProps {
  label: string;
  icon?: any
  onClick?: any
}
const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, ...rest }) => (
    <Button
      className='sidebar-button'
      gap="medium"
      alignSelf="start"
      plain
      {...rest}
    >
      <Box direction='row' gap='medium' pad={{ left: 'medium', right: 'medium', vertical: 'small' }}>
        {icon}
        <Text size='medium'>{label}</Text>
      </Box>
    </Button>
);
const SidebarFooter = () => (
  <Footer background="brand" pad="medium">
    <Box width={{ min: '100%' }} align="center" justify='center' direction="column">
      <Text style={{ width: '100%' }} textAlign="center" size="xsmall">
        ©Copyright 2023
      </Text>
      <Text style={{ width: '100%' }} textAlign="center" size="xsmall">
        Client Version 0.0.1
      </Text>
    </Box>

  </Footer>
);

export default Navigation;