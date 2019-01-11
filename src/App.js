import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Surat from "./pages/Surat";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import { QuranConsumer, QuranProvider } from "./context/Quran.context";
import { SuratConsumer, SuratProvider } from "./context/Surat.context";
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
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                console.log(props, "Props bangsat");
                return (
                  <QuranProvider>
                    <QuranConsumer>{ctx => <Home data={ctx} />}</QuranConsumer>
                  </QuranProvider>
                );
              }}
            />
            <Route
              path="/surat/:id"
              render={props => {
                let noSurat = props.match.params.id;
                return (
                  <SuratProvider noSurat={noSurat}>
                    <SuratConsumer>{ctx => <Surat state={ctx} />}</SuratConsumer>
                  </SuratProvider>
                )
              }}
            />
            <Route path="/notfound" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          {/* <LazyFooter /> */}
        </React.Fragment>
      </div>
    );
  }
}
export default App;
