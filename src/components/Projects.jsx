import React from "react";
import Project from "./Project";

function Projects(props) {
  const project1 = {
    title: "Scoreboard Analytics",
    id1: "image-2",
    id2: "Score",
    github: "https://github.com/crandonbruz/scoreboard-analytics",
  };

  const project2 = {
    title: "Merry Wishlist",
    id1: "image-3",
    id2: "Merry",
    github: "https://github.com/WyattBensman/the-merry-wishlist",
  };
  const project3 = {
    title: "Weather App ",
    id1: "image-4",
    id2: "Weather",
    github: "https://github.com/Cristofferb7/weather-app",
  };
  const project4 = {
    title: "Workday Scheduler",
    id1: "image-5",
    id2: "Workday",
    github: "https://github.com/Cristofferb7/workday-schedule",
  };
  const project5 = {
    title: "Weather App ",
    id1: "image-6",
    id2: "password",
    github: "https://github.com/Cristofferb7/password-generator",
  };
  const project6 = {
    title: "Soon",
    id1: "image-7",
    id2: "Soon",
    github: "#",
  };

  return (
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom text-light">Projects</h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <Project data={project1} />
        <Project data={project2} />
        <Project data={project3} />
        <Project data={project4} />
        <Project data={project5} />
        <Project data={project6} />

        
      </div>
    </div>
  );
}

export default Projects;
