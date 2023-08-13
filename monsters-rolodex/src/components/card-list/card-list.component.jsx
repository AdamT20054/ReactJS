import { Component } from 'react';
import './card-list.styles.css';
import CardContainers from '../card-containers/card-containers.components'
class CardList extends Component {

  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {
          monsters.map((monster) => {
            const { id, name, email } = monster;
            return(
              <CardContainers
                id={id}
                name={name}
                email={email}
              />
            )})
        }
      </div>
    )
  }
}

export default CardList;
