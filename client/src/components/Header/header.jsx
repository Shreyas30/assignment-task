import React,{useState,useEffect} from "react";
import {Navbar,Container,Nav,FormControl,Button,Form } from "react-bootstrap";
import axios from "axios";

const Header = ({setData,setIsLoading}) => {

    const [search, setSearch] = useState("");

    const fetchData = async () => {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:5000/`);
        setData(res.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const searchHandler = async () => {
        if (search.trim() ) {

          setIsLoading(true);
          const res = await axios.get(`http://localhost:5000/search?query=${search}`);
          setData(res.data);
          setIsLoading(false);
        } 
      };

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
            >
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <Button variant="outline-success" onClick={searchHandler} >Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    };

export default Header;
