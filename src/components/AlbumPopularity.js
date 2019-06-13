import React, { Component } from "react";

class AlbumPopularity extends Component {
  render() {
    return <span>{this.props.popularity}</span>;

    // HTML special character for solid star
    //<span>	&#9733; </span>

    // HTML special character for outlined star
    //<span> &#9734; </span>
  }
}

export default AlbumPopularity;
