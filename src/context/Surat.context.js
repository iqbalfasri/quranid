import React, { Component, createContext } from "react";

// Page
import Splash from "../pages/Splash";

const SuratContext = createContext();

class SuratProvider extends Component {
  constructor() {
    super();

    this.state = {
      surat: [],
      currentPage: 1,
      perAyat: 10,
      isMentok: false,
      isDataLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      `https://al-quran-8d642.firebaseio.com/surat/${
        this.props.noSurat
      }.json?print=pretty`
    )
      .then(response => response.json())
      .then(surat => {
        this.setState({
          surat: surat,
          isDataLoaded: true
        });
      })
      .catch(error => console.log(error));
  }

  handleBack(e) {
    // Cek Jika sudah pada halaman awal
    if (this.state.currentPage === 1) {
      return;
    }

    return this.setState({
      currentPage: this.state.currentPage - 1,
      isMentok: false
    });
  }

  handleNext(e) {
    let { surat, perAyat, currentPage } = this.state;
    let page = [];
    for (let i = 1; i <= Math.ceil(surat.length / perAyat); i++) {
      page.push(i);
    }

    // Cek Jika sudah mentok
    let totalPage = page.length;
    if (currentPage === totalPage) {
      this.setState({
        isMentok: true
      });
      return;
    }

    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  render() {
    if (!this.state.isDataLoaded) {
      return <Splash />;
    }
    return (
      <SuratContext.Provider
        value={{
          state: this.state,
          actions: {
            nextPage: this.handleNext.bind(this),
            previousPage: this.handleBack.bind(this)
          }
        }}
      >
        {this.props.children}
      </SuratContext.Provider>
    );
  }
}

const SuratConsumer = SuratContext.Consumer;

export { SuratProvider, SuratConsumer };
