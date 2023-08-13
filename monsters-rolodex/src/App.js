import { Component } from 'react'

import './App.css'

class App extends Component {
  constructor() { // Runs First
    super()
    this.state = {
      monsters: []
    }
  }

  // Runs after the component output has been rendered to the DOM
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }, () => {
        console.log(this.state.monsters)
      }))
  }

  // Runs Second, mounts initial UI state to the DOM
  render() {
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        {
          this.state.monsters.map(monster => {
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
