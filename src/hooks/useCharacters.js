// Reactのフックから、useStateとuseEffectをインポートする
import { useState, useEffect } from "react";
// 作成したfetchCharacters関数をインポートする
import fetchCharacters from "../api/fetchCharacters";

// useCharactersというカスタムフックを定義する
const useCharacters = () => {
  // charactersという状態変数とその更新関数setCharactersを定義する
  const [characters, setCharacters] = useState([]);
  // pageという状態変数とその更新関数setPageを定義する
  const [page, setPage] = useState(1);
  // isLoadingという状態変数とその更新関数setIsLoadingを定義する
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
    // ページが変更されたときだけ useEffect が実行される
  }, [page]);

  // handleNextという関数を定義する
  const handleNext = async () => {
    // 次のページ番号を計算する
    const nextPage = page + 1;
    // ロード中の状態をtrueに設定する
    setIsLoading(true);
    // fetchCharacters関数を呼び出して、次のページのデータを取得する
    const fetchedCharacters = await fetchCharacters(nextPage);
    // 取得したデータをcharactersに設定する
    setCharacters(fetchedCharacters);
    // ページ番号を更新する
    setPage(nextPage);
    // ロード中の状態をfalseに設定する
    setIsLoading(false);
  };

  // handlePrevという関数を定義する
  const handlePrev = async () => {
    // 前のページ番号を計算する
    const prevPage = page - 1;
    // ロード中の状態をtrueに設定する
    setIsLoading(true);
    // fetchCharacters関数を呼び出して、前のページのデータを取得する
    const fetchedCharacters = await fetchCharacters(prevPage);
    // 取得したデータをcharactersに設定する
    setCharacters(fetchedCharacters);
    // ページ番号を更新する
    setPage(prevPage);
    // ロード中の状態をfalseに設定する
    setIsLoading(false);
  };

  // characters、page、isLoading、handleNext、handlePrevをオブジェクトとして返す
  return { characters, page, isLoading, handleNext, handlePrev };
};

// useCharactersをエクスポートする
export default useCharacters;