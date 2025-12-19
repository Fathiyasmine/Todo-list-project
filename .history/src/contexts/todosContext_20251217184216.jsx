import { createContext, useReducer } from "react";
import todosReducers from "../reducers/todosReducers";

const TodosContext = createContext([]);
const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducers, []);
  //useReducer a deux parametre, le reducer utilie (todosReducers) et letat initial (ici un tableau vide)
  //useReducer cest comme useState , retourne 2 valeurs: letat courant (todos) et une fct pour dispatcher les actions (todosDispatch), quon fait sortir de larray par destructuring
  //todos: etat courant, tableau des todos [state]
  //todosDispatch: fct pour envoyer des actions au reducer [dispatch function] pour modifier letat courant [state updater function]
  return (
    <TodosContext.Provider value={{ todos: todos, dispatch: todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
//export const TodosContext = createContext([]);
