// Reactライブラリをインポートする
import React from 'react';
// index.cssファイルをインポートする
import './index.css';

// Pagerコンポーネントを定義する
const Pager = ({ page, handlePrev, handleNext, isNextDisabled }) => {
  return (
    // ページャーのdiv要素
    <div className="pager">
      {/* 前のページに移動するボタン */}
      <button 
        // ページが1の場合は無効化する
        disabled={page === 1}
        className="prev"
        // クリック時にhandlePrevを呼び出す
        onClick={handlePrev}
      >
        前のページ
      </button>
      {/* 現在のページ番号を表示する */}
      <span className="page-number">{page}</span>
      {/* 次のページに移動するボタン */}
      <button
        // 次のページが無効な場合は無効化する
        disabled={isNextDisabled}
        className="next"
        // クリック時にhandleNextを呼び出す
        onClick={handleNext}
      >
        次のページ
      </button>
    </div>
  );
};

// Pagerコンポーネントをエクスポートする
export default Pager;