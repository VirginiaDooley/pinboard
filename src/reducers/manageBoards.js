const initialState = {
  query: ''
}

export default function manageBoards
  (state = {
      boards: [],
      images: [],
      query: ''
  }, action) 
    {
    switch (action.type) {

    case 'FETCH_IMAGES': {
      return action.formData
    }
    // case 'ADD_IMAGE': {
    //   return state.concat(action.dinner);
    // }

    // case 'REMOVE_DINNER': {
    //   const idx = state.findIndex(dinner => dinner.id === action.dinnerId);
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)]
    // }
    //
    // case 'SET_DINNERS': {
    //   return action.dinners;
    // }
    //
    // case 'SUBSTITUTE_DINNER': {
    //   const index = state.findIndex(dinner => dinner.id === action.dinner.id);
    //   return [...state.slice(0, index), action.dinner, ...state.slice(index+1)]
    // }


    // handleSubmit = (event) => {
    //   this.props.fetchImages();
    //   event.preventDefault();
    //   console.log(this.state.query)
    //   const q = this.state.query
    //   const KEY = 'd5c39b1d4142cbfb56008c655ecd3b9bbb420cf12e53130dc9cbdf1ef67f746b'
    //   const URL = `https://api.unsplash.com/search/photos?page=1&query=${q}`
    //
    //   fetch(URL, {
    //
    //     headers: {
    //       Authorization: `Client-ID ${KEY}`
    //     }
    //   })
    //   .then(function(response) {
    //   		if (response.status >= 400) {
    //   			throw new Error("Bad response from server");
    //   		}
    //   		return response.json();
    //
    //   	})
    //   	.then((images) => {
    //       this.setState({images: images.results});
    //       // this.setState({images: images.map( image => ({ url: image.results.urls.thumb,  description: image.results.description }) )});
    //       console.log(this.state.images)
    //     })
    //   }
    //
    //   chooseImage = (event) => {
    //     // debugger
    //     console.log("event handler is working!");
    //     this.setState({ boardImages: [...this.state.boardImages, event.target.src]});
    //     console.log("now this is the current state", this.state)
    //   }

    default: {
      return state;
    }
  }
};
