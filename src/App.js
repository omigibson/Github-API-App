import React, { Component} from "react";
import { Button } from "./components";
import { ReactComponent as PlusIcon } from "./icons/plus-icon.svg";
import { ReactComponent as MinusIcon } from "./icons/minus-icon.svg";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!!! </h1>
        <Button  buttonText="- Decrement"><MinusIcon /> Decrement</Button>
        <Button primary buttonText="+ Increment"><PlusIcon /> Increment</Button>
      </div>
    );
  }
}

export default App;