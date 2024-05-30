// axiosライブラリをインポートする
import axios from "axios";

// 1ページあたりの表示数を設定する定数
const limit = 15;

// キャラクターデータをAPIからフェッチするための非同期関数
const fetchCharacters = async (page) => {
  // APIのURLを定義
  const apiUrl = "https://narutodb.xyz/api/character";
  
  // axiosを使ってAPIからデータを取得する
  // ページ番号とリミットを指定してパラメータを渡す
  const result = await axios.get(apiUrl, { params: { page, limit } });
  
  // レスポンスから必要なデータ(characters)を取り出して返す
  return result.data.characters;
};

// fetchCharacters関数をエクスポートする
export default fetchCharacters;