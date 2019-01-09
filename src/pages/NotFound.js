import React, { Component } from "react";

// Component
import Button from "../components/Button";

class NotFound extends Component {
  render() {
    const IMG_404 = require("../assets/404ilus.png");
    return (
      <div className="notfound-page">
        <div className="notfound-page-img">
          <img src={IMG_404} />
        </div>
        <h1>404 Not Found</h1>
        <Button href="/">Kembali ke beranda</Button>
      </div>
    );
  }
}

export default NotFound;
