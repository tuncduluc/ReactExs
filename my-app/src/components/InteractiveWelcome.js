import React, { Component } from "react";
import Welcome from "./Welcome";
import Login from "./Login";


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
                <Welcome name={this.state.name} />
                <Login onLogin={this.handleLogin} onReset={this.handleReset}/>
            </div>
        )
    }
}

export default InteractiveWelcome;