import { Component } from 'react';
import './card-containers.styles.css';

class CardContainers extends Component {

  render() {
    const { id, name, email } = this.props;
    return(
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />

        <h2>{name}</h2>
        <p>{email}</p>

      </div>
    )

  }
}

export default CardContainers;