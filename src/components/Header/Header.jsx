import React from "react";
import {Navbar,Container,Nav, Row,Col,Button } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar expand="md" className="main-header">
            <Container fluid>
                <Row className="header-row">
                    <Col>
                        <Navbar.Brand href="#home">The F's Company</Navbar.Brand>
                    </Col>
                    <Col className="content-list" md={3}>
                        <Nav>
                            <Nav.Link>
                                Menu
                            </Nav.Link>
                            <Nav.Link>
                                About
                            </Nav.Link>
                            <Nav.Link>
                                Contact Us
                            </Nav.Link>
                            <Button className="order-button">
                                Order Online!
                            </Button>
                        </Nav>
                    </Col>
                
                </Row>
                
                
            </Container>
        </Navbar>
    )
};

export default Header;

