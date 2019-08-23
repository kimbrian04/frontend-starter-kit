import { SAMPLE_ACTION_TYPE } from '../actions/actionTypes'

const initialState = {
  sampleMessage: 'sample_message',
  showSampleMessage: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return { ...state, showSampleMessage: action.payload }
    default:
      return state
  }
}

export default app
