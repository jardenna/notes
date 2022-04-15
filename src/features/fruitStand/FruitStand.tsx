import { nanoid } from '@reduxjs/toolkit';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addedFruit, addFruit, clearFruits } from './fruitSlice';

const FruitStand: FC = () => {
  const fruits = useAppSelector(addedFruit);
  const [value, setValue] = useState('');
  console.log(fruits);
  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFruit(value));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">send</button>
      </form>
      {fruits.map((fruit: any) => (
        <li key={nanoid(3)}>{fruit}</li>
      ))}
      <button onClick={() => dispatch(clearFruits())}>clear</button>
    </>
  );
};
export default FruitStand;
