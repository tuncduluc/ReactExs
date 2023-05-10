import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

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
            <CounterDisplay count={this.state.count}/>
          </div>
        );
      }
    }
    
    export default Counter;