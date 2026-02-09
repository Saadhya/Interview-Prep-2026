import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { addTodo, removeTodo } from "./TodoSlice";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state=> state.todo.todos);

  const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const addClick = () => {
    if(inputText===""){
      setError("Please enter a todo");
      return;
    }
    setError("");
    dispatch(addTodo(inputText))
    setInputText("");
    // console.log(inputText);
  };

  const removeClick = (id: string) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className="app bg-slate-200 w-screen h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-purple-950 mt-4 uppercase">todo app</h1>
      <span className="text-red-500">{error}</span>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={handleTodo}
          className="p-2 border"
          placeholder="Enter todo here"
        />
        <button onClick={addClick}>Add</button>
      </div>

      <div className="flex">
        <ul className="list-disc">          
          {todos && todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2">
              <span>{todo.text}</span>
              <button onClick={() => removeClick(todo.id)} className="text-red-500">Remove</button>
            </li>
          ))}          
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
