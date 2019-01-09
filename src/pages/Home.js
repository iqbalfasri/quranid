import React, { Component } from "react";

// Component
import Hero from "../components/Hero";
import Search from "../components/Search";
import Quran from "../components/Quran";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  render() {
    let filteredSurat = this.props.data.filter(surat => {
      return surat.nama.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <div>
        <Hero>
          <h1 className="hero-title">QuranID</h1>
          <p className="hero-description">Al-Quran dengan terjemahan bahasa Indonesia.</p>
        </Hero>

        <div className="main-content">
          <div className="container">
            <div className="content">
              <div className="row d-flex align-items-center mb-20" style={{padding: "0 10px 30px"}}>
                <div className="col-md-8">
                  <h2>Surat (Juz)</h2>
                </div>
                <div className="col-md-4">
                  <Search
                    value={this.state.search}
                    onChange={e => {
                      this.setState({ search: e.target.value.substr(0, 20) });
                    }}
                    placeholder="Cari ayat atau surat..."
                  />
                </div>
              </div>

              <div className="row">
                {filteredSurat.map(quran => {
                  return (
                    <Quran
                      key={quran.nomor}
                      asmaSurat={quran.asma}
                      namaSurat={quran.nama}
                      nomorSurat={quran.nomor}
                      additionalData={{
                        keteranganSurat: quran.keterangan,
                        audioSurat: quran.audio,
                        artiSurat: quran.arti
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
