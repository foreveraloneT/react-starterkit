import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import JustCount from '../../../components/common/JustCount'
import {
  getRepoRequest as getRepoRequestAction,
  getRepoSuccess as getRepoSuccessAction,
  createMock as createMockAction,
} from '../../../actions/repo'
import './index.scss'

class Home extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    getRepoRequest: PropTypes.func.isRequired,
    getRepoSuccess: PropTypes.func.isRequired,
    createMock: PropTypes.func.isRequired,
  }

  // doFetchData = () => {
  //   const {
  //     getRepoRequest,
  //     getRepoSuccess,
  //   } = this.props

  //   getRepoRequest()
  //   fetch('https://api.github.com/users/foreveraloneT/repos')
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error('Bad response from server')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       getRepoSuccess(data)
  //     })
  // }
  doFetchData = () => {
    // folder: epic > redux-observable
    this.props.getRepoRequest()
  }

  addMockData = () => {
    this.props.createMock()
  }

  render() {
    const { data, isLoading } = this.props
    return (
      <div>
        <h1>My Repo</h1>
        <button onClick={this.doFetchData}>Load Data</button>
        <button onClick={this.addMockData}>Add Data</button>
        {
          isLoading ? <div>Loading...</div> : null
        }
        {
          data.map(repo => (
            <div
              className="repo-wrap"
              key={repo.id}
            >
              {repo.full_name}
            </div>
          ))
        }
        <JustCount title="#repo" />
      </div>
    )
  }
}

// state is Object
const mapStateToProps = state => ({
  isLoading: state.repo.isLoading,
  data: state.repo.data,
})

// dispatch is dispatch function
const mapDispatchToProps = dispatch => ({
  getRepoRequest: () => { dispatch(getRepoRequestAction()) },
  getRepoSuccess: (data) => { dispatch(getRepoSuccessAction(data)) },
  createMock: () => { dispatch(createMockAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
