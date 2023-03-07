import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SushiProps } from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';
import { addItem, selectItemCount } from '../redux/slices/CartSlice';
import { useAppDispatch } from '../redux/store';
import deliveryIcon from '../assets/img/delivery-icon.png'
import discountIcon from '../assets/img/discount-icon.png';
const FullItem: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const [item, setItem] = React.useState<SushiProps>();
  const [activeTypeId, setActiveTypeId] = React.useState(0);
  const type =  item?.types ? item?.types[activeTypeId]: undefined;

  const dispatch = useAppDispatch();
  const sushiCount = useSelector(selectItemCount(id, type));


  const addHandler = () => {
    dispatch(addItem({ id, title, price, imageUrl, type, count: 1 }));
  }

  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get("https://63f3a4c5de3a0b242b46ab95.mockapi.io/itemsNew/" + id)
      .then(({ data }) => setItem(data))
      .catch(() => navigate("/notExist"));
  }, []);

  console.log(item);
  if (!item) return <Skeleton />;

  const { title, price, ingredients, weight, imageUrl, types } = item;
  return <div className="full-item"> <div className="full-item__content left">
    <img className='full-item__image' src={"/React-Sushi/img/items" + imageUrl} alt='Sushi img' />
    <div className="free-delivery">
      <img src={deliveryIcon} alt=""></img>
      <hr></hr>
      <p>  Безкоштовна доставка при замовленні від 950 грн
      </p>
    </div>
    <div className="discount">
      <img src={discountIcon} alt=""></img>
      <hr></hr>
      <p>
        Знижка 0%, якщо забираєте замовлення з ресторану, крім 1+1
      </p></div>
  </div>
    <div className="full-item__content right"><h4 className='full-item__title'>{title}</h4>
      <p className="full-item__content-ingredients">{ingredients}</p>
      <div className='full-item__selector'>
        {types && <ul>
          {types.map((t, id) => (
            <li
              key={t}
              onClick={() => setActiveTypeId(types.indexOf(t))}
              className={t === type ? "active" : ""}
            >
              {type}
            </li>
          ))}
        </ul>}
      </div>
      <div className='full-item__bottom'>
        <div className='full-item__price'>{price} ₴</div>
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
  </div>
}

export default FullItem;