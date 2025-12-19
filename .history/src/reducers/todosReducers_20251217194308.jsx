import { v4 as uuidv4 } from "uuid";

export default function reducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.newTitle,
        details: "",
        isCompleted: false,
      };
      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "deleted": {
      const updatedTodos = currentTodos.filter((t) => {
        // if (t.id === todo.id) {
        //   return false;// exclude this todo => expl : 2!==2 => false => on l'exclut de la nouvelle liste
        // } else {
        //   return true;// keep this todo
        // }
        return t.id !== action.payload.id; // keep only todos that do not match the id to be deleted(on garde seulement les todos qui ne correspondent pas à l'id à supprimer)
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "updated": {
      //logic to update the todo
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            details: action.payload.details,
          };
        } else {
          return t;
        }
      });
      return updatedTodos;
    }
    case "get": {
      const storageTodos = JSON.parse(localStorage.getItem("todos"));
      return storageTodos;
    }
    case "toggledCompleted": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          //  t.isCompleted = !t.isCompleted;=> mutation
          const updatedTodos = {
            ...t,
            isCompleted: !t.isCompleted,
          };
          return updatedTodos;
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
