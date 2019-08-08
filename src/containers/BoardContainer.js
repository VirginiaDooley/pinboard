import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { saveBoard } from '../actions/boards';
import BoardsList from '../components/BoardsList';
import CreateBoard from '../components/CreateBoard';

class BoardContainer extends Component {

  state = {
    title: "sample title"
  }

  renderBoardImages = () => {
    const boardImages = this.props.boardImages;
    if (boardImages.length > 0) {
      return (
        boardImages.map((image, index) => {
          return <CreateBoard boardImages={boardImages}
            key={index}
            src={image.src}
            alt={image.alt}
            />
        }))
      }

      return (
        <h5>Click images from your search results
          to add them to your board.</h5>
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
      boardImages: state.manageBoards.boardImages,
      boards: state.manageBoards.boards
    }
  }

  export default connect(mapStateToProps, {saveBoard}) (withRouter(BoardContainer));
