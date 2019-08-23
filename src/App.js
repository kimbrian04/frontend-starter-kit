import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sampleThunkAction, sampleAction } from './actions/app'

const App = props => {
  // can use props.app, props.sampleThunkAction, etc.
  props.sampleThunkAction()

  return (
    <div className="App">
      <button type="button">Show Message</button>
      <button type="button">Hide Message</button>
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
