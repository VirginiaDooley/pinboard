import React, { Component } from 'react';
import BoardShow from '../components/BoardShow';
import { connect } from 'react-redux';

class BoardContainer extends Component {

  renderBoardImages = () => {
    const boardImages = this.props.boardImages;
      if (boardImages.length > 0) {
        return (
          boardImages.map((image, index) => {
            return <BoardShow 
              id={image.id}
              key={index}
              src={image.src}
              alt={image.alt}
            />
        }))
        }
        return (
          <h5>
            Click images from your search results
            to add them to your board.
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
