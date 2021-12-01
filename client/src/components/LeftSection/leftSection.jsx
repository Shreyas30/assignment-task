import React from "react";
import { Form, Accordion } from "react-bootstrap";
import "./style.css";

const LeftSection = ({ setFilters }) => {
  const handleChange= (e) => {
        setFilters((prev) => ({...prev,[e.target.name]:e.target.value}));
  };
  
  return (
    <div className="mt-2 p-4 border border-rounded" id="left-section">
      <h3>Refine Your Search</h3>
      <hr />
      <h5>Properties</h5>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Frequency</Accordion.Header>
          <Accordion.Body>
            <Form>
                <Form.Check type="radio" key="1" label="Monthly" value="Monthly" name="Frequency"  onChange={handleChange} />
                <Form.Check type="radio" key="2" label="Yearly" value="Yearly" name="Frequency"  onChange={handleChange} />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Unit</Accordion.Header>
          <Accordion.Body>
          <Form>
                <Form.Check type="radio" key="1" label="Index" value="Index" name="Unit" onChange={handleChange} />
                <Form.Check type="radio" key="2" label="Number" value="Number" name="Unit" onChange={handleChange}/>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Source</Accordion.Header>
          <Accordion.Body>
          <Form>
                <Form.Check type="radio" key="1" label="CSO" value="CSO" name="Source" onChange={handleChange}/>
                <Form.Check type="radio" key="2" label="CSO1" value="CSO1" name="Source" onChange={handleChange}/>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h5 className="mt-4">Sorting</h5>
      <Form>
        <Form.Check type="radio" key="1" label="Ascending" name="Ascending" value={true} onChange={handleChange} />
        <Form.Check type="radio" key="2" label="Descending" name="Ascending" value={false} onChange={handleChange} />
      </Form>
    </div>
  );
};

export default LeftSection;
