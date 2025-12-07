import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

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
            <Grid size={4}>
              {" "}
              <IconButton
                aria-label="delete"
                disabled
                color="primary"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid 3px red",
                }}
              >
                <CheckIcon />
              </IconButton>{" "}
              {/*Action buttons */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
