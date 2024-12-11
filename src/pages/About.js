import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container className="my-5 pt-5 p-4">
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>About StudyHub</h2>
          <p>
            StudyHub is a dynamic and user-friendly eLearning platform created with the goal of providing quality education to individuals around the globe. Whether you're a student aiming to learn new skills or a professional seeking to improve your expertise, StudyHub offers an extensive selection of courses tailored to meet the diverse needs of learners.
          </p>
          <p>
            With a focus on interactive learning, StudyHub features a variety of courses, from introductory to advanced levels, across subjects like Programming, Data Science, Business, Design, and more. Our platform ensures a flexible learning experience with video tutorials, hands-on projects, and quizzes to test your knowledge.
          </p>
          <h4>Why Choose StudyHub?</h4>
          <ul>
            <li>Accessible learning anytime, anywhere</li>
            <li>Expert-led courses designed to provide real-world skills</li>
            <li>Interactive content to enhance engagement and knowledge retention</li>
            <li>Affordable pricing to make learning accessible to everyone</li>
          </ul>
          <Link className="btn btn-primary" to={"/courses"}>Explore Our Courses</Link>
        </Col>
        <Col md={6}>
          <Card className="our-mission">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At StudyHub, our mission is to create a learning community where anyone, anywhere, can access high-quality educational resources. We believe that learning should be engaging, flexible, and accessible to everyone, regardless of background or location. With our platform, we aim to empower individuals to reach their full potential and succeed in their personal and professional lives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h3>About the Developer</h3>
          <p>
            StudyHub was built by  <b>Ramy Nady </b>  a passionate software engineer with a strong focus on front-end development. With experience in HTML, CSS, JavaScript, Bootstrap, and React, Ramy  developed StudyHub as a personal project to practice and showcase his skills in web development.
          </p>
          <p>
            Ramy’s journey in the tech world started with a deep interest in programming and design. He continues to improve his skills while creating meaningful projects like StudyHub, a platform dedicated to making education more accessible to everyone. Through this project, Rami hopes to contribute to the growing field of eLearning, offering learners a valuable resource for their educational needs.
          </p>
          <Button variant="secondary" href="https://t.me/ramynady8" target='_blank'>Contact the Developer</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;

