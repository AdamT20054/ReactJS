import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: { firstName: 'Adam', lastName: `O'neill` }
        }
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hi {this.state.name.firstName}!
            </p>
            <button onClick={() => {
                this.setState(() => {
                    return {
                        name: {firstName: 'Bob', lastName: 'Evans'}
                    }
                }, () => {
                    console.log(this.state); // ONLY going to run after the state changes have updated
                })
            }}>
                Change Name
            </button>
          </header>
        </div>
    );
  }
}


export default App;
