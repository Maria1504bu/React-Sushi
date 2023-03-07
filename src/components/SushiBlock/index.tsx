import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, selectItemCount } from '../../redux/slices/CartSlice';
import { useAppDispatch } from '../../redux/store';

export type SushiProps = {
  id: string,
  title: string,
  price: number,
  weight: number;
  imageUrl: string,
  ingredients?: string,
  components?: string[],
  types?: string[]
}

const SushiBlock: React.FC<SushiProps> = ({ id, title, price, imageUrl, types }) => {
  const [activeTypeId, setActiveTypeId] = React.useState(0);
  const type = types ? types[activeTypeId] : undefined;
  const dispatch = useAppDispatch();
  const sushiCount = useSelector(selectItemCount(id, type));


  const addHandler = () => {
    dispatch(addItem({ id, title, price, imageUrl, type, count: 1 }));
  }

  return (
    <div className='sushi-block'>
      <Link to={`/React-Sushi/${id}`} className='sushi-block__link'>
        <img className='sushi-block__image' src={`/React-Sushi/img/items${imageUrl}`} alt='Sushi img' />
        <h4 className='sushi-block__title'>{title}</h4>
      </Link>
      <div className='sushi-block__selector'>
        { types && <ul>
          {types.map((type, id) => (
            <li
              key={type}
              onClick={() => setActiveTypeId(types.indexOf(type))}
              className={activeTypeId === id ? "active" : ""}
            >
              {type}
            </li>
          ))}
        </ul>}
      </div>
      <div className='sushi-block__bottom'>
        <div className='sushi-block__price'>{price} ₴</div>
        <button className='button button--outline button--add' onClick={addHandler}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Додати</span>
          {sushiCount && <i>{sushiCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default SushiBlock;
