import { Component } from 'react';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
             monsters: [
                 {
                    name: 'Linda',
                    id: '1'
                },
                {
                    name: 'Frank',
                    id: '2'
                },
                {
                    name: 'Jacky',
                    id: '3'
                },
                {
                    name: 'Bobby',
                    id: '4'
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
                    return <div key={monster.id}>
                        <h1>{monster.name}</h1>
                    </div>
                })
            }
        </div>
    );
  }
}

export default App;
