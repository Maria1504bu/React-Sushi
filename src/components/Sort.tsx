import React from "react";
import { useSelector } from "react-redux";
import { setSort } from "../redux/slices/FilterSlice";
import { StoreState, useAppDispatch } from "../redux/store";

export type SortType = {
  value: string,
  sortBy: 'rating' | 'price' | 'name',
  order: 'asc' | 'desc'
}

const Sort : React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const list: SortType[] = [{ value: "рейтингу", sortBy: "rating", order: "desc" },
  { value: "ціні", sortBy: "price", order: "asc" },
  { value: "імені", sortBy: "name", order: "asc" }];
  const sort = useSelector((state: StoreState) => state.filter.sort);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onClickListItem = (sortObj: SortType) => {
    dispatch(setSort(sortObj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handler = (e : MouseEvent) => {
      const _e = e as MouseEvent & {composedPath(): string[]};
      if (sortRef.current && !_e.composedPath().includes(sortRef.current)){ setOpen(false)}
    }
    document.body.addEventListener('click', handler);
    return () => {
      document.body.removeEventListener('click', handler);
    }
  }, [])
  
  return (
    <div className='sort' ref={sortRef}>
      <div className='sort__label'>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортування по:</b>
        <span onClick={() => setOpen(!open)}>{sort.value}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={obj.sortBy}
                onClick={() => onClickListItem(obj)}
                className={obj === sort ? "active" : ""}
              >
                {obj.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
