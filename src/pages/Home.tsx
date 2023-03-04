import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import qs from "qs";
import { FilterSliceState, setFilter } from "../redux/slices/FilterSlice";
import { fetchItems } from "../redux/slices/ItemsSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock, { SushiProps } from "../components/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";
import Pagination from "../components/Pagination";
import { StoreState, useAppDispatch } from "../redux/store";

const Home = () => {
  const { items, status } = useSelector((state: StoreState) => state.items)
  const { categoryId, sort, searchValue, currentPage } = useSelector((state: StoreState) => state.filter);
  const isMounted = React.useRef(false);
  const isTyped = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({ categoryId, sort, searchValue, currentPage });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, searchValue, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilter((params as unknown) as FilterSliceState));
      isTyped.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isTyped.current) {
      dispatch(fetchItems());
    }
    isTyped.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі суші</h2>
      <div className="content__items">
        {status === "success"
          ? items.map((obj: SushiProps) => <SushiBlock key={obj.id} {...obj} />)
          : [...new Array(4)].map(() => <Skeleton />)}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
