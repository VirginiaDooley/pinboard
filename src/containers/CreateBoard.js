import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { withRouter } from 'react-router';
import { saveBoard } from '../actions/boards';
import BoardsList from '../components/BoardsList';

class CreateBoard extends Component {

  state = {
    title: "sample title"
  }

  renderBoardImages = () => {
    const boardImages = this.props.boardImages;
    if (boardImages.length > 0) {
      return (
        boardImages.map((image, index) => {
          return <img key={index} src={image.src} alt={image.alt}/>
        }))
      }
      return (
        <h5>Click images from your search results
          to add them to your board.</h5>
      )
    }

  handleTitleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSave = (event) => {
    event.preventDefault();

    const board = {
      title: this.state.title,
      image_attributes: {
        images: this.props.boardImages.map(image => image.src),
      }
    }
    this.props.saveBoard(board)
  }

  render() {
    return (
      <div>

          <Form>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Add your board title here."
              onChange={this.handleTitleChange}/>
            <Button onClick={this.handleSave}>Save Board</Button>
          </Form>

            <div>
              {this.renderBoardImages()}
            </div>

        </div>

      )
    }
}

const mapStateToProps = state => {
  return {
    boardImages: state.manageBoards.boardImages,
    boards: state.manageBoards.boards,
    newBoard: state.manageBoards.newlyCreatedBoard
  }
}

export default connect(mapStateToProps, {saveBoard}) (withRouter(CreateBoard));
