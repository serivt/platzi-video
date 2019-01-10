import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Close } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import './styles.css';

const styles = theme => ({
  paper: {
    overflowY: 'unset'
  },
  content: {
    padding: '0 !important',
    height: 10000
  }
})

class Modal extends Component {

  render() {
    let { classes, handleClose } = this.props;
    return (
      <Dialog
        fullWidth={true}
        maxWidth="xl"
        open={this.props.open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        classes={{
          paper: classes.paper
        }}
      >
        <DialogContent
          classes={{
            root: classes.content
          }}
        >
          <button className="modal__close" type="button" onClick={handleClose}>
            <Close fontSize="large"/>
          </button>
          {this.props.children}
        </DialogContent>
      </Dialog>
    )
  }

}

export default withStyles(styles)(Modal);
