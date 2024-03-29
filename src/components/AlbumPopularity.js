import React, { Component } from "react";
const uuidv4 = require('uuid/v4');

class AlbumPopularity extends Component {


  state = {
    stars: [],
    empty: []
  }

  componentDidMount() {
    this.findStarCount()
  }

  // determine count of stars (a) and empty stars (b) for album
  // a + b = 10
  findStarCount = () => {
    let popularity = this.props.popularity
    let a = 0

    if (popularity > 70) { a = 10 }
    else if (popularity > 50) { a = 5 }
    else if (popularity > 30) { a = 3 }

    let b = 10 - a

    this.setState({
      stars: new Array(a).fill(1),
      empty: new Array(b).fill(1),
    })
  }

  renderStars = () => {
    return this.state.stars.map(star => {
      return <i key={uuidv4()} className="fas fa-star"></i>
    });
  }

  renderEmptyStars = () => {
    return this.state.empty.map(star => {
      return <i key={uuidv4()} className="far fa-star"></i>
    });
  }


  render() {
    return (
      <span>
      {this.renderStars()}
      {this.renderEmptyStars()}
      </span>
    )
  }
}

export default AlbumPopularity;
