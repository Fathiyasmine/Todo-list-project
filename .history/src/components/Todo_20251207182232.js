import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <>
      <Card
        style={{ color: "white", background: "#c990d3a3", marginTop: "5px" }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8} style={{ background: "green" }}>
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                Tache 1
              </Typography>
            </Grid>
            <Grid size={4} style={{ background: "red" }}>
              4{" "}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
