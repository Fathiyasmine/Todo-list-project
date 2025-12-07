import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ToDoList() {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h2">My To Do List</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
