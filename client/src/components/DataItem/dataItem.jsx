import React,{useState} from "react";
import { Card,Button } from "react-bootstrap";
import "./style.css";

const DataItem = ({dataItem,key}) => {
  
  const [readMore, setReadMore] = useState(false);

  const clickHandler = (e) => {
    setReadMore(!readMore);
  }
  return (
    <Card className="my-2" >
      <Card.Body>
        <Card.Title>{dataItem.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dataItem.Unit}, {dataItem.Frequency}, {dataItem.Source}</Card.Subtitle>
        <Card.Text>
         { readMore? `${dataItem.Description}`:
          `${dataItem.Description.slice(0,250)}......`
        }
        </Card.Text>
       <Button variant="secondary" className="btn btn-sm box-shadow-none"onClick={clickHandler}>
        { readMore? "Read Less" : "Read More" }
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DataItem;
