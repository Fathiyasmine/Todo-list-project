import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
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
                aria-label="delete"
                disabled
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
                aria-label="delete"
                disabled
                color="primary"
                style={{
                  color: "#FFA726",
                  background: "white",
                  border: "solid 3px #388E3C",
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                disabled
                color="primary"
                style={{
                  color: "#4CAF50",
                  background: "white",
                  border: "solid 3px #388E3C",
                }}
              >
                <CheckIcon />
              </IconButton>
            </Grid>
            {/*Action buttons */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
