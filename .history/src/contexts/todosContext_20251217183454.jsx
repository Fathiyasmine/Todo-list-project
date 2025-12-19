import { createContext, useReducer } from "react";
import todosReducers from "../reducers/todosReducers";

const TodosContext = createContext([]);
const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducers, []);
  //useReducer a deux parametre, le reducer utilie (todosReducers) et letat initial (ici un tableau vide)
  //
  return (
    <TodosContext.Provider value={useReducer(todosReducers, [])}>
      {children}
    </TodosContext.Provider>
  );
};
//export const TodosContext = createContext([]);
