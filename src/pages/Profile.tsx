import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css'
import { Box, Sidebar, Button, Text, Tab, Tabs } from 'grommet'
import PostCard from '../components/PostCard'
import {
  FormPrevious
} from 'grommet-icons';
import { useHistory } from "react-router-dom";
import { examplePost } from '../tempTest/generatePosts';
interface ContainerProps {
  title: string;
}

const Profile: React.FC<ContainerProps> = ({ title }) => {
  let history = useHistory();
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
            <Box className='profile-background' background={'brand'} height="20vh" width='100%'>
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
                    <Text weight={'bold'} color={'brand-light'}>Profile</Text>
                  </Box>
                </Box>
              </Box>
              <Box pad={{ vertical: 'small' }} background='brand-light' justify='center' className='profile-info' direction='row'>
                <Box width={{ max: '600px', width: '100%' }} direction="row" justify='between'>
                  <Box direction='row' pad={'small'} width={{ min: "100px" }}>

                    <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
                    <Box justify='center' pad={{ left: 'small' }}>
                      <Text truncate weight={'bold'} size={"medium"}>Allison Frederick</Text>
                      <Text truncate color={'text-light'} size={"xsmall"}>lmontera@offsite.net</Text>
                    </Box>
                  </Box>
                  <Box direction='row' justify='evenly' align='end'>
                    <Button hoverIndicator>
                      <Box border={'right'} pad={{ vertical: 'small', horizontal: 'medium' }} justify='center' align='center'>
                        <Text size='medium' weight={'bolder'} >202</Text>
                        <Text size='xsmall'>Followers</Text>
                      </Box>
                    </Button>
                    <Button hoverIndicator>
                      <Box pad={{ vertical: 'small', horizontal: 'medium' }} justify='center' align='center'>
                        <Text size='medium' weight={'bolder'} >134</Text>
                        <Text size='xsmall'>Following</Text>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box width={{ max: '600px', width: '100%' }} direction="column">
              <Box margin={{ top: 'small', bottom: 'small' }} gap='small' pad={{ horizontal: 'small', vertical: 'small' }} direction='column' width={'100%'} justify='center' align='start'>
                <Text size='small'>💻 Software Developer in ATL | Opinions are my own and not the views of my employer</Text>
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
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
                <PostCard post={examplePost} />
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



export default Profile;
