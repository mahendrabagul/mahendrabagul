import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ReactJson from "react-json-view";

const mahendrabagul =
    {
        "login": "mahendrabagul",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6149190?v=4",
        "url": "https://api.github.com/users/mahendrabagul",
        "html_url": "https://github.com/mahendrabagul",
        "followers_url": "https://api.github.com/users/mahendrabagul/followers",
        "following_url": "https://api.github.com/users/mahendrabagul/following{/other_user}",
        "gists_url": "https://api.github.com/users/mahendrabagul/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mahendrabagul/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mahendrabagul/subscriptions",
        "organizations_url": "https://api.github.com/users/mahendrabagul/orgs",
        "repos_url": "https://api.github.com/users/mahendrabagul/repos",
        "events_url": "https://api.github.com/users/mahendrabagul/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mahendrabagul/received_events",
        "type": "User",
        "name": "Mahendra Hiraman Bagul",
        "company": "https://www.infracloud.io",
        "location": "Pune",
        "email": "bagulm123@gmail.com",
        "hireable": true,
        "bio": "Well, I like to learn and implement different technologies and I always prefer Linux as a platform.",
        "public_repos": 36,
        "public_gists": 0,
        "followers": 2,
        "following": 0,
        "created_at": "2013-12-10T06:41:44Z",
        "updated_at": "2019-12-24T19:01:25Z"
    };

export default function ButtonAppBar() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} md={12}>
                        <Card>
                            <Card.Img variant="top" src={mahendrabagul.avatar_url} width={"100px"}/>
                            <Card.Body>
                                <Card.Title>{mahendrabagul.name}</Card.Title>
                                <Card.Text>
                                    <ReactJson style={{overflowWrap: "break-word"}} src={mahendrabagul} theme="monokai"
                                               enableClipboard={false}
                                               displayObjectSize={false}
                                               displayDataTypes={false}/>
                                </Card.Text>
                                <Button variant="primary">Linkedin</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}