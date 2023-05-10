import React from 'react';

class Welcome extends React.Component {
    
  render() {
    return (<div><p>Welcome, {this.props.name}!</p><p>Your age is, {this.props.age}.</p></div>);

  
}
}

Welcome.defaultProps = {   //So it does not change the message. Cuz I defined the name as "Feras" in App.js.
    name: 'Default',
    age: 23
  }
    


export default Welcome