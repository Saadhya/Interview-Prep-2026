import React, { useReducer } from 'react'

const PrimaryButton = () => {
  const counter=(state: any, action: any)=>{
    switch(action.type){
      case "increment":
        return {count:state.count+1}
      case "decrement":
        return {count:state.count-1}
      default: return state
    }
  }
  const [state, dispatch]=useReducer(counter, {count:1});
    const handleClick = () => {
        console.log("Button clicked");
    }
  return (
    <div>
      <button className='' onClick={()=>dispatch({type:"increment"})}>Add</button>
      {state.count}
      <button className='' onClick={()=>dispatch({type:"decrement"})} disabled={state.count===0}>Sub</button>
    </div>
  )
}

export default PrimaryButton;

