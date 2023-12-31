import React from 'react';

function Contact(props) {
    return (
        <form class= 'text-light' id='contactMe'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Message</label>
          <input type="text" class="form-control" id="bigMessage" aria-describedby="text"/>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
}

export default Contact;