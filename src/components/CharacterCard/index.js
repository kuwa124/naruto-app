import React from 'react';
import './index.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img
        src={character.images[0] != null ? character.images[0] : 'dummy.png'}
        alt="character"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-description">
          {character.debut?.appearsIn ?? ' なし'}
        </p>
      </div>
      <div className="card-footer">
        <span className="affiliation">
          {character.personal?.affiliation ?? 'なし'}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;