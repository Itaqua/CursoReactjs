//ES6 Javascript   Babel -> JS
//import React from 'react'

var React = require('react');

//React.render(<div>Hola Mundo</div>, document.body); //JSX: Fb React
React.render(React.DOM.div(null,"Hola Mundo Feliz"), document.body)
// React.render(React.createElement(
//     'div',
//     null,
//     'Hola Mundo'
//   ), document.body);