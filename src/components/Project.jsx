import React from "react";

function Project({data}) {
  return (
    <div class="col">
      <div
        class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        id={`${data.id1}`}
      >
        <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <a
            href={`${data.github}`}
            class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold "
          >
            <h2 id={`${data.id2}`}>{data.title}</h2>
          </a>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="me-auto"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
