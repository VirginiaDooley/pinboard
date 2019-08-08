import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { withRouter } from 'react-router';
import { saveBoard } from '../actions/boards';

class CreateBoard extends Component {

  state = {
    title: "sample title"
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
    // redirect to board show route
    // this.props.history.push('/index')
    // this.props.history.push(`/boards/${board.id}`)
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
              {this.props.boardImages.map((image, index) => <img
                key={index}
                src={image.src}
                alt={image.description}
                />)}
            </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    boardImages: state.manageBoards.boardImages,
    boards: state.manageBoards.boards
  }
}

export default connect(mapStateToProps, {saveBoard}) (withRouter(CreateBoard));
