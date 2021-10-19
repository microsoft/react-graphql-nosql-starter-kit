import { useParams } from 'react-router';
import { Spinner , Container } from 'react-bootstrap';
import ItemShort from "./ItemShort";
import { useQuery, gql} from "@apollo/client";



const ALLITEM_QUERY=gql`
query {
  items:getAllItems {
    title
    text posted
    id tag imgurl
  }
}
`;

const TAGGEDITEMQUERY = gql`
query ($tname:String) {
  items:getAllTaggedItems(tag:$tname) {
    title
    text posted
    id tag imgurl
  }
}
`;


export default function ItemList() {
  let { tname } = useParams();
  const QUERY=tname?TAGGEDITEMQUERY:ALLITEM_QUERY;
  const { loading, error, data } = useQuery(QUERY,{variables:{tname:"random"}});
  if (loading) return (
  
    <Container>
      <Spinner animation="border" />
    </Container>
  
  );
  if (error){ 
    console.log(error)  ;
    return <p>Error Fetching Items :(</p>;}
  
  let items=data.items.map((i)=>{return (<ItemShort key={i.id} item={i}/>);});;
  return(
   <Container>
      {items}
   </Container>
  
  );
}