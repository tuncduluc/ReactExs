import React, { Component } from 'react';

class ClickTracker extends Component {
    state = {
        updatedButton: ''
    };

    
    handleClick = (event) => {
        const buttonText = event.target.innerHTML;
        
        this.setState({
            updatedButton: buttonText
        })
    }

    render () {
        return (
            <div>
                <h1>updated button: {this.state.updatedButton}</h1>
                <button onClick={this.handleClick}>Button1</button>
                <button onClick={this.handleClick}>Button2</button>
                <button onClick={this.handleClick}>Button3</button>
            </div>
        );
    }
    
}

export default ClickTracker;