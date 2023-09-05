import React from "react";

function Projects(props) {
  return (
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom text-light">Projects</h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-2">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <a href="https://github.com/crandonbruz/scoreboard-analytics" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold "  >
                 
                 <h2 id="Score" >Scoreboard Analytics</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                </li> 
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-3">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <a href="https://github.com/WyattBensman/the-merry-wishlist" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " >
                 
                 <h2 id="Merry">Merry Wishlist</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                </li> 
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-4">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <a href="https://github.com/crandonbruz/scoreboard-analytics" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " >
            <h2 id="Weather">Weather App</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
               
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

      {/* #4 */}
      <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-5">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <a href="https://github.com/Cristofferb7/weather-app" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " >
            <h2 id="Workday">Workday Scheduler</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
              
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        {/* #5 */}
        <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-6">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <a href="https://github.com/Cristofferb7/password-generator" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " >
            <h2 id="password">Password Generator</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">

                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                 
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* #6 */}
        <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  id="image-7">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <a href="https://github.com/crandonbruz/scoreboard-analytics" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " >
            <h2 id="soon">Soon</h2>
                 </a>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
