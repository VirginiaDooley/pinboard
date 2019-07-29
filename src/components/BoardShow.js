import React, { Component } from 'react';

class BoardShow extends Component {
    render () {
      let images = this.props.boardImages.map((image, index) =>
        <img
          className="image"
          src={image.src}
          id={image.id}
          key={index}
          alt={image.alt}
          />)
      return (
      <div>
        {images}
      </div>
    )
  }
}

export default BoardShow;
