import React, { Component } from 'react';
// This container can render either
import BoardShow from '../components/BoardShow';
import { connect } from 'react-redux';
import { addImageToBoard } from '../actions/boards'

class BoardContainer extends Component {

  render() {

      return (
        <div>
          // <BoardShow boardImages={this.props.boardImages}/>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  boardImages: state.boardImages
})

const mapDispatchToProps = dispatch => ({
    addImageToBoard: () => {
      dispatch(addImageToBoard())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
