import React from 'react'
import Label from './Label'

export default React.createClass({
  render (){
    const {list} = this.props
    const labels = list.map((item)=><Label persona={item}/>)
    return <div>JS:{labels}</div>
  }
})