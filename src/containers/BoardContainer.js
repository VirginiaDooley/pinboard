import React, { Component } from 'react';
import BoardShow from '../components/BoardShow';
import { connect } from 'react-redux';

class BoardContainer extends Component {

  state = {
    title: ''
  }
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
    //
    // handleSave = (event) => {
    //   event.preventDefault();
    //   const params = {
    //     board: {
    //       title:,
    //       image_attributes: {
    //         images: this.props.boardImages
    //       }}
    //     }

    render() {
      return (
        <div className="title-form">
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Add your board title form here."
            onChange={this.handleTitleChange}/>
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
