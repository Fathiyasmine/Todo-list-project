import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";

//Components
import Todo from "./Todo";

//useState hook:
import { useState } from "react";
//useEffect hook:
import { useEffect } from "react";
export default function ToDoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");
  const todoJsx = todos.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });
  //filtration array:
  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")); //code dun side effect qui recupere les todos du local storage,hors de la fct de composant
    setTodos(storageTodos); //ce code ne sappelle quune fois au montage du composant(load du component)
  });
  //fct appelee a chaque rendu (chaque load de la page) sappele une fois au montage du composant(quand le composant est complet et son load est fait et affiche au client)
  // , car [] est vide, si on met des variables
  // dans le tableau, elle sapelle a chaque fois que ces variables changent
  //useEffect permet de gerer les effets de bord (side effects) dans les composants fonctionnels React.
  // Il permet d'executer du code en reponse a des changements d'etat ou de props, ou lors du montage et demontage du composant.
  // Par exemple, on peut lutiliser pour recuperer des donnees depuis une API, mettre a jour le DOM, ou configurer des abonnements.
  //on peut lappeler selon une dependance (ex: variable) ou une seule fois au montage (load) (avec tableau vide [])
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            My To Do List
          </Typography>
          <Divider />
          {/*Filter buttons */}
          <ToggleButtonGroup
            value={displayedTodosType}
            exclusive
            //onChange={setDisplayedTodosType}
            aria-label="text alignment"
            style={{ marginTop: "30px" }}
          >
            <ToggleButton value="non-completed">Tout</ToggleButton>
            <ToggleButton value="right">En cours</ToggleButton>
            <ToggleButton value="center">Terminees</ToggleButton>
          </ToggleButtonGroup>
          {/*Filter buttons */}
          {/*All todos */}
          {todoJsx}
          {/*All todos */}
          {/*Input +dd button */}
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid
              size={8}
              // display="flex"
              // justifyContent="space-around"
              // alignItems="center"
            >
              {" "}
              <TextField
                fullWidth
                id="standard-basic"
                label="Ajouter une tache"
                variant="standard"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                style={{
                  width: "100%",
                  height: "100%",
                  color: "#e91e6378",
                  border: " 1px solid #E91E63",
                }}
                variant="outlined"
                onClick={() => {
                  handleAddClick();
                }}
              >
                Ajouter
              </Button>
            </Grid>
          </Grid>
          {/*Input +dd button */}
        </CardContent>
      </Card>
    </Container>
  );
}
