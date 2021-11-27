import React from "react";
import { Container ,Spinner} from "react-bootstrap";
import DataItem from "../DataItem/dataItem";

const Main = ({data,isloading}) => {
    
    return(
        isloading ? <Spinner animation="border" /> : 
        data.length === 0 ?<h1 className="text-center mt-5">No Match Found</h1> :
        (
            <Container>
                {data.map((element) => <DataItem key={element._id} dataItem = {element} />)}
            </Container>
        )
    );
}

export default Main;