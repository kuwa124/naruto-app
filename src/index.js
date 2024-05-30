// Reactライブラリをインポートする
import React from "react";
// ReactDOMライブラリをインポートする
import ReactDOM from "react-dom/client";
// CSSファイルをインポートする
import "./index.css";
// Appコンポーネントをインポートする
import App from "./App";

// rootという変数に、DOMの「root」要素を取得し、そこにReactコンポーネントをレンダリングするためのオブジェクトを作成する
const root = ReactDOM.createRoot(document.getElementById("root"));
// rootオブジェクトを使って、Appコンポーネントをレンダリングする
// React.StrictModeを使うことで、アプリケーションの潜在的な問題を特定しやすくなる
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);