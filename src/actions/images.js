//actions//

export const fetchImages = (formData) => {
  const q = this.state.query
  const KEY = 'd5c39b1d4142cbfb56008c655ecd3b9bbb420cf12e53130dc9cbdf1ef67f746b'
  const URL = `https://api.unsplash.com/search/photos?page=1&query=${q}`

  const searchResults = fetch(URL, {
    headers: {
      Authorization: `Client-ID ${KEY}`
    }
  }).then(function(response) {
    	if (response.status >= 400) {
    		throw new Error("Bad response from server");
    	}
    	return response.json();
    	})
    	// .then((images) => {
      //   this.setState({images: images.results});
      //   // this.setState({images: images.map( image => ({ url: image.results.urls.thumb,  description: image.results.description }) )});
      //   console.log(this.state.images)
      // })
  // end of fetch
  return {
    type: "FETCH_IMAGES",
    searchResults
  };
}


// export const addImage = image => ({
//   type: 'ADD_IMAGE',
//   newImage: [...this.state.boardImages, event.target.src]
// })

// export const addImage = image => {
//   return { type: 'ADD_IMAGE', image };
// };

//
// export const setDinners = dinners => {
//   return { type: 'SET_DINNERS', dinners };
// };
//
// export const removeDinner = dinnerId => {
//   return { type: 'REMOVE_DINNER', dinnerId };
// };
//
// export const substituteDinner = dinner => {
//   return { type: 'SUBSTITUTE_DINNER', dinner };
// };

// const API_URL = 'http://localhost:3001';
// export const fetchDinners = () => {
//   return dispatch => {
//     return fetch(`${API_URL}/dinners`)
//     .then(res => res.json())
//     .then(dinners => {
//       dispatch(setDinners(dinners));
//     }).catch(err => console.log(err))
//   };
// };
//
// export const createDinner = (dinner, routerHistory) => {
//   return dispatch => {
//     return fetch(`${API_URL}/dinners`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ dinner })
//     })
//     .then(res => res.json())
//     .then(dinner => {
//       if (dinner.id) {
//           dispatch(addDinner(dinner));
//           routerHistory.push(`${dinner.id}`);
//       } else {
//         const err = dinner.errors.join('\n\n')
//         alert(`${dinner.message}\n\n${err}`)
//       }
//     }).catch(err => console.log(err));
//   };
// };
//
// export const deleteDinner = (dinnerId, routerHistory) => {
//   return dispatch => {
//     return fetch(`${API_URL}/dinners/${dinnerId}`, {
//       method: 'DELETE'
//     })
//     .then(res => {
//       if (res.status === 204) {
//         routerHistory.replace('/dinners')
//         dispatch(removeDinner(dinnerId));
//       }
//     }).catch(err =>  console.log(err));
//   };
// };
//
// export const updateDinner = (dinner) => {
//   return dispatch => {
//     return fetch(`${API_URL}/dinners/${dinner.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ dinner })
//     })
//     .then(res => res.json())
//     .then(dinner => {
//       dispatch(substituteDinner(dinner));
//     }).catch(err => console.log(err));
//   };
// };
