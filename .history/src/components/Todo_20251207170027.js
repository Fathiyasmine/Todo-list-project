export default function Todo() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h2">My To Do List</Typography>
          <Divider />
          {/*Filter buttons */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ marginTop: "30px" }}
          >
            <ToggleButton value="left">Tout</ToggleButton>
            <ToggleButton value="right">En cours</ToggleButton>
            <ToggleButton value="center">Terminees</ToggleButton>
          </ToggleButtonGroup>
          {/*Filter buttons */}
        </CardContent>
      </Card>
    </>
  );
}
