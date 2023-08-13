import { Component } from 'react'

import './App.css'

class App extends Component {
  constructor() { // Runs First
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('Constructor')
  }

  // Runs after the initial UI has been rendered (mounted) to the DOM
  componentDidMount() {
    console.log('ComponentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {
          monsters: users,
        }
      }, () => {
        console.log(this.state.monsters)
      }))
  }


  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value }
    });
  }


  // Runs Second, mounts initial UI state to the DOM. Does not mount again, just updates.
  render() {
    console.log('Render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className='App'>

        <input className='search-box'
               type='search'
               placeholder='Search Monsters'
               onChange={onSearchChange}
        />

        <h1>Monsters Rolodex</h1>

        {
          filteredMonsters.map(monster => {
            return <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          })
        }

      </div>
    )
  }
}

export default App
