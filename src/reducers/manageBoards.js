const initialState = {
  loading:false,
  boards: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_BOARDS': {
      return {
        ...state,
        boards: action.payload
      }
    }

    case 'LOADING_BOARDS': {
      return {
        ...state,
        loading: true
      };
    }

    case 'SAVE_BOARD': { 
      return {...state, newlyCreatedBoard: action.payload,
        boards: [...state.boards, action.payload]
      };
      }

      default:
      return state;
    }
  };
