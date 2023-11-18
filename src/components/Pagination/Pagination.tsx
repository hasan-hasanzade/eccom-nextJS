import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  handlePageClick: (selectedItem: { selected: number }) => void;
  pageCount: number;
};

export const Pagination: React.FC<PaginationProps> = ({ handlePageClick, pageCount }) => {
  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName={`${styles.item} ${styles.active}`}
        breakClassName={`${styles.item} ${styles.breackMe}`}
        containerClassName={styles.pagination}
        disabledClassName={styles.disabledPage}
        marginPagesDisplayed={2}
        nextClassName={`${styles.item} ${styles.next}`}
        pageClassName={`${styles.item} ${styles.paginationPage}`}
        previousClassName={`${styles.item} ${styles.previous}`}
      />
    </div>
  );
};
