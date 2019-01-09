import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Surat from "./pages/Surat";
import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor() {
    super();

    this.state = {
      qurans: []
    };
  }

  componentWillMount() {
    fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
      .then(response => response.json())
      .then(quran => this.setState({ qurans: quran }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (this.state.qurans.length === 0) {
                return <Splash />;
              }
              return <Home data={this.state.qurans} />;
            }}
          />

          <Route path="/surat/:id" component={Surat} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
