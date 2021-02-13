import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap';
import './Portfolio.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
    useEffect (() => {
        Aos.init({ duration: 2000 });
      }, []);
    
    return(
      <Container>
        <a href="https://rifo733.github.io/password-generator.github.io/">
        <Card data-aos="fade-left">
        <Card.Img variant="top" src="https://i.imgur.com/sw9HYV1.png" alt="res"/> 
      </Card>
      </a>
     <br />
     <a href="https://rifo733.github.io/Homework01.github.io/">
      <Card data-aos="fade-right">
        <Card.Img variant="bottom" src="https://i.imgur.com/tNwwmZD.png" alt="res"/>
      </Card> 
      </a>
      <br />
      <a href="https://cmac2617.github.io/Project-1/">
      <Card data-aos="fade-left">
        <Card.Img variant="bottom" src="https://i.imgur.com/nMgmc6V.png" alt="res"/>
      </Card> 
      </a>
      <br />
      <a href="https://github.com/RiFo733/loaded">
      <Card data-aos="fade-right">
        <Card.Img variant="bottom" src="https://raw.githubusercontent.com/RiFo733/loaded/main/public/assets/images/LOADED.png" />
      </Card> 
      </a>
      <br />
      <Card data-aos="fade-left">
        <Card.Img variant="bottom" src="https://i.imgur.com/CKhYKGQ.jpeg" alt="res"/>
      </Card> 
      <br />
      </Container>
        );
}

export default Portfolio;