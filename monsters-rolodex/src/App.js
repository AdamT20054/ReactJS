import { Component } from 'react';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
             monsters: [
                 {
                    name: 'Linda',
                },
                {
                    name: 'Frank',
                },
                {
                    name: 'Jacky',
                },
                {
                    name: 'Bobby',
                }
             ]
        }
    }

  render() {
    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            {
                this.state.monsters.map(monster => {
                    return <h1>{monster.name}</h1>
                })
            }
        </div>
    );
  }
}

export default App;
