import { SAMPLE_ACTION_TYPE } from '../actions/actionTypes'

const initialState = {
  sampleMessage: 'This is a message',
  showSampleMessage: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return Object.assign({}, state, { showSampleMessage: action.payload })
    default:
      return state
  }
}

export default app
