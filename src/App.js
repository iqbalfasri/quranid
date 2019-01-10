import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Surat from "./pages/Surat";
import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";
const LazyHomePage = lazy(() => import("./pages/Home"));
const LazyFooter = lazy(() => import("./components/Footer"));

class App extends Component {
  constructor() {
    super();

    this.state = {
      qurans: [],
      isDataLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
      .then(response => response.json())
      .then(quran => this.setState({ qurans: quran, isDataLoaded: true }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<Splash />}>
          {this.state.isDataLoaded && (
            <React.Fragment>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <LazyHomePage data={this.state.qurans} />}
                />
                <Route path="/surat/:id" component={Surat} />
                <Route path="/notfound" component={NotFound} />
                <Route component={NotFound} />
              </Switch>
              {/* <LazyFooter /> */}
            </React.Fragment>
          )}
        </Suspense>
      </div>
    );
  }
}
export default App;
