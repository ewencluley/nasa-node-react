import React, { Component } from "react";
import {Col, Image, Jumbotron, Row} from "react-bootstrap";

class RoverImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            photo: null
        };
    }

    componentDidMount() {
        const onerror = error => {
            this.setState({
                isLoaded: true,
                error: error
            });
        };

        fetch("/rover/curiosity/photos")
            .then(res => res.json(), onerror)
            .then(sols_with_photos => {
                const random_index = Math.floor(Math.random() * sols_with_photos.length);
                return sols_with_photos[random_index].sol;
            }, onerror)
            .then(
                (random_sol) => {
                    fetch(`/rover/curiosity/photo/${random_sol}`)
                        .then(res => res.json(), onerror)
                        .then(photos => {
                            this.setState({
                                isLoaded: true,
                                photo: photos[0]
                            });
                        }, onerror);
                }, onerror
            )
    }

    render() {
        const { error, isLoaded, photo } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Row>
                        <Col lg="12">
                            {photo.earth_date}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <Image src={photo.img_src} fluid/>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default RoverImage;