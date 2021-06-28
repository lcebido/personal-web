import React, {useEffect, useState} from "react";
import { Link } from "react-scroll"
import { Facebook , Linkedin , MenuButtonWide} from "react-bootstrap-icons";
import '../sass/components/Header.scss'

const navbarHeight = -80;

function Header() {
  const [activeContact, setActiveContact] = useState('disabled');  
  const [removeActive, setRemoveActive] = useState('disabled');  
  const [mobileMenu, setMobileMenu] = useState(false);  

  useEffect(() => {
      window.addEventListener("resize", handleResize);
      document.addEventListener('scroll', trackScrolling);
    return () => {
      window.addEventListener("resize", handleResize);
      document.removeEventListener('scroll', trackScrolling);
    }
  }, []);

  function trackScrolling(el) {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        setMobileMenu(false);
        if (Math.round( windowBottom) >= docHeight) {
          setRemoveActive('disabled');
            setActiveContact('active');
        } else {
            setActiveContact('disabled');
            setRemoveActive('');
        }
  }
  function handleResize() {
    setMobileMenu(false)
  }
  function clickMobilemenu(){
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <div className="header">
      <div className='header-inner'>
      <Link className='link noselect' spy={true} smooth={true} duration={100} delay={0} to="home"><img className="img-fluid" src="logo.png" alt="Logo"/></Link>
      <div className='navbar d-none d-sm-flex'>
        <ul className='page'>
          <li><Link className='link noselect'  spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="about">About</Link></li>
          <li><Link className='link noselect'  spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="portfolio">Portfolio</Link></li>
          <li><Link className={`link noselect ${removeActive}`}  spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="blog">Blog</Link></li>
          <li><Link className={`link noselect ${activeContact}`}   spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="contact">Contact</Link></li>
        </ul>
        <ul className='social'>
          <li>
            <a className="facebook" href="https://www.facebook.com/lcebido" target="_blank" rel="noopener noreferrer">
              <Facebook size={40} />
            </a>  
          </li>
          <li>
            <a className="linkedIn" href="https://www.linkedin.com/in/lcebido" target="_blank" rel="noopener noreferrer">
              <Linkedin size={40} />
            </a>  
          </li>
        </ul>
      </div>
      <div className='navbar d-flex d-sm-none'>
        <div className="menu"><MenuButtonWide color='#FFF' size={40}  onClick={clickMobilemenu}/></div>
        {mobileMenu && 
        <div className="dropdown">
          <div className='page'>
            <Link className='noselect link' spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="about">About</Link>
            <Link className='noselect link' spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="portfolio">Portfolio</Link>
            <Link className={`noselect link ${removeActive}`} spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="blog">Blog</Link>
            <Link className={`noselect link ${activeContact}`} spy={true} smooth={true} offset={navbarHeight} duration={100} delay={0} to="contact">Contact</Link>
          </div>
        </div> }
      </div>
      </div> 
    </div>
  );
}

export default Header;
