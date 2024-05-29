import React from 'react';
import './Pager.css';

const Pager = ({ page, handlePrev, handleNext, hasMore }) => {
  return (
    <div className="pager">
      <button disabled={page === 1} className="prev" onClick={handlePrev}>
        previous
      </button>
      <span className="page-number">{page}</span>
      <button disabled={!hasMore} className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pager;