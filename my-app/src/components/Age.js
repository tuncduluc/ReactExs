import React from 'react';


class Age extends React.Component {
    render () {
        return (<p>Your age is {this.props.age}</p>)
    }
}

Age.defaultProps = {   
    age: 19    
  }
  
export default Age