import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//Icons:
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import IconButton from "@mui/material/IconButton";
export default function Todo() {
  return (
    <>
      <Card style={{ color: "white", background: "#c990d3a3", marginTop: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                Tache 1
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                Details de la tache 1
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
              <IconButton
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: "#4CAF50",
                  background: "white",
                  border: "solid 3px #388E3C",
                }}
              >
                <CheckIcon />
              </IconButton>
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
