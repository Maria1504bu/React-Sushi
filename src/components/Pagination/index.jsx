import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/FilterSlice';

const Pagination = () => {
    const currentPage = useSelector((state) => state.filter.currentPage);
    console.log(currentPage);
    const dispatch = useDispatch();
    return (
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={7}
        renderOnZeroPageCount={null}
        ></ReactPaginate>
    )
}

export default Pagination