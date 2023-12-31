import React from 'react';

function Footer(props) {
    return (
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-light">© 2023 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-light" href="https://github.com/Cristofferb7"><i class="fa-brands fa-github"></i></a></li>
      <li class="ms-3"><a class="text-light" href="https://linkedin.com/in/cristoffer-bohorquez"><i class="fa-brands fa-linkedin"></i></a></li>
      <li class="ms-3"><a class="text-light" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
   
    );
}

export default Footer;