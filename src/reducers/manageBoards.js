///reducer; returns a new state///

const initialState = {
  loading:false,
  boards: [],
  boardImages:[]
}

export default (state = initialState, action) => {
  // console.log(action)

  switch (action.type) {

    case 'SET_BOARDS': {
      return {
        ...state,
        boards: action.boards
      }
    }

    case 'LOADING_BOARDS': {
      return {
        ...state,
        loading: true
      };
    }

    case 'FETCH_BOARDS': {
      return {
        ...state,
        loading: false,
        boards: action.payload
      };
    }

    case 'ADD_IMAGE_TO_BOARD': {
      return {
        ...state,
        boardImages:
        [
          ...state.boardImages,
          action.newBoardImages
        ]};
      }

      case 'SAVE_BOARD': {
        return {...state, newlyCreatedBoard: action.payload, boards: [...state.boards, action.payload]};
      }


      default:
      return state;
    }
  };
