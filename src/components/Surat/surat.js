import React from "react";
import renderHtml from "react-render-html";

const SuratDetail = props => {
  let { ar, id, nomor, tr } = props.detailSurat;
  return (
    <div id={nomor} className="surat-box">
      <div className="row surat">
        <div className="col-md-1 surat-responsive-nomor">
          <div className="surat-nomor">
            <h2 style={{ fontSize: "1.5rem" }}>{nomor}</h2>
          </div>
        </div>

        <div className="col-md-11">
          <h1 className="arab-text">{ar}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 hidden-md" />
        <div className="col-md-11">
          <p className="ejaan-text">{renderHtml(tr)}</p>
          <p className="arti-ayat">{id}</p>
        </div>
      </div>
    </div>
  );
};

export default SuratDetail;
