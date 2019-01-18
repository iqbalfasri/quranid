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

  async componentDidMount() {
    const response = await fetch(
      "https://al-quran-8d642.firebaseio.com/data.json?print=pretty"
    ).then(res => res.json());

    return this.setState({
      qurans: response,
      isDataLoaded: true
    });
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
