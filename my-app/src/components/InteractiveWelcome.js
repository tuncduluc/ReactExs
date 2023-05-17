import React, { Component } from "react";
import Welcome from "./Welcome";
import UncontrolledLogin from "./UncontrolledLogin";


class InteractiveWelcome extends Component {
    state = {
        name: ''
    };

    inputChange = event => {
        this.setState({ name: event.target.value})
    };
    handleLogin = (credentials) => {
        console.log('Logging in with:', credentials);
      }
      
    handleReset = () => {
        
        this.setState({
            
            name:''
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.inputChange}/>
                <Welcome name={this.state.name} age={this.state.age} />
                <UncontrolledLogin onLogin={this.handleLogin} onReset={this.handleReset}/>
            </div>
        )
    }
}

export default InteractiveWelcome;