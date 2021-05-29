import React from "react";
import { Link } from "react-scroll"
import '../sass/components/Navbar.scss'

const navbarHeight = 76;

function Navbar() {
  return (
    <nav className="navbar container-fluid">
      <h4>
        <Link className='link'  spy={true} smooth={true} duration={100} delay={0} to="home">Home</Link>
      </h4>
      <h4>
        <Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="about">About</Link>
      </h4>
      <h4>
        <Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="portfolio">Portfolio</Link>
      </h4>
      <h4>
        <Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="blog">Blog</Link>
      </h4>
      <h4>
        <Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="contact">Contact</Link>
      </h4>
      <h4>
        <Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="createnote">Create Note</Link>
      </h4>
    </nav>
  );
}

export default Navbar;
