import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        height: "100vh",
      }}
    >
      <ToDoList />
    </div>
  );
}

export default App;
