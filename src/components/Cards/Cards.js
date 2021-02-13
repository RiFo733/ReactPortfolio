import React from 'react'
import './Cards.css';
import { Card, Container, Row } from 'react-bootstrap';

export default function Cards() {

  return (
<div className="container">
    <div className="card flex-row flex-items">
    <Card.Img variant="left" src="https://i.imgur.com/JNGsnp5.jpg" />
        <div className="card-block px-2">
            <h4 className="card-title">About Me</h4>
            <p className="card-text">Hello there! I'm Richard Font and have spent most of my career in law enforecement.
            I'm currently starting a new path in web development and hoping to keep growing and face a new set of challenges</p>
        </div>
        <div className="w-60"></div>
    </div>
</div>
    /* <Container>
      <Row>
        <Card>
        <div class="col-md-6">
          <Card.Img variant="left" src="https://i.imgur.com/JNGsnp5.jpg" />
          </div>
          <div class="col-md-6">
          <Card.Body>
            <Card.Text>
              <h1>About Me</h1>
              <p>Hello there! I'm Richard Font and have spent most of my career in law enforecement.
            I'm currently starting a new path in web development and hoping to keep growing and face a new set of challenges.</p>
            </Card.Text>
          </Card.Body>
          </div>
        </Card>
      </Row>
    </Container> */

  );

}