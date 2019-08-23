import { SAMPLE_ACTION_TYPE } from './actionTypes'

export const sampleAction = payload => ({
  type: SAMPLE_ACTION_TYPE,
  payload: payload
})

export const sampleThunkAction = params => (dispatch, getState) => {
  //const { app } = getState() // getState() returns the redux store

  // Thunk allows for async functions here (i.e. fetch)
  /*
  // GET
  fetch('https://www.some.api/getItems')
    .then(res => res.json)
    .then(data => {
      console.log(data)
    })

  // POST
  fetch('https://www.some.api/postItems',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      a: 1
    })
  })
    .then(res => res.json)
    .then(data => {
      console.log(data)
    })

    // Using async await
    const response = await fetch('https://www.some.api/postItems', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        a: 1
      })
    })
    const data = await response.json();
  */
  console.log('inside sampleThunkAction')

  dispatch(sampleAction()) // dispatch an action to store
}
