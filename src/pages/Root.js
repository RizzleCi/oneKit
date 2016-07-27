import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import './style.scss'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
  	let {name} = this.props.state.name
    return (
      <div className="infor">
      	<input placeholder="输入姓名" ref={(c) => this.nameInput = c}/>
      	<button onClick={this.handleClick.bind(this)}>确认</button>
      	<div>{name}</div>
      </div>
    )
  }
  handleClick(){
  	const {addName} = this.props.actions
  	let name = this.nameInput.value
  	addName(name)
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
