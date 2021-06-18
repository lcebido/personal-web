import { Link } from "react-scroll";
import { ChevronRight } from "react-bootstrap-icons";

function HomeButton() {
  return (
    <div id="home-intro">
        <div className="intro-text noselect text-center">Hello, I'm <span>Louie Cebido</span>.<br/>I'm a software developer.</div>
        <Link className="btn-profile noselect" to="about" spy={true} smooth={true} offset={-76} duration={100} delay={0}>
          <div className="text">View my profile</div>
          <div className="icon-background"><div className="icon-container"><ChevronRight /></div></div>
        </Link>
    </div>
  );
}

export default HomeButton;
