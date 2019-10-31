import React, {Component} from 'react';

class Selector extends Component{

  render(){
    return(
      <div className = "Container">
        <div className="navbar">
          <div> Selected: </div>
          <div>What goes here </div>
        </div>
        <div className="ghost-list"> Put the Ghost component here </div>
      </div>
    )
  }
}

export default Selector;
