import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Todo App"
              description="A To-Do App is a simple task management application that allows users to add, edit, delete, and mark tasks as completed. It helps users stay organized by keeping track of their daily tasks."
              ghLink="https://github.com/GovindaReddyGariMohan/TodoApp"
              demoLink="https://govindareddygarimohan.github.io/TodoApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce Website"
              description="An E-commerce Website is an online platform that allows users to browse, search, and purchase products from various categories. It provides a seamless shopping experience with features like product listings, a shopping cart, and secure checkout."
              ghLink="https://github.com/GovindaReddyGariMohan/mohan-store"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Travel Website"
              description="A Travel Website is an online platform that helps users explore, plan, and book trips to various destinations"
              ghLink="https://github.com/GovindaReddyGariMohan/tours-travels"
              demoLink="https://govindareddygarimohan.github.io/tours-travels/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restaurant Menu Application"
              description="A Restaurant Menu Application is a digital platform that allows customers to browse food items, view prices, and place orders from a restaurant's menu. It enhances the dining experience by providing an interactive and convenient way to explore meal options."
              ghLink="https://github.com/GovindaReddyGariMohan/restaurant-menu"
              demoLink="https://govindareddygarimohan.github.io/restaurant-menu/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Digital Library"
              description="A Digital Library Website is an online platform that allows users to browse, search, and access a collection of digital books, articles, and research materials. It provides a convenient way to read and manage digital content from anywhere."
              ghLink="https://github.com/GovindaReddyGariMohan/digital-library"
              demoLink="https://govindareddygarimohan.github.io/digital-library/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Login Page"
              description="A Login Page is a user authentication interface that allows individuals to securely access a website or application by entering their credentials, such as a username/email and password. It ensures only authorized users can access protected content."
              ghLink="https://github.com/GovindaReddyGariMohan/login_page"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
