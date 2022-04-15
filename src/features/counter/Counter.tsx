import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { increment, decrement } from './counterSlice';

const Counter: FC = () => {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();
  return (
    <>
      {count}
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
};
export default Counter;
