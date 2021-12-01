import React,{useEffect} from 'react'
import { Container ,Spinner} from "react-bootstrap";
import DataItem from "../DataItem/dataItem";

const RightSection = ({data,isloading,filters}) => {

    useEffect(() => {
        console.log(filters);
    }, [data,filters]);

    //? Filter for Frequency
    if(filters.Frequency !== ""){
        data = data.filter((dataItem) => dataItem.Frequency === filters.Frequency);
    }

    //? Filter for Unit
    if(filters.Unit !== ""){
        data = data.filter((dataItem) => dataItem.Unit === filters.Unit);
    }

    //? Filter for Source
    if(filters.Source !== ""){
        data = data.filter((dataItem) => dataItem.Source === filters.Source);
    }

    //? Filter for Sorting
    if(filters.Ascending === "true"){
        data.sort((a,b) => a.Title > b.Title?1:-1);
    }
    else if(filters.Ascending === "false") {
        data.sort((a,b) => a.Title < b.Title?1:-1);
    }

    return (
        isloading ? <Spinner animation="border" /> : 
        data.length === 0 ?<h1 className="text-center mt-5">No Match Found</h1> :
        (
            <Container>
                {data.map((element) => <DataItem key={element._id} dataItem = {element} />)}
            </Container>
        )
    )
};

export default RightSection;

