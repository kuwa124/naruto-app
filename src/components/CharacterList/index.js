// Reactをインポートする
import React from 'react';
// CharacterCardコンポーネントをインポートする
import CharacterCard from '../CharacterCard';
// スタイルシートをインポートする
import './index.css';

// CharacterListコンポーネントを定義する
const CharacterList = ({ characters }) => {
  // JSXを返す
  return (
    // cards-containerクラスを持つdiv要素
    <div className="cards-container">
      {/* charactersの配列をmapで処理し、CharacterCardコンポーネントを生成する */}
      {characters.map((character) => (
        // キーにcharacter.idを指定し、characterプロパティにcharacterオブジェクトを渡す
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

// CharacterListコンポーネントをエクスポートする
export default CharacterList;