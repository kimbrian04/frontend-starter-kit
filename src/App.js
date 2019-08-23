import React from 'react'
import { useTranslation } from 'react-i18next'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { sampleThunkAction, sampleAction } from './actions/app'

const App = props => {
  const { t } = useTranslation('common') // specifying to use common namespace (common.json)
  return (
    <div className="App">
      <button type="button" onClick={() => props.sampleAction(true)}>
        Show Message
      </button>
      <button type="button" onClick={() => props.sampleAction(false)}>
        Hide Message
      </button>
      {props.app.showSampleMessage && <p>{t(props.app.sampleMessage)}</p>}
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
