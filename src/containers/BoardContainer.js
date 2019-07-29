import React, { Component } from 'react';
import BoardShow from '../components/BoardShow';
import { connect } from 'react-redux';

class BoardContainer extends Component {

  renderBoardImages = () => {

    const boardImages = this.props.boardImages;
      if (boardImages.length > 0) {
        return (
          boardImages.map((image, index) => {
            return <BoardShow boardImages={this.props.boardImages}
              id={image.id}
              key={index}
              src={image.url}
              alt={image.alt}
            />
        }))
        }
        return (
          <h5>
            Click an image from your search results
            to add it to your board.
          </h5>
        )
    }

  render() {
    return (
      <div>
        {this.renderBoardImages()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    boardImages: state.manageBoards.boardImages
  }
}

export default connect(mapStateToProps)(BoardContainer);
