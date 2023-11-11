import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardCom({title, text, imgUrl}) {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{ title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCom;