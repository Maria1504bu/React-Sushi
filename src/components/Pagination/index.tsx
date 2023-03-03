import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/FilterSlice';

const Pagination: React.FC = () => {
    const currentPage = useSelector((state: any) => state.filter.currentPage);
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
        ></ReactPaginate>
    )
}

export default Pagination