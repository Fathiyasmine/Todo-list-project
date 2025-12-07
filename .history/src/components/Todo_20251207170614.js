import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Todo() {
  return (
    <>
      <Card style={{ background: "red" }}>
        <CardContent>
          <Typography variant="h2">Tache 1</Typography>
        </CardContent>
      </Card>
    </>
  );
}
