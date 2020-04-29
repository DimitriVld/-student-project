import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContext from './context/AppContext';
import Default from "./views/layouts/DefaultLayout";
import Home from "./views/pages/Home";
import AboutUs from "./views/pages/AboutUs";
import Contact from "./views/pages/Contact";
import Expertises from "./views/pages/Expertises";
import Projects from "./views/pages/Projects";
import Services from "./views/pages/Services";
import SingleProject from "./views/pages/SingleProject";
import Konami from "./views/pages/Konami";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Route exact path="/" component={() => <Default page={<Home />} />} />
          <Route exact path="/about-us" component={() => <Default page={<AboutUs />} />} />
          <Route exact path="/contact" component={() => <Default page={<Contact />} name={'contact'} />} />
          <Route exact path="/expertises" component={() => <Default page={<Expertises />} />} />
          <Route exact path="/projects" component={() => <Default page={<Projects />} />} />
          <Route exact path="/services" component={() => <Default page={<Services />} />} />
          <Route exact path="/konami" component={() => <Default page={<Konami />} />} />
          <Route exact path="/project-:id" component={(props) => <Default page={<SingleProject {...props}/>} />} />
        </Router>
      </AppContext.Provider>
    );
  }

}

export default App;