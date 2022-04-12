import React from "react";
import { Container, HeadText, Image, Sıra, Span } from "./style";
import CodeImage from "../../assets/coding.svg";

const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(66, 167, 191)", height:'110vh'} }>
      <Image src={CodeImage} />
      <HeadText>
        About Full Stack Developer<Span>Naim GEDİKLİ</Span>
      </HeadText>
      <Container>
        <Sıra>Hi I'm Naim</Sıra>
        <Sıra>I’m currently learning Full-Stack Development Languages.</Sıra>
        <Sıra>I know JS, ReactJS, Django, Bootstrap,SASS Python, HTML, CSS, SQL</Sıra>
        <Sıra><Span>Send email:</Span>naimgedikli01@gmail.com</Sıra>
            
       
      </Container>
    </div>
  );
};

export default About;