import update from 'react-addons-update'; 

export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_VIDEOS':
      return action.videos;
    case 'INCREASE_LIKES':
      const video = state.find( (video) => video.id == action.vidInfo.id)
      video.likes++
      return update(state, { 
        [action.vidInfo.id - 1]: {
         likes: {$set: video.likes}
        }
      })
    case 'DECREASE_LIKES':
      video = state.find( (video) => video.id == action.vidInfo.id)
      video.likes--
      return update(state, { 
        [action.vidInfo.id - 1]: {
         likes: {$set: video.likes}
        }
      })
    case 'FETCH_VIDEO':
      return action.video;
    case 'ADD_VIDEO':
      video = Object.assign({}, action.video, { id: state.length + 1} );
      return [ ...state, video ];
    default:
      return state;
    };
};