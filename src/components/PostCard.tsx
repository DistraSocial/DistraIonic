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

const ExploreContainer: React.FC = () => {

  let history = useHistory();

  const sidebarNavigate = (link: string) => {
    history.push(link)
  }

  return (
    <Card className='card' round="xsmall" width={{ min: '100%' }} elevation='none'>
    <Box onClick={() => { sidebarNavigate('/post') }} tabIndex={0} className='card-button'></Box>
    <CardHeader className='' pad={{ horizontal: 'medium', top: 'small' }}>
      <Box width={{ min: '100%' }} direction='row' justify='between'>
        <Button onClick={() => { sidebarNavigate('/profile') }} className='top-button' plain >
          <Box direction='row' width={{ min: "100px" }}>

            <div style={{ width: '40px', height: '40px', background: 'lightgrey', borderRadius: 10 }}></div>
            <Box justify='center' pad={{ left: 'small' }}>
              <Text weight={'bold'} size={"small"}>Allison Frederick</Text>
              <Text color={'text-light'} size={"xsmall"}>allison@distra.com</Text>
            </Box>
          </Box>
        </Button>
        <Button className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<More />}></Button>
      </Box>
    </CardHeader>
    <CardBody gap='small' pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Text size='small'>It’s crazy that we are now closer to the year 2050 than we are to the year 2015</Text>
      <Text color={'text-light'} size='xsmall'>3 Minutes Ago</Text>
    </CardBody>
    <CardFooter justify='between' direction='row' pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Box wrap direction='row' justify='start'>
        <Button style={{marginTop: 5, marginRight: 5}} plain className='top-button' onClick={() => { sidebarNavigate('/options') }}>
          <Box background={'light-3'} round gap='small' justify='center' align='center' direction='row' pad={{horizontal: 'small', vertical: 'xsmall'}}><Text color={'brand'} size='small'>😂 234</Text></Box>
        </Button>
        <Button style={{marginTop: 5, marginRight: 5}}  plain className='top-button' onClick={() => { sidebarNavigate('/options') }}>
          <Box background={'light-3'} round  justify='center' align='center' direction='row' pad={{horizontal: 'small', vertical: 'xsmall'}}><Text color={'brand'} size='small'>🤨 32</Text></Box>
        </Button>
        <Button style={{marginTop: 5, marginRight: 5}}  plain className='top-button' onClick={() => { sidebarNavigate('/options') }}>
          <Box background={'light-3'} round gap='small' justify='center' align='center' direction='row' pad={{horizontal: 'small', vertical: 'xsmall'}}><Text color={'brand'} size='small'>🫠 13</Text></Box>
        </Button>
        <Button style={{marginTop: 5, marginRight: 5}}  plain className='top-button' onClick={() => { sidebarNavigate('/options') }}>
          <Box background={'light-3'} round gap='small' justify='center' align='center' direction='row' pad={{horizontal: 'small', vertical: 'xsmall'}}><Text color={'brand'} size='small'>🤮 5</Text></Box>
        </Button>
      </Box>
      <Box direction='row' justify='end' gap='medium'>
        <Button size='small' plain className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Bookmark/>}></Button>
        <Button size='small' plain className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Cycle />}></Button>
        <Button size='small' plain className='top-button' onClick={() => { sidebarNavigate('/options') }} icon={<Chat />}></Button>
      </Box>
    </CardFooter>
  </Card>
  );
};

export default ExploreContainer;
