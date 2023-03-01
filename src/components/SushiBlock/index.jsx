import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/CartSlice';

const SushiBlock = ({id, title, price, imageUrl, types }) => {
  const [activeType, setActiveType ] = React.useState(0);
  const typeNames = ['half (4pcs)', 'full (8 pcs)'];
  const dispatch = useDispatch();
  const sushiCount = useSelector((state) => {
     const cartItem = state.cart.items.find((item) => item.id === id && item.type === typeNames[activeType]);
     if(cartItem) return cartItem.count;
  })

  const addHandler = () => {
    dispatch(addItem({id, title, price, imageUrl, type:typeNames[activeType]}));
  }

  return (
    <div className='sushi-block'>
      <img className='sushi-block__image' src={imageUrl} alt='Sushi img' />
      <h4 className='sushi-block__title'>{title}</h4>
      <div className='sushi-block__selector'>
        <ul>
          {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveType(type)}
                className={activeType === type ? "active" : ""}
              >
                {typeNames[type]}
              </li>
          ))}
        </ul>
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
