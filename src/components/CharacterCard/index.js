// Reactライブラリをインポートする
import React from 'react';
// index.cssファイルをインポートする
import './index.css';

// CharacterCardコンポーネントを定義する
const CharacterCard = ({ character }) => {
  return (
    // カードコンポーネントのdiv要素
    <div className="card">
      {/* キャラクターの画像を表示する */}
      <img
        // 画像URLを設定する (nullの場合はダミー画像を使用する)
        src={character.images[0] != null ? character.images[0] : 'dummy.png'}
        alt="character" // 代替テキスト
        className="card-image" // CSSクラス
      />
      {/* カードのコンテンツ部分 */}
      <div className="card-content">
        {/* キャラクター名を表示する */}
        <h3 className="card-title">{character.name}</h3>
        {/* キャラクターのデビュー作品を表示する (nullの場合は 'なし' と表示する) */}
        <p className="card-description">
          {character.debut?.appearsIn ?? ' なし'}
        </p>
      </div>
      {/* カードのフッター部分 */}
      <div className="card-footer">
        {/* キャラクターの所属を表示する (nullの場合は 'なし' と表示する) */}
        <span className="affiliation">
          {character.personal?.affiliation ?? 'なし'}
        </span>
      </div>
    </div>
  );
};

// CharacterCardコンポーネントをエクスポートする
export default CharacterCard;