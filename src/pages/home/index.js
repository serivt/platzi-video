import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Categories from '../../components/categories';
import Category from '../../components/category';
import Modal from '../../components/modal';
import VideoPlayer from '../../components/player/video';
import ModalPortal from '../../portals/modal';
import RegularError from '../../components/errors/regular';
import Navbar from '../../components/navbar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      video: {},
      searchResults: []
    }
  }

  handleOpenModal = (video) => {
    this.setState({
      openModal: true,
      video: video
    });
  }

  handleCloseModal = () => {
    this.setState({
      openModal: false,
      video: {}
    });
  }

  stringDistance = (a, b) => {
    // Levenshtein distance
    const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i += 1) distanceMatrix[0][i] = i;
    for (let j = 0; j <= b.length; j += 1) distanceMatrix[j][0] = j;
    for (let j = 1; j <= b.length; j += 1) {
      for (let i = 1; i <= a.length; i += 1) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        distanceMatrix[j][i] = Math.min(
          distanceMatrix[j][i - 1] + 1,
          distanceMatrix[j - 1][i] + 1,
          distanceMatrix[j - 1][i - 1] + indicator,
        );
      }
    }
    return distanceMatrix[b.length][a.length];
  }

  stringMatch = (a, b) => (
    1 - this.stringDistance(a.toLowerCase(), b.toLowerCase()) / Math.max(a.length, b.length)
  );

  stringFullMatch = (a, b) => {
    let wordsA = a.split(' ');
    let wordsB = b.split(' ');
    for (let i = 0; i < wordsA.length; i++) {
      for (let j = 0; j < wordsB.length; j++) {
        if (this.stringMatch(wordsA[i], wordsB[j]) >= 0.8) return true;
      }
    }
    return false;
  }

  handleSearch = (search) => {
    let searchResults = [];
    let { categories } = this.props.data;
    for (let i in categories) {
      let category = categories[i];
      for (let j in category.playlist) {
        let video = category.playlist[j];
        if (this.stringFullMatch(search, video.title) >= 0.8) {
          searchResults.push(video);
        }
        if (this.stringFullMatch(search, video.author) >= 0.8) {
          searchResults.push(video);
        }
      }
    }
    this.setState({
      searchResults: searchResults
    });
  }

  render() {
    return (
      <RegularError>
        <Navbar handleSearch={this.handleSearch}/>
        <Grid container spacing={24}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={8}>
              {this.state.searchResults.length > 0 &&
                <Grid item xs={12}>
                  <Category
                    title="Resultados de busqueda"
                    playlist={this.state.searchResults}
                    handleOpenModal={this.handleOpenModal}
                  />
                </Grid>
              }
              <Grid item xs={12}>
                <Categories
                  categories={this.props.data.categories}
                  handleOpenModal={this.handleOpenModal}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ModalPortal>
          <Modal
            open={this.state.openModal}
            handleClose={this.handleCloseModal}
          >
            <VideoPlayer video={this.state.video}/>
          </Modal>
        </ModalPortal>
      </RegularError>
    )
  }
}

export default Home;
