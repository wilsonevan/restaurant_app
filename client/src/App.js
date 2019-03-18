import React, { Fragment, } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import Dinner from "./components/Dinner";
import Lunch from "./components/Lunch";
import Brunch from "./components/Brunch";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Blog from "./components/Blog";
// import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    {/* <Container> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dinner" component={Dinner} />
        <Route exact path="/lunch" component={Lunch} />
        <Route exact path="/brunch" component={Brunch} />
        <Route component={NoMatch} />
      </Switch>
    {/* </Container> */}
    <Footer />
  </Fragment>
)

export default App;
