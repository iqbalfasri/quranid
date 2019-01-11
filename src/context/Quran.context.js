import React, { Component, createContext } from "react";
import Splash from "../pages/Splash";

const QuranContext = createContext();

class QuranProvider extends Component {
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
    if (!this.state.isDataLoaded) {
      return <Splash />;
    }
    return (
      <React.Fragment>
        <QuranContext.Provider value={this.state.qurans}>
          {this.props.children}
        </QuranContext.Provider>
      </React.Fragment>
    );
  }
}

const QuranConsumer = QuranContext.Consumer;

export { QuranProvider, QuranConsumer };
