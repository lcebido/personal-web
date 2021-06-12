import React from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./sass/global.scss"

function App() {
  return (
    <div>

          <Home />
          <Header />
          <About />
          <Portfolio />
          <Blog />
          <Contact />
      {/* <Router>
      

      {/* <Route path="/" exact>
        <Home />
      </Route> 

      <Route path="/about">
        <About />
      </Route>

      <Route path="/portfolio">
        <Portfolio />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/createnote">
        <CreateNote />
      </Route>
    </Router> */}
    </div>
  );
}

export default App;
