import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock from "../components/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";

const Home = () => {
  const [sushi, setSushi] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(0);
  const [selectedSort, setSelectedSort] = React.useState({value: "рейтингу", sortBy: "rating", order: "desc"});

  React.useEffect(() => {
    let sort = "?sortBy=" + selectedSort.sortBy + "&order=" + selectedSort.order;
    let category = selectedCategoryId === 0 ? '' : '&category=' + selectedCategoryId;
    fetch("https://63f3a4c5de3a0b242b46ab95.mockapi.io/items" + sort + category)
      .then((res) => res.json())
      .then((items) => {
        setSushi(items);
        setLoaded(true);
      });
  }, [selectedCategoryId, selectedSort]);

  return (
    <>
      <div className="content__top">
        <Categories selectedId={selectedCategoryId} onChooseCategory={(id) => setSelectedCategoryId(id)} />
        <Sort selected={selectedSort} onChooseSort={(sortObj) => setSelectedSort(sortObj)} />
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
