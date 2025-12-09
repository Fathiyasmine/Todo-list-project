import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { todosContext } from "./contexts/todosContext";
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
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
