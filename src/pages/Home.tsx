import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react';
import './Home.css';

import { Box, Text, Button, Card, CardHeader, CardFooter, CardBody, Tabs, Tab } from 'grommet'

import PostCard from '../components/PostCard'

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <Box background={'background'} direction='row' className='content-container' style={{ marginTop: '60px' }}>
          <div className='content-window'>
            <Box width={{ max: '600px', width: '100%' }} direction="column">

              <Box align="center" width={{ width: '100%' }} pad={{ top: 'medium', bottom: 'small' }}>
                <Tabs style={{ width: '100%' }} justify="center">
                  <Tab color='brand' style={{ width: '50%', textAlign: 'center' }} title="For You">
                  </Tab>
                  <Tab style={{ width: '50%', textAlign: 'center' }} title="Groups">
                  </Tab>
                </Tabs>
              </Box>
              <Box gap='medium' width={{ width: '100%' }} direction='column' round>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
              </Box>
            </Box>

          </div>
          <div className='content-right'>
            <Box round pad={{ vertical: 'medium' }} width={{ width: '100%' }} direction='column' background='brand-light'>
              <Box pad={'small'}><Text weight={'bold'}>Who to follow</Text></Box>
              <Button hoverIndicator >
                <Box direction='row' pad={'small'} width={{ min: "100px" }}>

                  <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
                  <Box justify='center' pad={{ left: 'small' }}>
                    <Text truncate weight={'bold'} size={"small"}>Allison Frederick</Text>
                    <Text truncate color={'text-light'} size={"xsmall"}>allison@distra.com</Text>
                  </Box>
                </Box>
              </Button>
              <Button hoverIndicator >
                <Box direction='row' pad={'small'} width={{ min: "100px" }}>

                  <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
                  <Box justify='center' pad={{ left: 'small' }}>
                    <Text truncate weight={'bold'} size={"small"}>Lissa Montera</Text>
                    <Text truncate color={'text-light'} size={"xsmall"}>lmontera@offsite.net</Text>
                  </Box>
                </Box>
              </Button>
              <Button hoverIndicator >
                <Box direction='row' pad={'small'} width={{ min: "100px" }}>

                  <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
                  <Box justify='center' pad={{ left: 'small' }}>
                    <Text truncate weight={'bold'} size={"small"}>Ryan K.</Text>
                    <Text truncate color={'text-light'} size={"xsmall"}>everythingiscool@distra.com</Text>
                  </Box>
                </Box>
              </Button>
            </Box>
            <Box pad={'small'} wrap direction='row' width={{ min: '100%' }}>
              <Text style={{ paddingRight: 9 }} size='xsmall' color={'text-light'}>Terms of Service</Text>
              <Text style={{ paddingRight: 9 }} size='xsmall' color={'text-light'}>Privacy Policy</Text>
              <Text style={{ paddingRight: 9 }} size='xsmall' color={'text-light'}>Cookie Policy</Text>
              <Text style={{ paddingRight: 9 }} size='xsmall' color={'text-light'}>Github</Text>
              <Text style={{ paddingRight: 9 }} size='xsmall' color={'text-light'}>Accessibility</Text>
            </Box>
            <Box pad={'small'} wrap direction='row' gap='small' width={{ min: '100%' }}>
              <Text size='xsmall' color={'brand'}>Distra Developers</Text>
              <Text size='xsmall' color={'brand'}>Distra Contributers</Text>
            </Box>
          </div>
        </Box>
      </IonContent>
    </IonPage>
  );
};



export default Home;
