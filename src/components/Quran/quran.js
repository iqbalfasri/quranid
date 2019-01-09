import React, { Component } from "react";
import { Link } from "react-router-dom";

class Quran extends Component {
  saveToLocalStorage(nomor, keterangan, nama, audio) {
    localStorage.setItem("nomo_surat", nomor);
    localStorage.setItem("keterangan_surat", keterangan);
    localStorage.setItem("nama_surat", nama);
    localStorage.setItem("audio_surat", audio);
  }

  render() {
    return (
      <div className="col-md-4">
        <Link
          onClick={() =>
            this.saveToLocalStorage(
              this.props.nomorSurat,
              this.props.additionalData.keteranganSurat,
              this.props.namaSurat,
              this.props.additionalData.audioSurat
            )
          }
          to={`/surat/${this.props.nomorSurat}`}
          params={{ testValue: 1 }}
          className="list-surah"
        >
          {/* <h2>{quran.nomor}</h2> */}
          <h3>{this.props.namaSurat}</h3>
          <p>{this.props.asmaSurat}</p>
        </Link>
      </div>
    );
  }
}
export default Quran;