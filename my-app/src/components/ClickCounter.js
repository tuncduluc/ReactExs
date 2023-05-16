import React from 'react';

class ClickCounter extends React.Component {
    state = {
        count: 0
    }


incButtonClick = () => {
    this.setState(prevState => ({
            count: prevState.count + 1
    }));
}

render() {    
    return (
        <div>
            <div>
                Counter: {this.state.count}
            </div>
            <button onClick={this.incButtonClick}> Click here </button>
            </div>
        
    )
}
}

export default ClickCounter;