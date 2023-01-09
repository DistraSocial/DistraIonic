import { IonContent, IonPage, useIonViewWillEnter, IonInfiniteScroll, IonInfiniteScrollContent, useIonViewDidLeave, useIonViewWillLeave } from '@ionic/react';
import './Profile.css'
import { Box, Button, Text, Tab, Tabs } from 'grommet'
import PostCard from '../components/PostCard'
import {
  FormPrevious
} from 'grommet-icons';
import { useHistory, useParams } from "react-router-dom";
import { useState } from 'react';
import { fetchProfile } from '../DistraJS';
import { distraError, Profile as ProfileType } from '../types';

interface ContainerProps {
  title: string;
}

const Profile: React.FC<ContainerProps> = ({ title }) => {
  const [profile, setProfile] = useState<ProfileType>()
  const [fetchFailed, setFetchFailed] = useState(false)
  //@ts-ignore
  let { userAddress } = useParams();
  let history = useHistory();

  useIonViewWillEnter(() => {

      getProfile(userAddress)

  });
  useIonViewWillLeave(() => {
    setProfile(undefined)
});

  const getProfile = (userAddress: string) => {
    setFetchFailed(false)
    fetchProfile(userAddress)
      .then((fetchedProfile: any) => {
        console.log(fetchedProfile)
        setProfile(fetchedProfile)
      })
      .catch((error: distraError) => {
        console.log(error)
        setFetchFailed(true)
      })
  }


  const goback = () => {
    history.goBack();
  }
  const navigate = (link: string) => {
    history.push(link)
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <Box height={{ min: 'calc(100vh - 60px)' }} background={'background'} direction='row' className='content-container' style={{ marginTop: '60px' }}>
          <div className='content-window'>
            {profile ?
              <>
                <Box className='profile-background'  style={{backgroundImage: 'url(' + profile.userBackground + ')'}}  height="20vh" width='100%'>
                  <Box pad={{ vertical: 'small' }} justify='center' className='profile-options' direction='row'>
                    <Box width={{ max: '600px', width: '100%' }} direction="row" align='center' justify='between'>
                      <Box direction='row' pad={'small'} width={{ min: "100px" }}>
                        <Button onClick={() => { goback() }} primary color={'brand-light'}>
                          <Box direction='row' align='center' justify='evenly' pad={{ right: 'medium' }}>
                            <FormPrevious size='30px' color='brand' />
                            <Text weight={'bold'} color='brand' size='small'>Back</Text>
                          </Box>
                        </Button>

                      </Box>
                      <Box pad={{ right: 'medium' }} direction='row' justify='evenly' align='end'>
                      </Box>
                    </Box>
                  </Box>
                  <Box background='brand-light-transparent' justify='center' className='profile-info' direction='row'>
                    <Box width={{ max: '600px', width: '100%' }} direction="row" justify='between'>
                      <Box direction='row' pad={'small'} width={{ min: "100px" }}>

                        <div className='profile-picture' style={{backgroundImage: 'url(' + profile.userPicture + ')'}}></div>

                      </Box>
                      <Box direction='row' justify='evenly' align='end'>
                        <Button hoverIndicator>
                          <Box border={'right'} pad={{ vertical: 'small', horizontal: 'medium' }} justify='center' align='center'>
                            <Text  size='medium' weight={'bolder'} >{profile.followers ? profile.followers.length : 0}</Text>
                            <Text size='xsmall'>Followers</Text>
                          </Box>
                        </Button>
                        <Button hoverIndicator>
                          <Box pad={{ vertical: 'small', horizontal: 'medium' }} justify='center' align='center'>
                            <Text size='medium' weight={'bolder'} >{profile.followers ? profile.followers.length : 0}</Text>
                            <Text size='xsmall'>Following</Text>
                          </Box>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box width={{ max: '600px', width: '100%' }} direction="column">
                  <Box margin={{ top: 'small', bottom: 'small' }} gap='small' pad={{ horizontal: 'small', vertical: 'small' }} direction='column' width={'100%'} justify='center' align='start'>
                    <Box justify='center'>
                      <Text truncate weight={'bold'} size={"large"}>{profile ? profile.userName : ''}</Text>
                      <Text truncate color={'text-light'} size={"small"}>{profile ? profile.userAddress : ''}</Text>
                    </Box>
                    <Text size='small'>{profile.bio ? profile.bio : ''}</Text>
                  </Box>
                  <Box align="center" width={{ width: '100%' }} pad={{ top: 'medium', bottom: 'small' }}>
                    <Tabs style={{ width: '100%' }} justify="center">
                      <Tab color='brand' style={{ width: '33%', textAlign: 'center' }} title="Posts">
                      </Tab>
                      <Tab style={{ width: '33%', textAlign: 'center' }} title="Replies">
                      </Tab>
                      <Tab style={{ width: '33%', textAlign: 'center' }} title="Media">
                      </Tab>
                    </Tabs>
                  </Box>
                  <Box gap='medium' width={{ width: '100%' }} direction='column' round>

                  </Box>
                </Box>
              </>
              :
              <></>
            }
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



export default Profile;
