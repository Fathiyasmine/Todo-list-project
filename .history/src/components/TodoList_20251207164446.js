import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToDoList() {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h2">My To Do List</Typography>
          <Divider />
          {/*Filter buttons */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left">Tout</ToggleButton>
            <ToggleButton value="center">Terminees</ToggleButton>
            <ToggleButton value="right">En cours</ToggleButton>
          </ToggleButtonGroup>
          {/*Filter buttons */}
        </CardContent>
      </Card>
    </Container>
  );
}
