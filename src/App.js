import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bulma/css/bulma.css";

import Navbar from "./components/Navbar";
import AlbumDetail from "./components/AlbumDetail";
import AlbumsPage from "./components/AlbumsPage";

class App extends Component {

  state = {
    sampleData: [],
    view: "cards",
    loading: true
  }

  componentDidMount() {
    // uncomment line below to simulate delay in response - loading component will render
    // setTimeout(this.getAlbums, 3000)
    this.getAlbums()
  }

  // get album data and save in state
  // change loading to false because data is available
  getAlbums = () => {
    fetch("http://prototypes.inamoto.co/album_data.json")
    .then(resp => resp.json())
    .then(albumData => {
      this.setState({
          sampleData: albumData,
          loading: false
        })
    })
  }

  // change view  - album "cards" or album "table"
  toggleView = (e) => {
    this.setState({ view: e.target.getAttribute("name") })
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route
                  path="/albums/:albumId"
                  render={props => (
                    <AlbumDetail
                      album={
                        this.state.sampleData.filter(
                          album => album.id === props.match.params.albumId
                        )[0]
                      }
                    />
                  )}
                />
                <Route
                  path="/albums"
                  render={() => (
                    <AlbumsPage
                      albums={this.state.sampleData}
                      toggleView={this.toggleView}
                      view={this.state.view}
                      loading={this.state.loading}
                    />
                  )}
                />
                <Route render={() => <Redirect to="/albums" />} />
              </Switch>
            </BrowserRouter>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
