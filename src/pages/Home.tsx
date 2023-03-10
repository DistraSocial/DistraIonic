import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, useIonViewWillEnter, useIonViewDidEnter, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import './Home.css';

import { Box, Text, Button, Card, CardHeader, CardFooter, CardBody, Tabs, Tab, Spinner } from 'grommet'

import PostCard from '../components/PostCard'
import { fetchFeed } from '../DistraJS';
import { distraError } from '../types';
import { useEffect, useState } from 'react';

//FIX FOR DOUBLE FIRING OF USEIONVIEWENTER, IF YOU KNOW OF A FIX...FEEL FREE
let alreadyRan = false;

const Home = () => {
  const [posts, setPosts] = useState([])
  const [fetchFailed, setFetchFailed] = useState(false)


  useIonViewWillEnter(() => {
    if (alreadyRan != true) {
      getPosts(0)
      alreadyRan = true
    }

  });

  const getPosts = (startPos: number) => {
    setFetchFailed(false)
    fetchFeed(startPos)
      .then((newPosts: any) => {
        const updatedPostArray = posts.concat(newPosts)
        setPosts(updatedPostArray)
      })
      .catch((error: distraError) => {
        console.log(error)
        setFetchFailed(true)
      })
  }



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
                {posts.length > 0 ? <></> :
                  <Box pad={'medium'} justify='center' align='center'>
                    <Spinner
                      border={[
                        { side: 'all', color: 'background-contrast', size: 'medium' },
                        { side: 'right', color: 'brand', size: 'medium' },
                        { side: 'top', color: 'brand', size: 'medium' },
                        { side: 'left', color: 'brand', size: 'medium' },
                      ]} />
                  </Box>}
                {posts.map((post: any, index: number) => {
                  return (
                    <PostCard border={'bottom'} key={index} post={post} />
                  )
                })}
                <IonInfiniteScroll
                  onIonInfinite={(ev) => {
                    getPosts(posts.length);
                  }}
                >
                  {fetchFailed ?
                    <Box pad={{ vertical: 'large' }} align='center' justify='center' width={'100%'}>
                      <Text margin={{ bottom: 'small' }}>Failed to retrieve posts</Text>
                      <Button onClick={() => { getPosts(posts.length) }} secondary color={'brand'}>Try Again</Button>
                    </Box>
                    :
                    <IonInfiniteScrollContent />}

                </IonInfiniteScroll>

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
