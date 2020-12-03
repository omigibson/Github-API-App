import React, { Component} from "react";
import { Counter, RepoInfo } from "./components";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
}
  onCounterClick = (isIncrement = false) => {
    // If increment button was clicked, increase counter. Otherwise decrease counter
    if (isIncrement){
      this.setState({
          count: this.state.count + 1
      });
  }
  else {
      this.setState({
          count: this.state.count - 1
      });
  }
  }
  render(){
    return(
      <div className="App">
        <h1>My favorite Github repos</h1>
        <Counter count={this.state.count} onCounterClick={this.onCounterClick} /> 
        <RepoInfo count={this.state.count} />
      </div>
    );
  }
}

export default App;