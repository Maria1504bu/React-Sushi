import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/FilterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock from "../components/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";

const Home = () => {
  const [sushi, setSushi] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const { categoryId, sort, searchValue } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let sortn = sort ? "?sortBy=" + sort.sortBy + "&order=" + sort.order : "";
    console.log(sort)
    let category = categoryId === 0 ? '' : '&category=' + categoryId;
    let search = searchValue === '' ? '' : "&title=" + searchValue
    let url = "https://63f3a4c5de3a0b242b46ab95.mockapi.io/items" + sortn + category + search;

    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        setSushi(items);
        setLoaded(true);
      });
  }, [categoryId, sort, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Всі суші</h2>
      <div className="content__items">
        {loaded
          ? sushi.map((obj) => <SushiBlock key={obj.id} {...obj} />)
          : [...new Array(4)].map(() => <Skeleton />)}
      </div>
    </>
  );
};

export default Home;
