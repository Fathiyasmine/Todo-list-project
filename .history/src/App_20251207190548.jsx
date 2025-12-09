import "./App.css";
import ToDoList from "./components/TodoList";

function App() {
  return (
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
  );
}

export default App;
