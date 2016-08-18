import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import Loading from '../components/loading'

import './style.scss'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  	let {name,data,loading} = this.props.state.name
    let loadCom = '', id = ''
    if (loading) {
      loadCom = <Loading />
    }
    if (data) {
      id = data.id
    }
    return (
      <div className="infor">
      	<input placeholder="输入姓名" ref={(c) => this.nameInput = c}/>
      	<button onClick={this.handleClick.bind(this)}>确认</button>
        {loadCom}
        <div>{id}</div>
      </div>
    )
  }
  handleClick(){
  	const {addName, fetchData} = this.props.actions
  	let name = this.nameInput.value
  	addName(name)
    fetchData(name)
  	console.log(this.props.state)
  }
}
function mapState(state) {
  return {
    state: state
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Root)
