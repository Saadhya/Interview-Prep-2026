import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../instagram-clone/src/store'
import { decrement, increment } from './counterReducer';

export const Counter = () => {
// to read value from reducer we use
const count = useAppSelector((state)=>state.counter);
const dispatch= useAppDispatch()

  return (
    <div>
        <h1>Counter</h1>
        <br/>
        event dispatching: {count}
        <br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
