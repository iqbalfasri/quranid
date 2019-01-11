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
