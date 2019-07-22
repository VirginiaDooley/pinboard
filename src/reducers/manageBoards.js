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
      return action.searchResults
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
    //
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
