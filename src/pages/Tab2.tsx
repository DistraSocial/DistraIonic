import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Navigation from '../components/Navigation'

import { Box, Sidebar, Button, Text, Footer } from 'grommet'
import { leaf } from 'ionicons/icons';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='content-container' style={{marginTop: '60px'}}>
          Tab2
        </div>
      </IonContent>
    </IonPage>
  );
};



export default Tab2;
