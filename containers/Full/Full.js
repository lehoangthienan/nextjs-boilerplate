import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import loGet from 'lodash/get'
import Cookie from 'js-cookie'

import AppActions from '../../redux/appRedux'
import { connectSocket, disConnectSocket } from '../../services/socketService'

const Header = dynamic({ loader: () => import('../../components/Header') })
const Footer = dynamic({ loader: () => import('../../components/Footer') })

class Full extends Component {
  componentDidMount() {
    const {
      startupWorkingFlow,
      history,
      dispatch,
    } = this.props
    startupWorkingFlow(history)

    const token = Cookie.get('token') || ''
    if (token) {
      const user = Cookie.get('user') || {}
      connectSocket(token, dispatch, loGet(user, ['_id'], ''))
    }
  }

  componentWillUnmount() {
    disConnectSocket()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

Full.propTypes = {
  startupWorkingFlow: PropTypes.func,
  history: PropTypes.object,
  children: PropTypes.any,
  dispatch: PropTypes.any,
}

const mapStateToProps = (state) => ({
  isReady: state.toJS().app.isReady,
})

export const mapDispatchToProps = (dispatch) => ({
  dispatch,
  startupWorkingFlow: (history) => {
    dispatch(AppActions.startupWorkingFlow(history)) //eslint-disable-line
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Full)
