import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/FilterSlice';

const Categories: React.FC = () => {
  const categories = [{ name: 'Усі', imgSrc: "https://static.tildacdn.com/tild6539-3831-4766-b135-326566356437/icons8-salad-50.png" },
  { name: 'Суші', imgSrc: "https://static.tildacdn.com/tild3936-3330-4166-b263-373931353766/icons8--64.png" },
  { name: 'Сети', imgSrc: "https://static.tildacdn.com/tild6539-6534-4132-b962-666636333664/icons8-sushi-64_2.png" },
  { name: 'Wok', imgSrc: "https://static.tildacdn.com/tild6539-3831-4766-b135-326566356437/icons8-salad-50.png" },
  { name: 'Напої', imgSrc: "https://static.tildacdn.com/tild6262-3039-4238-b636-613633323836/icons8--50.png" }];

  const selectedId = useSelector((state: any) => state.filter.categoryId);
  const dispatch = useDispatch();
  return (
    <div className='categories'>
      <ul>
        {categories.map((category, index) => (
          <li
            key={category.name}
            onClick={() => dispatch(setCategoryId(index))}
            className={selectedId === index ? 'active' : ''}>
            <img src={category.imgSrc} alt="" />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
