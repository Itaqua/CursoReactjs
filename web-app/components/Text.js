import React from 'react'

export default React.createClass({
  render (){
    return <input type="text" defaultValue={this.props.value} />
  }
})