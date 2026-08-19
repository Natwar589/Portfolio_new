import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpeg";
import blog from "../../Assets/Projects/blog.jpg";
import GIF from "../../Assets/Projects/GIF.gif";
import tower from "../../Assets/Projects/hanoi.gif";
import fooddel from "../../Assets/Projects/logo.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="Quick tasks"
              description="QuickTasks is a straightforward and user-friendly todo project designed to help you manage your daily tasks effortlessly."
              ghLink="https://github.com/Natwar589/todo"
              demoLink="https://main--jocular-nougat-7a2f22.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Blog"
              description="It is a simple blog website in which you can add your photo and some text so that it could be read from anywhere, you can see your uploaded blogs from your account"
              ghLink="https://github.com/Natwar589/blog"
              demoLink="https://main--neon-wisp-d59fa1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GIF}
              title="Random GIF"
              description="Generating a random GIF on one click or you can search via search bar,it will generate random gif every time clicking on generate button."
              ghLink="https://github.com/Natwar589/Random-GIf"
              demoLink="https://main--sparkling-beignet-06d709.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tower}
              title="Tower of hanoi"
              description="Tower of hanoi"
              ghLink="https://github.com/Natwar589/tower-of-hanoi"
              demoLink="https://65c46282eef9f03214149772--rad-cuchufli-d4b69d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fooddel}
              title="Food Delivery"
              description="Our food delivery website offers a seamless and convenient way to order your favorite meals from local restaurants. With a user-friendly interface, real-time tracking, and a wide variety of cuisines, we ensure that delicious food is just a few clicks away"
              ghLink="https://github.com/Natwar589/food-delivery"
              demoLink="https://app.netlify.com/sites/rococo-capybara-b352eb/overview"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
