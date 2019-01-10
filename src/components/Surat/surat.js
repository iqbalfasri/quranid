import React from "react";
import renderHtml from "react-render-html";

const SuratDetail = props => {
  let { ar, id, nomor, tr } = props.detailSurat;
  return (
    <div id={nomor} className="surat-box">
      <div className="row align-items-center">
        <div className="col-md-1" className="surat-nomor">
          <h2 style={{ fontSize: "1.5rem" }}>{nomor}</h2>
        </div>

        <div className="col-md-11">
          <h1
            style={{
              textAlign: "right",
              fontSize: "2.5rem",
              whiteSpace: "pre-line",
              overflow: "word-wrap",
              lineHeight: 1.5,
              wordBreak: "break-all"
            }}
          >
            {ar}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 hidden-md" />
        <div className="col-md-11">
          <p style={{ textAlign: "left", color: "#222", fontSize: "24px", fontWeight: "bold", textShadow: 'none' }}>
            {renderHtml(tr)}
          </p>
          <p style={{ textAlign: "left", color: "#777", fontSize: "18px", marginTop: -20, fontWeight: '300', textShadow: 'none' }}>
            {id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuratDetail;
