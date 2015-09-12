React = require('react')
Label = require('./Label')

module.exports = React.createClass
  render:->
    {list} = @props
    # labels = list.map (item)=>
    #   <Label persona={item}/>

    labels = (<Label persona={item}/> for item in list)
    <div>CF{labels}</div>
  