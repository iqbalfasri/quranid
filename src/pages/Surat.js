import React, { Component, Suspense } from "react";
import { Redirect } from "react-router-dom";
import renderHTML from "react-render-html";

// Pages
import Splash from "./Splash";

// Component
import Hero from "../components/Hero";
import { PaginateButton } from "../components/Button";
import SuratDetail from "../components/Surat";
const LazySuratDetail = React.lazy(() => import("../components/Surat"));

class Surat extends Component {
  render() {
    const { state } = this.props;
    const { surat, currentPage, perAyat, isMentok } = state.state;
    const { nextPage, previousPage } = state.actions;

    // Cek jika surat tidak ada, makan akan dilaihkan ke halaman not found
    if (surat === null) {
      return <Redirect to="/notfound" />;
    }

    // Logic buat menampilkan ayat dengan total yang di tentukan
    const indexOfLastSurat = currentPage * perAyat;
    const indexOfFirstSurat = indexOfLastSurat - perAyat;
    const currentAyat = surat.slice(indexOfFirstSurat, indexOfLastSurat);

    // Render Ayat
    const renderAyat = currentAyat.map((surat, i) => {
      return <SuratDetail key={i} detailSurat={surat} />;
    });

    // Render Pagination
    const renderPagination = () => {
      return (
        <div className="pagination-wrapper fixed-bottom">
          <div className="container">
            <div className="d-flex justify-content-around">
              <PaginateButton
                isSecondary={currentPage === 1 ? true : false}
                onClick={previousPage}
              >
                <h2>Sebelumnya</h2>
              </PaginateButton>
              <PaginateButton isSecondary={isMentok} onClick={nextPage}>
                <h2>Selanjutnya</h2>
              </PaginateButton>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="detail-surat">
        <Hero>
          <h1 className="hero-title">{localStorage.getItem('nama_surat')}</h1>
          <p className="hero-description">
            {localStorage.getItem('arti_surat')}
          </p>

          <audio controls className="audio-surat">
            <source
              src={localStorage.getItem("audio_surat")}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </Hero>

        <div style={{ padding: "40px 0" }}>
          <div className="container">{renderAyat}</div>
          {renderPagination()}
        </div>
      </div>
    );
  }
}

export default Surat;
