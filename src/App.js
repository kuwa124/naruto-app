// reactからuseEffectフックをインポートする
import { useEffect, useState } from "react";
// App.cssファイルをインポートする
import "./App.css";
// axiosライブラリをインポートする(HTTPリクエストを行うため)
import axios from "axios";

// Appコンポーネントを定義する
function App() {
  // useEffectフックを使って、コンポーネントが表示された直後に(マウント時)fetchCharacters関数を実行する
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []); //ウェブページが読み込まれた時だけ1回だけ実行

  // fetchCharacters関数を定義する(async () => { ... } は、非同期関数を定義するための構文)
  // 処理が完了するのを待たずに次の処理に進める関数;
  const fetchCharacters = async () => {
    // API URLを定義する
    const apiUrl = "https://narutodb.xyz/api/character";

    // axiosを使ってAPIからデータを取得する(awaitでデータが届くのを待つことができる)
    const result = await axios.get(apiUrl);
    // 取得したデータをコンソールに出力する
    setCharacters(result.data.characters);
    console.log(result);
  };

  // Appコンポーネントをレンダリングする
  return <div className="container">
    <main>
      <div className="cards-container">
        {characters.map((character) => {
          return (
            <div className="card" key={character.id}>
              <img
                src={
                  character.images[0] != null
                    ? character.images[0]
                    : "dummy.png"
                }
                alt="character"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{character.name}</h3>
                <p className="card-description">
                  {/*
                    オプショナルチェーン:「？.」nullまたはundefinedの場合、?.の右側の部分はスキップされ、undefinedが返されます。
                    nullish coalescingオペレータ:「??」左側の値がnullまたはundefinedの場合に、右側の値を返します。 */}
                  {character.debut?.appearsIn ?? " なし"}
                </p>
              </div>
              <div className="card-fooer">
                <span className="affiliation">
                  {character.personal?.affiliation ?? 'なし' }
                </span>
              </div>
            </div>
          );
        })}
      </div>
        
    </main>
  </div>;
}

// Appコンポーネントをエクスポートする
export default App;
