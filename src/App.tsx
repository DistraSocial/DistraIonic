import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, toggle, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Explore from './pages/Explore';
import Placeholder from './pages/Placeholder';
import Navigation from './components/Navigation'
import {
  Home as HomeIcon,
  Search,
  Notification,
} from 'grommet-icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css'

import { deepMerge } from "grommet/utils";
import { Grommet, Header, Text, grommet, Nav, Box } from 'grommet';
import { useState } from 'react';

const light = deepMerge(grommet, {
  global: {
    colors: {
      background: '#fcfcfc',
      brand: "#4338ca",
      'brand-light': "#e0e7ff",
      'brand-light-transparent': "#4338ca60",
      'hover': '#d9d7fe',
      "text-light": "#94a3b8",
      border: 'text-light'
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
    hover: {
      background: 'hover'
    }
  },
  card: {
    container: {
      border: {
        side: 'bottom'

      }
    },
  },
  tab: {
    color: 'text-strong',
    active: {
      color: 'brand',
    },
    border: {
      side: 'bottom',
      color: 'border',
      active: {
        color: 'brand',
      },
      disabled: {
        color: 'border-weak',
      },
      hover: {
        color: 'border',
      },
    },
    disabled: {
      color: 'text-weak',
    },
    hover: {
      background: 'hover',
      color: 'text',
    },
    pad: 'small',
    margin: {
      horizontal: 'none',
    },
  },
});

const dark = deepMerge(grommet, {
  global: {
    colors: {
      background: '#16213E',
      brand: "#818cf8",
      'brand-light': "#312e81",
      'brand-light-transparent': "#16213E80",
      'hover': '#818cf860',
      "text-light": "#94a3b8",
      border: 'text-light'
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
    hover: {
      background: 'hover'
    }
  },
  card: {
    container: {
      border: {
        side: 'bottom'

      }
    },
  },
  tab: {
    color: 'text-strong',
    active: {
      color: 'brand',
    },
    border: {
      side: 'bottom',
      color: 'border',
      active: {
        color: 'brand',
      },
      disabled: {
        color: 'border-weak',
      },
      hover: {
        color: 'border',
      },
    },
    disabled: {
      color: 'text-weak',
    },
    hover: {
      background: 'hover',
      color: 'text',
    },
    pad: 'small',
    margin: {
      horizontal: 'none',
    },
  },
});

setupIonicReact();


const App: React.FC = () => {
  const [appTheme, setAppTheme] = useState(light)

  const toggleTheme = (value: boolean) => {
    //wrote this way to handle a future with many themes
    setAppTheme(value ? dark : light)
  }

  return (
    <IonApp>
      <Grommet theme={appTheme} full>
        <IonReactRouter>
          <Navigation toggleTheme={toggleTheme} />
          <IonTabs>
            <IonRouterOutlet mode='ios' >
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/explore">
                <Explore/>
              </Route>
              <Route path="/notifications">
                <Placeholder title="Notifications" />
              </Route>
              <Route path="/settings">
                <Placeholder title="Settings" />
              </Route>
              <Route path="/post/:id">
                <Post title="Post" />
              </Route>
              <Route exact path="/post">
                <Placeholder title="Post not found" />
              </Route>
              <Route  path="/profile/:id">
                <Profile />
              </Route>
              <Route exact path="/profile">
                <Placeholder title="Profile Not Found" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar className='mobile-tabs' slot="bottom">
              <IonTabButton tab="Home" href="/">
                <HomeIcon color='brand' />
              </IonTabButton>
              <IonTabButton tab="Explore" href="/explore">
                <Search color='brand' />
              </IonTabButton>
              <IonTabButton tab="Notifications" href="/notifications">
                <Notification color='brand' />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </Grommet>
    </IonApp>
  )
};
export default App;
