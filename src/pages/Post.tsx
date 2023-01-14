import { IonContent, IonPage, IonSkeletonText, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import './Profile.css'
import { Box, Button, Text, } from 'grommet'
import PostCard from '../components/PostCard'
import {
  FormPrevious
} from 'grommet-icons';
import { useHistory, useParams } from "react-router-dom";
import { useState } from 'react';
import { distraError } from '../types';
import { fetchPost } from '../DistraJS';
import { Post as PostType } from '../types'
let alreadyRan = false;

const Post = (props: any) => {
  const [post, setPost] = useState<PostType>()
  const [postReplies, setPostReplies] = useState<PostType[]>()
  const [fetchFailed, setFetchFailed] = useState(false)
  const [postError, setPostError] = useState<distraError>()

  let history = useHistory();
  const goback = () => {
    history.goBack();
  }
  const navigate = (link: string) => {
    history.push(link)
  }

  //@ts-ignore
  let { id } = useParams();


  useIonViewWillEnter(() => {
    //TODO - UNSURE WHY THIS IS NEEDED
    id = history.location.pathname.replace('/post/', '')
    if (alreadyRan != true) {
      getPost(id)
      alreadyRan = true
    }
  });
  useIonViewWillLeave(() => {
    setPost(undefined)
    alreadyRan = false
    setPostReplies(undefined)

  });

  const getPost = (postAddress: string) => {
    setPostError(undefined)
    setFetchFailed(false)
    setPostReplies(undefined)
    fetchPost(id + '')
      .then((fetchedPost: any) => {
        setPost(fetchedPost)
        setPostReplies(fetchedPost.replies)
      })
      .catch((error: distraError) => {
        console.log(error)
        setFetchFailed(true)
        setPostError(error)
      })
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Box height={{ min: 'calc(100vh - 60px)' }} background={'background'} direction='row' className='content-container' style={{ marginTop: '60px' }}>
          <div className='content-window'>
            {postError ?
              <Box justify='center' align='center' width={'100%'} height={'50%'}>
                <Text size='xxlarge' weight={'bolder'} color={'brand'}>{postError.errorCode}</Text>
                <Text margin={{ bottom: 'medium' }} size='large' color={'border'}>{postError.userMessage}</Text>
                {postError.errorCode != '404' ? <Button color={'brand'} onClick={() => { getPost(id) }}>Try Again</Button> : <Button color={'brand'} onClick={() => { history.push('/') }}>Go Home</Button>}
              </Box>
              :
              <>
                <Box className='' width='100%'>
                  <Box pad={{ vertical: 'small' }} justify='center' direction='row'>
                    <Box width={{ max: '600px', width: '100%' }} direction="row" align='center' justify='between'>
                      <Box direction='row' pad={'small'} width={{ min: "100px" }}>
                        <Button hoverIndicator onClick={() => { goback() }} primary color={'brand-light'}>
                          <Box direction='row' align='center' justify='evenly' pad={{ right: 'medium' }}>
                            <FormPrevious size='30px' color='brand' />
                            <Text weight={'bold'} color='brand' size='small'>Back</Text>
                          </Box>
                        </Button>

                      </Box>
                    </Box>
                  </Box>

                </Box>

                <Box width={{ max: '600px', width: '100%' }} direction="column">
                  <Box pad={{ top: 'small' }} width={{ width: '100%' }} direction='column' round>
                    <Box pad={{ bottom: 'small' }}>
                      {!post
                        ?
                        <IonSkeletonText animated={true} style={{ 'width': '60%', 'height': '40px', borderRadius: '5px' }}></IonSkeletonText>
                        :
                        <Text truncate weight={'bolder'} size='large'>{post?.originalPost?.userName ? post?.originalPost?.userName : post?.userName}'s Post</Text>}
                    </Box>
                    {post?.originalPost?.postAddress ? <PostCard border post={post.originalPost} /> : <></>}

                    {post ? <PostCard post={post} /> : <IonSkeletonText animated={true} style={{ 'width': '100%', 'height': '200px', borderRadius: '5px' }}></IonSkeletonText>}


                    <Box background={'border'} height={'1px'} width={{ min: '100%' }}>
                    </Box>
                    {postReplies ?
                      <Box pad={'small'}>
                        <Text weight={'bold'} size='large'>Replies</Text>
                      </Box> : <></>}

                    {postReplies ? postReplies?.map((reply, index) => {
                      return (
                        <PostCard border="bottom" key={index} post={reply} />
                      )
                    }) : <></>}



                  </Box>
                </Box>
              </>}
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



export default Post;
