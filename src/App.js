import { Component } from 'react';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };




  render() {
    const { good } = this.state;
  

    return (
 
       
        <div>
         
        </div>
   
    );
  }
}

export default App;
