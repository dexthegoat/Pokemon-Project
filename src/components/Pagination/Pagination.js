import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationCom = props => {
  let [page, handler, maxPage] = props.thing;

  const next = () => {
    handler(true);
  };

  const prev = () => {
    handler(false);
  };

  const prevFrag = <Pagination.Prev onClick={prev} />;

  const nextFrag = <Pagination.Next onClick={next} />;

  const pageButton = <Pagination.Item>Page {page + 1}</Pagination.Item>;

  if (page === 0) {
    return (
      <Pagination style={{ marginTop: '20px', marginLeft: '42%' }}>
        {pageButton}
        {nextFrag}
      </Pagination>
    );
  } else if (page < 0 || page > maxPage) {
    return (
      <div>
        <h1>Error: 404 Not Found</h1>
      </div>
    );
  } else if (page === maxPage) {
    return (
      <Pagination style={{ marginTop: '20px', marginLeft: '42%' }}>
        {prevFrag}
        {pageButton}
      </Pagination>
    );
  } else {
    return (
      <Pagination style={{ marginTop: '20px', marginLeft: '42%' }}>
        {prevFrag}
        {pageButton}
        {nextFrag}
      </Pagination>
    );
  }
};

export default PaginationCom;
