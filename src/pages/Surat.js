import React, { Component, Suspense } from "react";
import { Redirect } from "react-router-dom";
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
      surat: [],
      currentPage: 1,
      perAyat: 10
    };

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  render() {
    console.log()
    const { surat, currentPage, perAyat } = this.state;

    // Cek jika surat tidak ada, makan akan dilaihkan ke halaman not found
    if (surat === null) {
      return <Redirect to="/notfound" />
    }

    // Logic buat menampilkan ayat dengan total yang di tentukan
    const indexOfLastSurat = currentPage * perAyat;
    const indexOfFirstSurat = indexOfLastSurat - perAyat;
    const currentAyat = surat.slice(indexOfFirstSurat, indexOfLastSurat);

    // Render Ayat
    const renderAyat = currentAyat.map((surat, i) => {
      return (
        <LazySuratDetail key={i} suratIndo={surat.id} suratArab={surat.ar} />
      );
    });

    // Logic buat menampilkan pagination
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(surat.length / perAyat); i++) {
      pageNumber.push(i);
    }

    // Render Pagination
    const renderPagination = () => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
            backgroundColor: "salmon"
          }}
        >
          {pageNumber.map(number => {
            return (
              <li
                style={{ listStyle: "none", margin: "0 5px" }}
                id={number}
                key={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          })}
        </div>
      );
    };

    // Logging all variable
    console.log(indexOfFirstSurat, "Index pertama");
    console.log(indexOfLastSurat, "Index terakhir");
    console.log(surat, "Surat lengh");

    return (
      <div className="detail-surat">
        <Suspense fallback={<div>Loading...</div>}>
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
            <div className="container">{renderAyat}</div>
            {surat.length < 10 ? null : renderPagination()}
          </div>
        </Suspense>
      </div>
    );
  }
}

export default Surat;
