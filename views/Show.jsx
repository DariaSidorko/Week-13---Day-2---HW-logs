
const React = require('react');

class Show extends React.Component {
  render () {
    const log = this.props.log
     return (
       <div>
       <h1> Show Page </h1>
        <div> {log.title}  </div>
        <div>{log.entry} </div>
        <div>{log.shipBroken? 'Ship is broken' : 'Ship is one piece' } </div>
       </div>
       );
      }
 }
 module.exports  = Show;