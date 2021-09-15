import React from 'react';
import './Cards.css';

export default function Cards(props) {
  const data = props.pokemons;

  const buildCards = data => {
    return data.map(pokemon => {
      const { name, id, src } = pokemon;
      return (
        <div key={name} className="card">
          <div>
            <span className="name">{name}</span>{' '}
            <span className="id">{id}</span>
          </div>
          <img src={src} alt={name} />
        </div>
      );
    });
  };
  return <div className="card-area">{buildCards(data)}</div>;
}
