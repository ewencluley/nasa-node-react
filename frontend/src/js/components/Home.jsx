import React, { Component } from "react";
import RoverImage from './RoverImage.jsx';
import Header from "./Header.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Tweet from "./Tweet";

class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Row>
                    <Col lg="6">
                        <RoverImage/>
                    </Col>
                    <Col lg="6">
                        <Tweet/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;