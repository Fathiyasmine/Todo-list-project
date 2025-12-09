import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  Typography:{
    fontFamily:[
      "Roboto"
    ]
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}></ThemeProvider>
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
