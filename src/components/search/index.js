import React, { Component } from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import './styles.css';


const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 250,
      },
    },
  }
})

class Search extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.input.current.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="search__icon">
          <SearchIcon />
        </div>
        <InputBase
          inputRef={this.input}
          placeholder="Buscar"
          autoComplete="off"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          name="search"
        />
      </form>
    )
  }

}

export default withStyles(styles)(Search);

