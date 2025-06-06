import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
// import { projects } from '../../data/constants'
import { fetchProjectData } from "../../FirebaseService";

const Projects = ({ openModal, setOpenModal }) => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const data = await fetchProjectData();
        setData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    getProjectData();
  }, []);

  if (errorMessage) {
    return <div className="loader">${errorMessage}</div>;
  }

  if (!data) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {
            data.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}

        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
