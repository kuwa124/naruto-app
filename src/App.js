// Reactライブラリをインポートする
import React from "react";
// App.cssファイルをインポートする
import "./App.css";
// CharacterListコンポーネントをインポートする
import CharacterList from "./components/CharacterList";
// Pagerコンポーネントをインポートする
import Pager from "./components/Pager";
// useCharactersカスタムフックをインポートする
import useCharacters from "./hooks/useCharacters";

// Appコンポーネントを定義する
const App = () => {
  // useCharactersフックから必要な値を分割代入で受け取る
  const { characters, page, isLoading, handleNext, handlePrev } = useCharacters();

  // JSXを返すレンダー関数
  return (
    // コンテナ用のdiv要素
    <div className="container">
      {/* isLoadingがtrueの場合は、ロード中のメッセージを表示する */}
      {isLoading ? (
        <div>Now Loading...</div>
      ) : (
        // メインコンテンツ
        <main>
          {/* CharacterListコンポーネントに、charactersプロパティを渡す */}
          <CharacterList characters={characters} />
          {/* Pagerコンポーネントに必要なプロパティを渡す */}
         <Pager 
            page={page} /* 現在のページ */
            handleNext={handleNext} /* 次のページへのハンドラー */
            handlePrev={handlePrev} /* 前のページへのハンドラー */
            isNextDisabled={characters.length < 15} /* 次のページが無効かどうかの判定 */
          />
        </main>
      )}
    </div>
  );
};

// Appコンポーネントをエクスポートする
export default App;