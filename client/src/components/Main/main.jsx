import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import RightSection from "../RightSection/rightSection";
import LeftSection from "../LeftSection/leftSection";

const Main = ({ data, isloading }) => {
  
  const initialFilters = {
    Ascending:undefined,
    Frequency:"",
    Unit:"",
    Source:""
  }

  const [filters, setFilters] = useState(initialFilters);
  
  return (
    <Container>
      <Row>
        <Col md={3}>
          <LeftSection setFilters={setFilters} />
        </Col>
        <Col md={9}>
          <RightSection data={data} isloading={isloading} filters={filters} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
