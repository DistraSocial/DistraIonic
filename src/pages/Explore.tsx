import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, useIonViewWillEnter, useIonViewDidEnter, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import './Home.css';

import { Box, Text, Button, Card, CardHeader, CardFooter, CardBody, Tabs, Tab } from 'grommet'

import PostCard from '../components/PostCard'
import { fetchFeed } from '../DistraJS';
import { distraError } from '../types';
import { useEffect, useState } from 'react';

//FIX FOR DOUBLE FIRING OF USEIONVIEWENTER, IF YOU KNOW OF A FIX...FEEL FREE
let alreadyRan = false;

const Explore = () => {
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
              <Box pad={'small'} gap='medium' width={{ width: '100%' }} direction='column' round>
                <Text margin={{top: 'small'}} weight={'bold'} size='large'>Happening Now</Text>
                <Box round background={'brand-light'} height={{ min: '200px' }} width="100%">


                </Box>
                <Text margin={{top: 'small'}} weight={'bold'} size='large'>Trending Topics</Text>
                {posts.map((post: any, index:number) => {
                  return (
                    <PostCard border={'bottom'} key={index} post={post} />
                  )
                })}
                <Text margin={{top: 'small'}} weight={'bold'} size='large'>Trending Posts</Text>
                {posts.map((post: any, index:number) => {
                  return (
                    <PostCard border={'bottom'} key={index + 10} post={post} />
                  )
                })}
                <Text margin={{top: 'small'}} weight={'bold'} size='large'>Trending Profiles</Text>
                {posts.map((post: any, index:number) => {
                  return (
                    <PostCard border={'bottom'} key={index + 20} post={post} />
                  )
                })}
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



export default Explore;
