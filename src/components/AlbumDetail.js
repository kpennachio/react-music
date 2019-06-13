import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AlbumPopularity from "./AlbumPopularity";

class AlbumDetail extends Component {
  render() {
    if (!this.props.album) {
      return <Redirect to="/albums" />;
    }

    return (
      <div>
        <nav className="breadcrumb is-large" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/albums">
                <span className="icon is-small">
                  <i className="fas fa-angle-double-left" aria-hidden="true" />
                </span>
                <span>View all Albums</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="columns">
          <div className="column is-4">
            <figure className="image is-square">
              <img
                src={this.props.album.image.url}
                width={this.props.album.image.width}
                height={this.props.album.image.height}
                alt={this.props.album.name + " album cover"}
              />
            </figure>
          </div>
          <div className="column is-8">
            <div className="title is-3">{this.props.album.name}</div>
            <div className="subtitle is-5">
              {this.props.album.artists.map(artist => (
                <p key={artist.id}>{artist.name}</p>
              ))}
            </div>
            <p>
              Popularity:{" "}
              <AlbumPopularity popularity={this.props.album.popularity} />
            </p>
            <hr />
            <div className="title is-5">Tracks</div>
            <ul className="subtitle is-5">
              {this.props.album.tracks.map(track => (
                <li key={track.id}>{track.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumDetail;
