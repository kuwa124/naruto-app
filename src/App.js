// reactからuseEffectフックをインポートする
import { useEffect, useState } from "react";
// App.cssファイルをインポートする
import "./App.css";
// axiosライブラリをインポートする(HTTPリクエストを行うため)
import axios from "axios";
 // 1ページあたりの最大表示件数
const limit = 15;

// Appコンポーネントを定義する
function App() {

  // useStateフックを使って、charactersステートとsetCharactersステートを初期化する
  const [characters, setCharacters] = useState([]);
  // useStateフックを使って、pageステートとsetPageステートを初期化する
  const [page, setPage] = useState(1);
  // useStateフックを使って、isLoadingステートとsetIsLoadingステートを初期化する
  const [isLoadingm, setIsloading] = useState(false);
  // useEffectフックを使って、コンポーネントが表示された直後に(マウント時)fetchCharacters関数を実行する
  useEffect(() => {
    fetchCharacters();
  }, []); //ウェブページが読み込まれた時、1回だけ実行
  // 空の配列は、効果がマウント時のみ実行されることを意味する

  // fetchCharacters関数を定義する(async () => { ... } は、非同期関数を定義するための構文)
  // 処理が完了するのを待たずに次の処理に進める関数;
  const fetchCharacters = async (page) => {
    // isLoadingステートをtrueに設定する
    setIsloading(true);
    // API URLを定義する
    const apiUrl = "https://narutodb.xyz/api/character";

    // axiosを使ってAPIからデータを取得する(awaitでデータが届くのを待つことができる)
    const result = await axios.get(apiUrl, { params: { page, limit } });
    // 取得したデータをcharactersステートに設定する
    setCharacters(result.data.characters);
    // isLoadingステートをfalseに設定する
    setIsloading(false);
  };

  // 次のページのデータを取得するhandleNext関数を定義する
  const handleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  // 前のページのデータを取得するhandlePrev関数を定義する
  const handlePrev = async () => {
    const prevPage = page - 1;
    await fetchCharacters(prevPage);
    setPage(prevPage);
  };

  // Appコンポーネントをレンダリングする
  return (
    <div className="container">
      {/* ローディング中の場合 */}
      {isLoadingm ? (
        <div>Now Loading...</div>
      ) : (
        //ロードが完了した場合
        <main>
          <div className="cards-container">
            {characters.map((character) => {
              return (
                <div className="card" key={character.id}>
                  <img
                    src={
                      // character.images[0]がnullでない場合はそれを、nullの場合は"dummy.png"を表示
                      character.images[0] != null
                        ? character.images[0]
                        : "dummy.png"
                      // Reactアプリケーションでは、publicディレクトリ内のファイルには直接アクセスできます。
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
                      {character.personal?.affiliation ?? "なし"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="pager">
            {/* pageが1の場合はpreviousボタンを無効化する */}
            <button disabled={page === 1} className="prev" onClick={handlePrev}>
              previous
            </button>

            {/* ページ番号を表示 */}
            <span className="page-number">{page}</span>

            {/* charactersの件数がlimitを超えている場合はnextボタンを無効化する */}
            <button
              disabled={limit > characters.length}
              className="next"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

// Appコンポーネントをエクスポートする
export default App;
