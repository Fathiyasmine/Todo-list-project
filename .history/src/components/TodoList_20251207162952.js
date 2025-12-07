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
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
