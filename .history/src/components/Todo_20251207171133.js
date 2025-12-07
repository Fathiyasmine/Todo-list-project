import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function Todo() {
  return (
    <>
      <Card style={{ color: "white", background: "#c990d3a3" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
              <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
              <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
              <Item>size=8</Item>
            </Grid>
          </Grid>
          <Typography variant="h2">Tache 1</Typography>
        </CardContent>
      </Card>
    </>
  );
}
