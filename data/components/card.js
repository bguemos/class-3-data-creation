import * as React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = () => (
  <Card>
    <Card.Title title="Digital Asset Integration"left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Discover programming and Java</Text>
      <Text variant="bodyMedium">More information in the dashboard</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/id/5/5000/3334' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>





);




export default MyCard;