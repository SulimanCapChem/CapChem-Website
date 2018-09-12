import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../Landing_Page/js/landingpage';
import AboutMe from '../../About_Page/js/aboutme';
import Contact from '../../Contact_Page/js/contact';
import Projects from '../../Projects_Page/js/projects';
import Resume from '../../resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;
