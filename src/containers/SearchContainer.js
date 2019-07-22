import React, { Component } from 'react';
import { Button, Form, Input, Col} from 'reactstrap';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults'
import BoardContainer from './BoardContainer'
import manageBoards from '../reducers/manageBoards';
import { images } from '../actions/images'

class SearchContainer extends Component {

  constructor(){
    super()
      this.state = {query:''}
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.state });
  }

    render () {
      // const renderImages = this.state.images.map((image, index) =>
      // (<SearchResults image={image} key={index} url={image.url} description={image.description}/>))
      return (
        <div>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <Col>
              <Input type="query" name="search" id="search" bsSize="lg" value={this.state.query} onChange={event => this.handleChange(event)} />
              <Button id="button">Search</Button>
            </Col>
          </Form>

          // <h4>Search and click images to add to your board.</h4>

            // <div className="grid-container">
            //   <div className="grid-item">
            //     <div className="image" onClick={this.chooseImage} >
            //
            //     </div>
            //   </div>
            // </div>

        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: formData => dispatch({ type: 'FETCH_IMAGES', payload: formData })
  }
}

// In this component, we're not currently concerned
// with writing a mapStateToProps function
// (the first argument passed to connect)
//  as this component doesn't need any state.
//  Since we only need to dispatch an action here and
//  not getting information from our store, we can use
//  null instead of mapStateToProps as the first argument.
export default connect(null, mapDispatchToProps)(SearchContainer)
