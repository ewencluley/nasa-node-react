import React, { Component } from "react";
import {Col, Row} from "react-bootstrap";
import {Helmet} from "react-helmet/es/Helmet";

class Tweet extends Component {

    render() {
        return (
            <div>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Get your geek on: Help <a
                        href="https://twitter.com/NASA?ref_src=twsrc%5Etfw">@NASA</a> name the next Mars rover. Cast your vote by Jan. 26
                        at <a href="https://t.co/7fhWVGF7TQ">https://t.co/7fhWVGF7TQ</a> <a
                            href="https://twitter.com/hashtag/Mars2020?src=hash&amp;ref_src=twsrc%5Etfw">#Mars2020</a> <a
                            href="https://t.co/CVBd2a5E9B">pic.twitter.com/CVBd2a5E9B</a></p>&mdash; Curiosity Rover (@MarsCuriosity) <a
                        href="https://twitter.com/MarsCuriosity/status/1219792769272684545?ref_src=twsrc%5Etfw">January 22, 2020</a>
                    </blockquote>
                <Helmet>
                    <script
                    async
                    src = "https://platform.twitter.com/widgets.js"
                    charSet = "utf-8" > </script>
                </Helmet>
            </div>
        );
    }
}

export default Tweet;

