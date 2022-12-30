import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Adam'
        }
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hi {this.state.name}! {/** Get name keys value from components state */}
            </p>
            <button>  {/* This is a button */}
                Change Name {/* This is the text inside the button */}
            </button> {/* This is the end of the button */}
          </header>
        </div>
    );
  }
}


export default App;
