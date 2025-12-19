import { createContext, useReducer } from "react";
import todosReducers from "../reducers/todosReducers";

const TodosContext = createContext([]);
const TodosProvider = () => {
  return (
    <TodosContext.Provider
      value={useReducer(todosReducers, [])}
    ></TodosContext.Provider>
  );
};
//export const TodosContext = createContext([]);
