import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <>
      <Card style={{ color: "white", background: "#c990d3a3" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8} style={{ background: "green" }}>
              8
            </Grid>
            <Grid size={4} style={{ background: "green" }}>
              4{" "}
            </Grid>
          </Grid>
          <Typography variant="h2">Tache 1</Typography>
        </CardContent>
      </Card>
    </>
  );
}
