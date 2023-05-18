const React = require('react');
//const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div>
        <div>Logs Page</div>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
        {this.props.logs.map((log,i) => {
                  return <li key={i}>
                    <a href={`/logs/${log._id}`}>{log.title}</a>
                    <div>{log.entry}</div>
                      { log.shipBroken? <span>Ship is broken</span>: <span> Ship is not broken </span>}
                      <form action={`/logs/${log._id}?_method=DELETE`} method="POST">  
                          <a href={`/logs/${log._id}/edit`}>Edit This Log</a><br></br>
                          <input type="submit" value="DELETE"/>
                          <br></br><br></br>
                      </form>
                  </li>
              })}
        
        </ul>
      </div>
    )
  }
}

module.exports = Index;