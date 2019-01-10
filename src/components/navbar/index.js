import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Search from '../search';

class Navbar extends Component {

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Platzi Video
          </Typography>
          <Search handleSearch={this.props.handleSearch}/>
        </Toolbar> 
      </AppBar>
    )
  }

}

export default Navbar;
