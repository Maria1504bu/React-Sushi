import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/FilterSlice';
import { useAppDispatch } from '../../redux/store';

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={7}
        ></ReactPaginate>
    )
}

export default Pagination