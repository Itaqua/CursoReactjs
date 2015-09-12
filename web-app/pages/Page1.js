import React from 'react'
import css  from '../styles/style.css'
import List from '../components/List'
import Text from '../components/Text'

export default React.createClass({
  render (){
    return (
      <div>
        Titulo: <Text value="Octavio"/>
        <List list={this.props.list}/>
      </div>
    )
  }
})