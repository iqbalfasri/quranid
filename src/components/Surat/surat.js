import React, { Component } from "react";

const SuratDetail = props => {
  let { suratIndo, suratArab } = props;
  return (
    <div>
      <h1 style={{ textAlign: "right" }}>{suratIndo}</h1>
    </div>
  );
};

export default SuratDetail;