import {Card, Col, Container, Row} from "react-bootstrap";
import ReactJson from "react-json-view";
import React, { Component } from 'react';
export default class Content extends Component {

    state = {
        mahendrabagul: {}
    }
    componentDidMount(){
        fetch('https://api.github.com/users/mahendrabagul')
        .then(res => res.json())
        .then((data) => {
            this.setState({ mahendrabagul: data })
        }).catch(console.log)
    }
    render(){
        return (
            <span class="border">
                <Container fluid>
                    <Row>
                        <Col sm={12} md={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.state.mahendrabagul.name}</Card.Title>
                                    <Card.Text>
                                        <ReactJson style={{overflowWrap: "break-word"}} src={this.state.mahendrabagul} theme="monokai"
                                                   enableClipboard={false}
                                                   displayObjectSize={false}
                                                   displayDataTypes={false}/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </span>
        );
    }
}
    
