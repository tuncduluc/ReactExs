import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
   
     state = {
        count: this.props.initialValue || 0
      };
    
  
    componentDidMount() {
        
        const {incAmount, incInterval} = this.props;
        this.interval = setInterval(() => {
          console.log('Interval tick');
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