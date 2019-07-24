import React, { Component } from 'react';
import { Button, Form, Input, Col} from 'reactstrap';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults'
import BoardContainer from './BoardContainer';
import manageBoards from '../reducers/manageBoards';

class SearchContainer extends Component {

  state = {
    query: '',
    images: [],
    boards: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // resets search
    // this.setState({
    //   query: ''
    // })
    const query = this.state.query
    const KEY = 'd5c39b1d4142cbfb56008c655ecd3b9bbb420cf12e53130dc9cbdf1ef67f746b'
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${query}`

    const images = fetch(URL, {
      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseJSON => {
      debugger
      return responseJSON.images;
      console.log(responseJSON.images)
    })
  }

  //   chooseImage = (event) => {
  //     // debugger
  //     console.log("event handler is working!");
  //     this.setState({ boardImages: [...this.state.boardImages, event.target.src]});
  //     console.log("now this is the current state", this.state)
  //   }

    render () {

      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Col>
              <Input type="text" name="query" onChange={this.handleChange} value={this.state.query}/>
              <Button type="submit">Search</Button>
            </Col>
          </Form>
            <div className="grid-container">
              <div className="grid-item">
                {this.state.images}
              </div>
            </div>
        </div>
      )
    }
}

// connects to our reducers
// function mapStateToProps(state) {
//   return { images: state.images }
// }

export default connect()(SearchContainer);
