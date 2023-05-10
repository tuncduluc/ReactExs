import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.initialValue || 0
      };
    }

    componentDidMount() {
        const {incAmount, incInterval} = this.props;
        this.interval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count + incAmount
          }));
          
        }, incInterval);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {
        return (
          <div>
            <h1>{this.state.count}</h1>
          </div>
        );
      }
    }
    
    export default Counter;