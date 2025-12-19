import { createContext, useReducer } from "react";
import todosReducers from "../reducers/todosReducers";

const TodosContext = createContext([]);
const TodosProvider = ({ children }) => {
  const x = useReducer();
  return (
    <TodosContext.Provider value={useReducer(todosReducers, [])}>
      {children}
    </TodosContext.Provider>
  );
};
//export const TodosContext = createContext([]);
