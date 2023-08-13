import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-bar/search-box.component'
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
        <h1>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'Search Monster'}
          className={'monsters-search-box'}
        />
        <
          CardList
            monsters={filteredMonsters}
        />

      </div>
    )
  }
}

export default App
