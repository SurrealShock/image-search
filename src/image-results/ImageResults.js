import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

class ImageResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      currentImage: ''
    };
  }

  handleOpen = img => {
    this.setState({
      open: true,
      currentImage: img
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={5} cellHeight={200}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = <CircularProgress />;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImage} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
