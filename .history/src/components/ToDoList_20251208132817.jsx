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

//Components
import Todo from "./Todo";
export default function ToDoList() {
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
          <Todo />
          {/*All todos */}
          {/*Input +dd button */}
          <Grid container>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {" "}
              <TextField
                width="100%"
                id="standard-basic"
                label="Ajouter une tache"
                variant="standard"
                style={{ background: "red" }}
              />
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{ background: "blue" }}
            >
              fdffd
            </Grid>
          </Grid>
          {/*Input +dd button */}
        </CardContent>
      </Card>
    </Container>
  );
}
