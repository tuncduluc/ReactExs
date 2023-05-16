import React, { Component } from "react";
import Welcome from "./Welcome";


class InteractiveWelcome extends Component {
    state = {
        name: ''
    };

    inputChange = event => {
        this.setState({ name: event.target.value})
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.inputChange}/>
                <Welcome name={this.state.name} />
            </div>
        )
    }
}

export default InteractiveWelcome;