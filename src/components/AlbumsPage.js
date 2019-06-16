import React, { Component } from "react";
import AlbumCards from "./AlbumCards";
import AlbumTable from "./AlbumTable";
import Loading from "./Loading";

class AlbumsPage extends Component {

  buttonClass = (name) => {
    return this.props.view === name ? "button is-selected is-primary" : "button"
  }

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
                <span className={this.buttonClass("cards")} name="cards" onClick={this.props.toggleView}>
                  <span className="icon is-medium" name="cards">
                    <i className="fas fa-th fa-1x" name="cards"/>
                  </span>
                </span>
                <span className={this.buttonClass("table")} name="table" onClick={this.props.toggleView}>
                  <span className="icon is-medium" name="table">
                    <i className="fas fa-list fa-1x" name="table"/>
                  </span>
                </span>
              </div>
            </div>
          </div>
          { this.props.loading ?
            < Loading />
            :
            this.props.view === "cards" ?
              <AlbumCards albums={this.props.albums} />
              :
              <AlbumTable albums={this.props.albums} />
          }
        </div>
      </section>
    );
  }
}

export default AlbumsPage;
