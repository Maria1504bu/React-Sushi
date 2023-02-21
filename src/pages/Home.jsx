import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import SushiBlock from "../components/SushiBlock";
import Skeleton from "../components/SushiBlock/Skeleton";

const Home = () => {
  const [sushi, setSushi] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63f3a4c5de3a0b242b46ab95.mockapi.io/items")
      .then((res) => res.json())
      .then((items) => {
        setSushi(items);
        setLoaded(true);
      });
  }, []);
  
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
    </>
  );
};

export default Home;
