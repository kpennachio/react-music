import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlbumPopularity from "./AlbumPopularity";

class AlbumTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Album</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.albums.map(album => {
            return (
              <tr key={album.id}>
                <td
                  width={album.thumbnail.width}
                  height={album.thumbnail.height}
                >
                  <img
                    src={album.thumbnail.url}
                    width={album.thumbnail.width}
                    height={album.thumbnail.height}
                    alt={album.name + " album cover"}
                  />
                </td>
                <td>
                  <Link to={"/albums/" + album.id}>{album.name}</Link>
                </td>
                <td>{album.artists.map(artist => artist.name).join("\n")}</td>
                <td>{album.releaseDate}</td>
                <td>
                  <AlbumPopularity popularity={album.popularity} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default AlbumTable;
