import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { saveBoard, fetchBoards } from '../actions/boards'
import BoardShow from '../components/BoardShow';

class BoardContainer extends Component {

  state = {
    title: "sample title"
  }

  // componentDidMount() {
  //   this.props.fetchBoards()
  // }

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
          images: this.props.boardImages.map(image => image.src)
        }
      }
      this.props.saveBoard(board)
      this.props.history.push('/index')
    }

    render() {
      return (
        <div>
          <Form>
            <Col>
              <Input
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Add your board title form here."
                onChange={this.handleTitleChange}/>

              <Button onClick={this.handleSave}>Save Board</Button>
            </Col>
          </Form>

          <div className="grid-item">
            <div className="Pinboard">
              {this.renderBoardImages()}
            </div>
        </div>
        </div>
      )
    }
  }

  // getting state from redux store
  const mapStateToProps = state => {
    console.log(state)
    return {
      boardImages: state.manageBoards.boardImages,
      boards: state.manageBoards.boards
    }
  }

  export default connect(mapStateToProps, {saveBoard, fetchBoards}) (withRouter(BoardContainer));
