import React, { Component } from 'react'
import { connect } from 'react-redux'

class JustCont extends Component {
  render() {
    return (
      <div>
        {this.props.title || 'count'}: {this.props.countItem}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countItem: state.repo.data.length
})

export default connect(mapStateToProps)(JustCont)

// connect(null, mapDispatchToProps)(JustCont)
