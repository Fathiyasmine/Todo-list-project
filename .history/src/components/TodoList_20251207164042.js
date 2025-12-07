import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
export default function ToDoList() {
  return (
    <Container maxWidth="sm">
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
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          {/*Filter buttons */}
        </CardContent>
      </Card>
    </Container>
  );
}
