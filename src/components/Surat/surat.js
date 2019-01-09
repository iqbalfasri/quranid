import React, { Component } from "react";

const SuratDetail = props => {
  let { suratIndo, suratArab } = props;
  return (
    <div>
      <h1 style={{ textAlign: "right" }}>{suratArab}</h1>
      <p style={{textAlign: 'left', color: "#333"}}>{suratIndo}</p>
    </div>
  );
};

export default SuratDetail;