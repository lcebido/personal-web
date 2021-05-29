import HomeCanvas from "./HomeCanvas";
import HomeButton from "./HomeButton";
import "../../sass/components/Home.scss"

function Home() {

  return (
    <div id='home' className="container-canvas">
      <HomeCanvas />
      <HomeButton />

      
    </div>
  );
}

export default Home;
