import React, { Component, Suspense } from "react";
import renderHTML from "react-render-html";

// Component
import Hero from "../components/Hero";
// import SuratDetail from "../components/Surat";
const LazySuratDetail = React.lazy(() => import("../components/Surat"));

class Surat extends Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;

    this.state = {
      surat: []
    };
  }

  componentWillMount() {
    fetch(
      `https://al-quran-8d642.firebaseio.com/surat/${this.id}.json?print=pretty`
    )
      .then(response => response.json())
      .then(surat => {
        this.setState({
          surat: surat
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="detail-surat">
        <Hero>
          <h1 className="hero-title">{localStorage.getItem("nama_surat")}</h1>
          <p className="container">
            {renderHTML(localStorage.getItem("keterangan_surat"))}
          </p>

          <audio controls>
            <source
              src={localStorage.getItem("audio_surat")}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </Hero>

        <div>
          <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              {this.state.surat.map((surat, i) => {
                return (
                  <LazySuratDetail suratIndo={surat.id} suratArab={surat.ar} />
                );
              })}
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default Surat;
