import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bulma/css/bulma.css";

import Navbar from "./components/Navbar";
import AlbumDetail from "./components/AlbumDetail";
import AlbumsPage from "./components/AlbumsPage";
import sampleData from "./album_data.json";

class App extends Component {

  state = {
    sampleData: sampleData,
    view: "cards"
  }

  // componentDidMount() {
  //   fetch("http://prototypes.inamoto.co/album_data.json")
  //   .then(resp => resp.json())
  //   .then(albumData => {
  //     this.setState({sampleData: albumData})
  //   })
  // }

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
                      view={this.state.view}/>
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
