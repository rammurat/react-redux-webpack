import React from 'react';

const Header = () => (
  <header className="app-header">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"><a className="navbar-brand" href="/">LOGO</a></h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark active" href="/company">The company <span className="sr-only">(current)</span></a>
        <a className="p-2 text-dark" href="/work">Our work</a>
        <a className="p-2 text-dark" href="/contact">Contact us</a>
      </nav>
    </div>
    </header>
)

export default Header
