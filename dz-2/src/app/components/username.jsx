import React from 'react';
import ReactDOM from 'react-dom';

var JUserName = React.createClass({
//class JUserName extends React.Component {
  render : function() {
    return (
      <span>My Name</span>
    )
  }
});
JUserName = React.createFactory(JUserName);

module.exports = JUserName;
