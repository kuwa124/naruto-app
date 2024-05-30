// Reactのフックをインポートする
import { useState, useEffect } from "react";
// fetchCharactersAPIをインポートする
import fetchCharacters from "../api/fetchCharacters";

// useCharactersカスタムフックを定義する
const useCharacters = (initialPage = 1) => {
  // charactersの状態を管理するための状態変数とセッター関数
  const [characters, setCharacters] = useState([]);
  // ページの状態を管理するための状態変数とセッター関数
  const [page, setPage] = useState(initialPage);
  // ロード中かどうかを管理するための状態変数とセッター関数
  const [isLoading, setIsLoading] = useState(false);

  // ページが変更されたときにデータをフェッチする
  // 「フェッチ」は、メモリやストレージからデータを取得すること
  useEffect(() => {
    // データをフェッチする非同期関数
    const fetchData = async () => {
      // ロード中の状態を true に設定
      setIsLoading(true);
      // fetchCharactersAPIを使ってデータを取得する
      const data = await fetchCharacters(page);
      // データを状態に設定する
      setCharacters(data);
      // ロード中の状態を false に設定
      setIsLoading(false);
    };
    // fetchDataを呼び出す
    fetchData();
  }, [page]); // ページが変更されたときだけ useEffect が実行される

  // 次のページに移動するためのハンドラー関数
  const handleNext = () => setPage(page + 1);
  // 前のページに移動するためのハンドラー関数
  const handlePrev = () => setPage(page - 1);

  // カスタムフックから必要な値を返す
  return { characters, page, isLoading, handleNext, handlePrev };
};

// useCharactersカスタムフックをエクスポートする
export default useCharacters;