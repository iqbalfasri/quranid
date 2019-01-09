import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      if (surat.nama.toLowerCase().indexOf(this.state.search) !== -1) {
        console.log("Kosong");
        return "Tidak ada hasil";
      }
      // return surat;
    });

    return (
      <div>
        <Hero>
          {/* <img style={{width: 200, marginBottom: 20}} src="https://assets-1f14.kxcdn.com/images/logo-lg-w.png" /> */}
          <h1 className="hero-title">Al-Quran Bahasa Indonesia</h1>
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
                        audioSurat: quran.audio
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <footer>
          <code>{"</>"} dengan ❤ oleh Iqbal Fasri</code>
        </footer>
      </div>
    );
  }
}

export default Home;
