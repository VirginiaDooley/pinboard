import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { withRouter } from 'react-router';
import { saveBoard } from '../actions/boards';

class CreateBoard extends Component {

  state = {
    title: "sample title"
  }

  renderBoardImages = () => {
    const boardImages = this.props.boardImages;
    if (boardImages.length > 0) {
      return boardImages.map((image, index) => {
        return <img key={index} src={image.src} alt={image.alt} />
      })
    }
    return <p>Click images to add them here and save a new board.</p>;
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
        images_attributes: this.props.boardImages.map(image => {
          return {url: image.src}
        })
      }
    this.props.saveBoard(board);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="grid-item">
          <Form>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Add your board title here."
              onChange={this.handleTitleChange}/>
            <Button onClick={this.handleSave}>Save Board</Button>
          </Form>
            <p>{this.renderBoardImages()}</p>
          </div>
      </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    boards: state.manageBoards.boards,
    newBoard: state.manageBoards.newlyCreatedBoard
  }
}

export default connect(mapStateToProps, {saveBoard}) (withRouter(CreateBoard));
