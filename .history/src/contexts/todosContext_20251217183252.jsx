import { createContext, useReducer } from "react";
import todosReducers from "../reducers/todosReducers";

const TodosContext = createContext([]);
const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducers, []);
  return (
    <TodosContext.Provider value={useReducer(todosReducers, [])}>
      {children}
    </TodosContext.Provider>
  );
};
//export const TodosContext = createContext([]);
