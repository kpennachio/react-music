import React, { Component } from "react";
import AlbumCards from "./AlbumCards";
import AlbumTable from "./AlbumTable";

class AlbumsPage extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="title is-5">New Albums</h1>
            </div>
            <div className="column">
              <div className="buttons has-addons is-right">
                <span className="button">
                  <span className="icon is-medium">
                    <i className="fas fa-th fa-1x" />
                  </span>
                </span>
                <span className="button is-selected is-primary">
                  <span className="icon is-medium">
                    <i className="fas fa-list fa-1x" />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <AlbumCards albums={this.props.albums} />
          {
            //
            //<AlbumTable albums={this.props.albums} />
            //
          }
        </div>
      </section>
    );
  }
}

export default AlbumsPage;
