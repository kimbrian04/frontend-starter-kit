import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sampleThunkAction, sampleAction } from './actions/app'

const App = props => {
  // can use props.app, props.sampleThunkAction, etc.

  return (
    <div className="App">
      <button type="button" onClick={() => props.sampleAction(true)}>
        Show Message
      </button>
      <button type="button" onClick={() => props.sampleAction(false)}>
        Hide Message
      </button>
      {props.app.showSampleMessage && <p>{props.app.sampleMessage}</p>}
    </div>
  )
}

export default connect(
  state => {
    return {
      app: state.app
    }
  },
  dispatch => {
    return bindActionCreators(
      {
        sampleThunkAction,
        sampleAction
      },
      dispatch
    )
  }
)(App)
