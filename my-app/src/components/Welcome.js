import React from 'react';

class Welcome extends React.Component {
    
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}

Welcome.defaultProps = {   //So it does not change the message. Cuz I defined the name as "Feras" in App.js.
    name: 'Default'
}
    


export default Welcome;