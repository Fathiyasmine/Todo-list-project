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
        background: "#a877b0",
        height: "100vh",
      }}
    >
      <ToDoList style={{ background: "white" }} />
    </div>
  );
}

export default App;
