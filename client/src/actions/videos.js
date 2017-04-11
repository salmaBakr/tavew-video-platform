export function fetchVideos() {
  return function(dispatch) {
    return fetch('/api/videos')
      .then(res => { return res.json()})
      .then(videos => {dispatch({type: 'FETCH_VIDEOS', videos})
    })
  };
};

export function fetchVideo(id) {
  return function(dispatch) {
    return fetch('/api/videos/'+id)
      .then(res => { return res.json()})
      .then(video => {dispatch({type: 'FETCH_VIDEO', video})
    })
  };
};



export function addVideo(formData) {
  return function(dispatch) {
    return fetch('/api/videos', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json)
      .then(video => { dispatch({type: 'ADD_VIDEO'}, video)
      })
  }
}

export function increaseLikes(id){
  return function(dispatch) {
    dispatch({type: 'INCREASE_LIKES', id})
  }
}

