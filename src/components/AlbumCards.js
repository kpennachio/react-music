import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumPopularity from "./AlbumPopularity";

class AlbumCards extends Component {
  render() {
    return (
      <div className="columns is-mobile is-multiline ">
        {this.props.albums.map(album => {
          return (
            <div key={album.id} className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <img
                      src={album.image.url}
                      width={album.image.width}
                      height={album.image.height}
                      alt={album.name + " album cover"}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                        <Link to={"/albums/" + album.id}>{album.name}</Link>
                      </p>
                      <p className="subtitle is-6">
                        {album.artists.map(artist => artist.name).join("\n")}
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <p>{album.release_date}</p>
                    <p>
                      Popularity:
                      <br/>
                      <AlbumPopularity popularity={album.popularity} />
                    </p>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AlbumCards;
