import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchBoards} from '../actions/boards'

class BoardShow extends Component {

  render () {
    const {match, boards} = this.props;

    if (boards.length == 0) {
      this.props.fetchBoards()
    }

    const board = boards.find(board => {

      if (board.id === parseInt(match.params.boardId)) {
        return board
       }
     })

    const renderImages = () => board.images.map(image =>
        <img
         key={image.id}
         src={image.url}
         alt={image.description}
       />
   )

    return (
     <div className="grid-item">
       <h3>Board Title: {board.title}</h3>
        {renderImages()}
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.manageBoards.boards
  }
}

export default connect(mapStateToProps, {fetchBoards})(BoardShow);
