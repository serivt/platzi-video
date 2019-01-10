import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import './styles.css';


class Playlist extends Component {

  render() {
    const { playlist, handleOpenModal } = this.props;
    return (
      <div className="playlist">
        <GridList className="playlist__grid" cols={4}>
          {playlist.map(el => (
            <GridListTile key={el.id}>
              <img className="playlist__cover" src={el.cover} alt={el.author} onClick={() => { handleOpenModal(el) }}/>
              <GridListTileBar
                className="playlist__tilebar"
                title={el.title}
                subtitle={<span>By: {el.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }

}

export default Playlist;
