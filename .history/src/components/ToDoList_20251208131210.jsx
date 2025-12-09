import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
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
          <Grid></Grid>
          {/*Input +dd button */}
        </CardContent>
      </Card>
    </Container>
  );
}
