///reducer; returns a new state///

const initialState = {
  loading:false,
  boards: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case 'SET_BOARDS': {
      console.log('g')
      // debugger
      return {
        ...state,
        boards: action.payload
      }
    }

    case 'LOADING_BOARDS': {
      console.log('h')
      return {
        ...state,
        loading: true
      };
    }

    case 'FETCH_BOARDS': {
      console.log('i')
      return {
        ...state,
        loading: false,
        boards: action.payload
      };
    }

    // case 'ADD_IMAGE_TO_BOARD': {
    //   console.log('j')
    //   return {
    //     ...state,
    //     boardImages:
    //     [
    //       ...state.boardImages,
    //       action.newBoardImages
    //     ]};
    //   }

    case 'SAVE_BOARD': {
      console.log('k')
      return {...state, newlyCreatedBoard: action.payload,
        boards: [...state.boards, action.payload]
        // boardImages: []
      };
      }

      default:
      return state;
    }
  };
