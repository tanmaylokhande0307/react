import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
    
    const { c } = useSelector((state) => state.custom);

    const dispatch = useDispatch();

    const addBtn = () => {
        dispatch({
            type:"increment",
        });
    };

    const subBtn = () => {
        dispatch({
            type:"decrement"
        });
    };

  return (
    <div>
        <p>{c}</p>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home
