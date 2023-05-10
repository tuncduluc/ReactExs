import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
    
  render() {
    return (<div><p>Welcome, {this.props.name}!</p>
    <Age age='30'/></div>);

  
}
}

Welcome.defaultProps = {   //So it does not change the message. Cuz I defined the name as "Feras" in App.js.
    name: 'Default'
    
  }
    


export default Welcome