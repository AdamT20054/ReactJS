import './App.css';
import {Component} from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: []
        }
        console.log(`Constructor`);
    }

    componentDidMount() {
        console.log(`Component Did Mount`);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => this.setState(() => {
                    return { monsters: users }
            },
                () => {
                    //console.log(this.state)
                }
            ))
    }


    render() {
        console.log(`Rendered`);
        return (
            <div className="App" data-testid="app">
                <input className='aearch-box' type='search' placeholder='Search Monsters' onChange={(event) => {
                    const searchString = event.target.value.toLowerCase();
                    const filteredMonsters = this.state.monsters.filter((monster) => {
                            return monster.name.toLowerCase().includes(searchString);
                    })
                    this.setState(() => {
                        return { monsters: filteredMonsters }
                    })

                }
                }/>
                {
                    this.state.monsters.map((monster) => {
                        return (
                            <div key={monster.id}>
                                <h1>{monster.name}</h1>
                            </div>
                        );
                    })
                }
            </div>
        );
  }
}


export default App;
