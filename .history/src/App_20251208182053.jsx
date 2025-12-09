import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
//others:
import { v4 as uuidv4 } from "uuid";
const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"],
  },
});
const initialTodos = [
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#a877b0",
          height: "100vh",
        }}
      >
        <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
