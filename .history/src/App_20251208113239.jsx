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
      <h1>Salam alaykum</h1>
      <ToDoList />
    </div>
  );
}

export default App;
