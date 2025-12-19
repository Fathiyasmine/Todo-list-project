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
      return updatedTodos;
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTitleInput("");
      showHideToast("Ajout avec succès !");
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
  return [];
}
