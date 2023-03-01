import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import qs from "qs";
import { setFilter } from "../redux/slices/FilterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock from "../components/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";
import Pagination from "../components/Pagination";

const Home = () => {
  const [sushi, setSushi] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const { categoryId, sort, searchValue, currentPage } = useSelector((state) => state.filter);
  const isMounted = React.useRef(false);
  const isTyped = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(setFilter(params));
      isTyped.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isTyped.current) {
      let page = "?page=" + currentPage + "&limit=4";
      let sortWithOrder = sort ? "&sortBy=" + sort.sortBy + "&order=" + sort.order : "";
      let category = categoryId === 0 ? '' : '&category=' + categoryId;
      let search = searchValue === '' ? '' : "&title=" + searchValue
      let url = "https://63f3a4c5de3a0b242b46ab95.mockapi.io/items" + page + sortWithOrder + category + search;

      fetch(url)
        .then((res) => res.json())
        .then((items) => {
          setSushi(items);
          setLoaded(true);
        });
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
        {loaded
          ? sushi.map((obj) => <SushiBlock key={obj.id} {...obj} />)
          : [...new Array(4)].map(() => <Skeleton />)}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
