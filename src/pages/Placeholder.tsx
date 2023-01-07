import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Navigation from '../components/Navigation'

import { Box, Sidebar, Button, Text, Footer } from 'grommet'
import { leaf } from 'ionicons/icons';

interface ContainerProps {
  title: string;
}

const Placeholder: React.FC<ContainerProps> = ({title}) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Box background={'background'} direction='row' className='content-container' style={{marginTop: '60px'}}>
          <Box direction='column' gap='medium' justify='center' align='center' height={{min: 'calc(100vh - 60px)'}} width={{min: '100%'}}>
          <Text weight={'bold'} color={'brand'} size='xxlarge'>{title}</Text>
          <Text size='large'>Placeholder</Text>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
};



export default Placeholder;
