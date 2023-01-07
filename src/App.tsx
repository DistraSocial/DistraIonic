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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Navigation from './components/Navigation'
import {
  Home,
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
import { Grommet, Header, Text, grommet, Nav, Button } from 'grommet';
const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#818cf8",
      'brand-light': "#eef2ff",
      "text-light": "#94a3b8",
      border: 'lightgray'
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
 
  card: {
    container: {
      border: {
        side: 'bottom'
      }
    },
    footer: {
      
    }
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
      background: 'background-contrast',
      color: 'text',
    },
    pad: 'small',
    margin: {
      horizontal: 'none',
    },
  },
});

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Grommet theme={theme} full>
      <IonReactRouter>
        <Navigation />
        <IonTabs>
          <IonRouterOutlet mode='md' >
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar className='mobile-tabs' slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <Home />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
            <Search />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
            <Notification />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </Grommet>
  </IonApp>
);
export default App;
