import { decrement, increment } from './counterReducer';
import { useAppDispatch, useAppSelector } from '../../store';

export const Counter = () => {
// to read value from reducer we use
const {count} = useAppSelector((state:any)=>state.counter);
const dispatch= useAppDispatch()

  return (
    <div>
        <h1>Counter</h1>
        <br/>
        Redux event dispatching: {count}
        <br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())} disabled={count===0}>Decrement</button>
    </div>
  )
}
