import './Navigation.css';
import { Header as GromHeader, Nav, Button, Text, Footer, Box, Sidebar, CheckBox } from 'grommet';
import { IonItem } from '@ionic/react'
import {
  Home,
  Search,
  Notification,
  SettingsOption,
} from 'grommet-icons';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Navigation = (props: any) => {
  const [menuState, setMenuState] = useState(true)
  const [themeToggleState, setThemeToggle] = useState(false)

  let history = useHistory();

  const sidebarNavigate = (link: string) => {
    history.push(link)
    setMenuState(true)

  }

  const handleThemeToggle = (value: boolean) => {
    setThemeToggle(value)
    props.toggleTheme(value)
  }

  return (
    <Box background={'background'}>
      <div className='navigation'>
        <div onClick={() => { setMenuState(true) }} className={`${menuState ? '' : 'sidebar-bg-active'}`} ></div>
        <GromHeader
          className='navbar-container'
          pad={{ left: "none", right: "none", vertical: "none" }}
        >
          <Nav background={'background'} className='navbar' direction="row">
            <Box pad={{ left: 'small', right: 'medium', vertical: 'medium' }}>
              <Button className='navbar-menu-button' onClick={() => { setMenuState(!menuState) }} plain >
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
            width={{ min: '100%' }}
            pad={{ left: 'none', right: 'none', vertical: 'none' }}
            footer={<SidebarFooter handleThemeToggle={handleThemeToggle} themeToggleState={themeToggleState} />}
            background="background"
          >
            <Button hoverIndicator onClick={() => { sidebarNavigate('/profile') }} className='top-button' >
              <Box direction='row' pad={{vertical: 'medium', horizontal: 'small'}} width={{ min: "100px" }}>

                <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
                <Box justify='center' pad={{ left: 'small' }}>
                  <Text weight={'bold'} size={"small"}>Allison Frederick</Text>
                  <Text color={'text-light'} size={"xsmall"}>allison@distra.com</Text>
                </Box>
              </Box>
            </Button>
            <div style={{ width: '100%', backgroundColor: 'lightgrey', height: 1 }}></div>
            <SidebarButton onClick={() => sidebarNavigate('/')} icon={<Home />} label="Home" />
            <SidebarButton onClick={() => sidebarNavigate('/explore')} icon={<Search />} label="Explore" />
            <SidebarButton onClick={() => sidebarNavigate('/notifications')} icon={<Notification />} label="Notifications" />
            <div style={{ width: '100%', backgroundColor: 'lightgrey', height: 1 }}></div>
            <SidebarButton onClick={() => sidebarNavigate('/settings')} icon={<SettingsOption />} label="Settings" />

          </Sidebar>
        </Box>
      </div>
    </Box>
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
    hoverIndicator
    {...rest}
  >
    <Box direction='row' gap='medium' pad={{ left: 'medium', right: 'medium', vertical: 'small' }}>
      {icon}
      <Text size='medium'>{label}</Text>
    </Box>
  </Button>
);
const SidebarFooter = (props: any) => (
  <Footer align='start' direction='column' >
    <Box pad={{ left: 'medium' }} gap='small' direction='row' align="start">
      <CheckBox
        checked={props.themeToggleState}
        onChange={(event) => props.handleThemeToggle(event.target.checked)}
        toggle
        color='brand'
      />
      <Text weight={500} size='medium'>Dark Mode</Text>
    </Box>
    <Box background="brand-light" pad={'medium'} width={{ min: '100%' }} align="center" justify='center' direction="column">
      <Text color={'brand'} style={{ width: '100%' }} textAlign="center" size="xsmall">
        ©Copyright 2023
      </Text>
      <Text color={'brand'} style={{ width: '100%' }} textAlign="center" size="xsmall">
        Client Version 0.0.1
      </Text>
    </Box>

  </Footer>
);

export default Navigation;