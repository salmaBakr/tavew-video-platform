
export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_VIDEOS':
      return action.videos;
    case 'FETCH_VIDEO':
      return action.video;
    case 'ADD_VIDEO':
      const video = Object.assign({}, action.video, { id: state.length + 1} );
      return [ ...state, video ];
    default:
      return state;
  }
};