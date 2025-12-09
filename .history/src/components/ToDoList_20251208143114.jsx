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

//Components
import Todo from "./Todo";
//others:
import { v4 as uuidv4 } from "uuid";
//useState hook:
import { useState } from "react";
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
export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const todoJsx = initialTodos.map((t) => {
    return <Todo key={t.id} title={t.title} details={t.details} />;
  });
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
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ marginTop: "30px" }}
          >
            <ToggleButton value="left">Tout</ToggleButton>
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
