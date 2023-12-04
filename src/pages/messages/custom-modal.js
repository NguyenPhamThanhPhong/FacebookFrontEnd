import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './custom-modal.css'

function BasicExample(props) {

    let imageUrl = 'https://s.cystack.net/resource/home/content/05142915/EN_HTTPvsHTTPS_blog.jpg'

    let mystyle= {width: '200px' };



    return (
      <Card style={mystyle}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default BasicExample;