import React from "react";
import { Link } from "react-scroll"
import { Facebook , Linkedin , MenuButtonWide} from "react-bootstrap-icons";
import '../sass/components/Header.scss'

const navbarHeight = 76;

function Header() {
  return (
    <div className="header">
      <div className='header-inner'>
      <Link className='link'  spy={true} smooth={true} duration={100} delay={0} to="home"><img className="img-fluid" src="logo.png" alt="Logo"/></Link>
      <div className='navbar d-none d-sm-flex'>
        <ul className='page'>
          <li><Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="about">About</Link></li>
          <li><Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="portfolio">Portfolio</Link></li>
          <li><Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="blog">Blog</Link></li>
          <li><Link className='link'  spy={true} smooth={true} offset={-navbarHeight} duration={100} delay={0} to="contact">Contact</Link></li>
        </ul>
        <ul className='social'>
          <li><Facebook color='#FFF' size={40} /></li>
          <li><Linkedin color='#FFF' size={40} /></li>
        </ul>
      </div>
      <div className='navbar d-flex d-sm-none'>
        <MenuButtonWide color='#FFF' size={40} />
      </div>
      </div> 
    </div>
  );
}

export default Header;
