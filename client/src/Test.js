import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class Test extends Component {
  constructor(){
    super(); //calling constructor method on Component

    this.state = { // state is always a JSON object
      name: {firstName: 'Jasmine', lastName: 'Daniels'},
      company: 'Liberty Mutual'
    }
  }
  render(){ //telling React what to render
    return (
      <div className="Test">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi! I'm {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            //async shallow merge - this is passing an object 
            // this.setState({ name:{firstName: 'Hazel', lastName: 'Broom'}})

            //this is passing a function
            this.setState(
              (state, props) => {
                //updater function
                return {
                  name:{firstName: 'Hazel', lastName: 'Broom'},
                };
              }, 
              () => { // callback function - runs after state has been updated
                console.log(this.state)
              })
            // console.log(this.state)
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
  
}

export default Test;