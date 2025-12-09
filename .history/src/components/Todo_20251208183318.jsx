import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//Icons:
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
export default function Todo({ todo, handleCheck }) {
  function handleCheckClick() {
    handleCheck(todo.id);
  }
  return (
    <>
      <Card
        className="todocard"
        style={{ color: "white", background: "#c990d3a3", marginTop: 5 }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/*Action buttons */}

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {" "}
              {/*check icon button */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: todo.isCompleted ? "#4CAF50" : "orange",
                  background: todo.isCompleted ? "#4CAF50" : "white",
                  border: "solid 3px #388E3C",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*check icon button */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: "#FFA726",
                  background: "white",
                  border: "solid 3px #FFA726",
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid 3px red",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/*Action buttons */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
