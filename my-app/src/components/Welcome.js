import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
    
  render() {
    return (<div>
            <p>Welcome, {this.props.name}!</p>
            
             {this.props.age>18 && this.props.age<65 && this.props.name=="John"
              ?<Age age={this.props.age}/>
              :<h1>You are too young or too old or you are not John.</h1>}
            </div>
            );

  
}
}

Welcome.defaultProps = {   //So it does not change the message. Cuz I defined the name as "Feras" in App.js.
    name: 'Default'
    
  }
    


export default Welcome