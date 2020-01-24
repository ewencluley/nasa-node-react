import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Col, Image, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Row>
                <Col lg="12">
                    <Image src = "img/header.png" fluid />
                </Col>
            </Row>
        );
    }
}

export default Header;