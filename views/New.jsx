const React = require('react');

//action="/logs" method="POST"
class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Log page</h1>
            <form action="/logs" method="POST">
              Title: <input type="text" name="title" /><br/>
              Entry: <input type="text" name="entry" /><br/>
              Is Ship Broken: <input type="checkbox" name="shipBroken" /><br/>
              <input type="submit" name="" value="Create Log"/>
            </form>
            
        </div>);
    }
  }

module.exports = New;