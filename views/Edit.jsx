const React = require('react');
// As you can see we are using the app layout
//const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <div>      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
          <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" /><br/>
              Entry: <input type="text" name="entry" /><br/>
              Is Ship Broken: 
              { this.props.log.shipBroken? <input type="checkbox" name="shipBroken" defaultChecked />: <input type="checkbox" name="shipBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;