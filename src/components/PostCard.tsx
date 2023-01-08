import './ExploreContainer.css';
import './PostCard.css'
import { Box, Button, Text, Card, CardHeader, CardFooter, CardBody } from 'grommet'
import { useHistory } from "react-router-dom";
import {
  More,
  Cycle,
  Chat,
  Bookmark
} from 'grommet-icons';
import { formatPostedTime } from '../helpers/formatDates';
const ExploreContainer = (props: any) => {

  let history = useHistory();

  const sidebarNavigate = (link: string) => {
    history.push(link)
  }

  return (
    <Card className='card' round="xsmall" width={{ min: '100%' }} elevation='none'>
      <Box hoverIndicator onClick={() => { sidebarNavigate('/post') }} tabIndex={0} className='card-button'></Box>
      <CardHeader className='' pad={{ horizontal: 'medium', top: 'small' }}>
        <Box width={{ min: '100%' }} direction='row' justify='between'>
          <Button hoverIndicator onClick={() => { sidebarNavigate('/profile') }} className='top-button' >
            <Box direction='row' width={{ min: "100px" }}>

              <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
              <Box justify='center' pad={{ left: 'small' }}>
                <Text weight={'bold'} size={"small"}>{props.post.userName}</Text>
                <Text color={'text-light'} size={"xsmall"}>{props.post.userAddress}</Text>
              </Box>
            </Box>
          </Button>
          <Button hoverIndicator className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<More />}></Button>
        </Box>
      </CardHeader>
      <CardBody gap='small' pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Text className='top-button' size='small'>{props.post.mediaText}</Text>
        <Text className='top-button' color={'text-light'} size='xsmall'>{formatPostedTime(props.post.updatedAt)}</Text>
      </CardBody>
      <CardFooter justify='between' direction='row' pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Box wrap direction='row' justify='start'>

          {props.post.reactions.map((reaction:any) => {
            return (
              <Button key={reaction.count + Math.random()*100} style={{ marginTop: 5, marginRight: 5 }} plain className='top-button' onClick={() => { sidebarNavigate('/options') }}>
                <Box background={'brand-light'} round gap='small' justify='center' align='center' direction='row' pad={{ horizontal: 'small', vertical: 'xsmall' }}><Text color={'brand'} size='small'>{reaction.emoji} {reaction.count}</Text></Box>
              </Button>
            )
          })}
        </Box>
        <Box direction='row' justify='end' gap='medium'>
          <Button hoverIndicator size='small' className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Bookmark />}></Button>
          <Button hoverIndicator size='small' className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Cycle />}></Button>
          <Button hoverIndicator size='small' className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Chat />}></Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default ExploreContainer;
