import React from 'react';
import CharacterCard from '../CharacterCard';
import './index.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="cards-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;