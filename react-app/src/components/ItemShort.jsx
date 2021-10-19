import {Link} from "react-router-dom";
import {Card} from 'react-bootstrap';
export default function ItemShort(props) {
  const url="/s/"+props.item.id;
  const tagurl="/t/"+props.item.tag;
  return(
<Card style={{ width: '18rem' }}>
    <Link to={url}>
        <Card.Img variant="top" src={props.item.imgurl} />
    </Link>
    <Card.Link href={tagurl}>
        More {props.item.tag}
    </Card.Link>
  <Card.Body>
    <Card.Title>{props.item.title}</Card.Title>
    <Card.Text>
     {props.item.text}
    </Card.Text>
    <Card.Link href={url}>Link To This Item</Card.Link>
  </Card.Body>
  <Card.Footer className="text-muted">{props.item.posted}</Card.Footer>
</Card>
  );
   
}
