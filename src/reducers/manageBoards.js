///reducer///

const initialState = {
  loading: false,
  boards: [],
  boardImages: []
}
export default (state = initialState, action) => {

  switch (action.type) {

    case 'LOADING_IMAGE_SEARCH': {
      return {...state, loading: true};
    }

    case 'FETCH_IMAGES': {
      return {...state, loading: false, images: action.payload};
      // return state.concat(action.images);
    }

    // case 'ADD_IMAGE_TO_BOARD': {
    //   return state.concat(action.searchResults);
    // }

    // case 'CREATE_BOARD': {
    //
    // }
    //
    // case 'SAVE_BOARD': {
    //
    // }

    // case 'SHOW_BOARD': {
    //
    // }
    //
    // case 'BOARD_INDEX': {
    //
    // }

    default:
      return state;
  }
};
