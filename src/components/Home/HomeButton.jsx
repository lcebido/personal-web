import { Link } from "react-scroll";
function HomeButton() {
  return (
    <div id="homebutton">
      <Link to="about" spy={true} smooth={true}  offset={-76} duration={100} delay={0}>
        PROFILE
      </Link>
    </div>
  );
}

export default HomeButton;
