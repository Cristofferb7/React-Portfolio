import React from 'react';

function Header(props) {
    return (
      <>
        <header>
        
        <h1 class="main-header">Cristoffer Bohorquez</h1>
        <section class="topnav">
          <a href="#"
            onClick={() => {
              props.setCurrentPage("About")
            }
          }
          >About Me</a>
          <a href="#"
            onClick={() => {
              props.setCurrentPage("Projects")
            }
          }
          >Projects</a>
          <a href="#"
           onClick={() => {
            props.setCurrentPage("Contact")
          }
        }
          // onClick here
          >Contact Me</a>
          <a href="#"
          onClick={() => {
            props.setCurrentPage("Resume")
          }
        }
          >Resume</a>
        </section>
      </header>

<div class="hero-image">
<p id="subtitle">Portfolio</p>
</div>
</>
    );
}

export default Header;