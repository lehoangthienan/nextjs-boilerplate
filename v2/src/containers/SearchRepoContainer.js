import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getTopRepos } from 'actions/repos'
import SearchResults from 'components/SearchResults'
import Result from 'components/Result'

import styles from './styles.module.scss'

class SearchRepoContainer extends Component {
  static async getInitialProps ({ store, query }) {
    const lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
    return { lang }
  }

  componentDidMount () {
    const { getTopRepos } = this.props
    getTopRepos({ lang: 'ruby' })
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }

  render () {
    const { repos } = this.props
    return (
      <Fragment>
        <div className={styles.goTo} onClick={this._goToAbout}>
          GO TO ABOUT (with <code>router</code>)
        </div>
        <Result/>
        <SearchResults repos={repos} />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

SearchRepoContainer.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
}

export { SearchRepoContainer }
export default connect(mapStateToProps, {
  getTopRepos
})(SearchRepoContainer)
