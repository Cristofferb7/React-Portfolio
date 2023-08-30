import React from "react";

function Projects(props) {
  return (
    <main class="sections">
      <h2 id="work-header">Work</h2>
      <section id="projects-section">
        <article>
          <a href="https://github.com/Cristofferb7">
            <div class="grid-item" id="image-1">
              <h3 class="text-on-picture">Github Link to Projects</h3>
            </div>
          </a>
        </article>

        <article>
          <a href="https://github.com/crandonbruz/scoreboard-analytics">
            <div class="grid-item" id="image-2">
              <h3 class="text-on-picture">Scoreboard Analytics</h3>
            </div>
          </a>
          <a href="https://github.com/WyattBensman/the-merry-wishlist">
            <div class="grid-item" id="image-3">
              <h3 class="text-on-picture">The Merry Wishlist</h3>
            </div>
          </a>
        </article>

        <article>
          <a href="https://github.com/Cristofferb7/weather-app">
            <div class="grid-item" id="image-4">
              <h3 class="text-on-picture">Weather App</h3>
            </div>
          </a>
          <a href="https://github.com/Cristofferb7/workday-schedule">
            <div class="grid-item" id="image-5">
              <h3 class="text-on-picture">Workday Scheduler</h3>
            </div>
          </a>
        </article>
      </section>
    </main>
  );
}

export default Projects;
