import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
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
            <Grid size={4}>4 </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
