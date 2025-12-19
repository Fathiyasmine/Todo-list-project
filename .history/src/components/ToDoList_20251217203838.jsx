import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMemo } from "react";
import DialogContentText from "@mui/material/DialogContentText";
import { useToast } from "../contexts/ToastContext";
//delete modal imports:
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
//Components
import Todo from "./Todo";

//useState hook:
import { useState } from "react";
//useEffect hook:
import { useEffect } from "react";
//reducers:
import { useTodos, useTodosDispatch } from "../contexts/todosContext";

export default function ToDoList() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const { showHideToast } = useToast();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");
  const [dialogTodo, setDialogTodo] = useState(null);
  const [UpdateDialog, setUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: "",
    details: "",
  });

  //filtration array:
  const completedTodos = useMemo(() => {
    // D'ABORD : on vérifie si todos est un tableau
    if (!Array.isArray(todos)) return []; // Si ce n'est pas un tableau, on retourne un tableau vide

    // ENSUITE : on peut filtrer en sécurité
    return todos.filter((t) => {
      return t.isCompleted;
    });
  }, [todos]);

  //filtration array:
  const notCompletedTodos = useMemo(() => {
    // ✅ CORRECTION ICI AUSSI !
    if (!Array.isArray(todos)) return [];

    return todos.filter((t) => {
      return !t.isCompleted;
    });
  }, [todos]);

  // ✅ CORRECTION : Sécuriser todos avant de l'utiliser
  const safeTodos = Array.isArray(todos) ? todos : [];

  let todosToBeDisplayed = safeTodos; // ← Utiliser safeTodos au lieu de todos

  if (displayedTodosType === "completed") {
    todosToBeDisplayed = completedTodos;
  } else if (displayedTodosType === "non-completed") {
    todosToBeDisplayed = notCompletedTodos;
  } else {
    todosToBeDisplayed = safeTodos; // ← Utiliser safeTodos au lieu de todos
  }

  useEffect(() => {
    dispatch({ type: "get" });
  }, []); // ⚠️ Important : [] pour exécuter une seule fois au montage

  function openDeleteDialog(todo) {
    setDialogTodo(todo);
    setShowDeleteDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    dispatch({
      type: "deleted",
      payload: { dialogTodo },
    });
    setShowDeleteDialog(false);
    showHideToast("Suppression avec succès !");
  }

  function openUpdateDialog(todo) {
    setDialogTodo(todo);
    setUpdatedTodo({
      title: todo.title,
      details: todo.details,
    });
    setUpdateDialog(true);
  }

  function handleUpdateClose() {
    setUpdateDialog(false);
  }

  function handleUpdateConfirm() {
    dispatch({
      type: "updated",
      payload: {
        dialogTodo,
      },
    });
    setUpdateDialog(false);
    showHideToast("Modification avec succès !");
  }

  function handleAddClick() {
    dispatch({
      type: "added",
      payload: {
        newTitle: titleInput,
      },
    });
    setTitleInput("");
    showHideToast("Ajout avec succès !");
  }

  const todoJsx = todosToBeDisplayed.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        showDelete={openDeleteDialog}
        showUpdate={openUpdateDialog}
      />
    );
  });

  return (
    <>
      {/*delete modal */}
      <Dialog
        style={{ direction: "ltr" }}
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Etes-vous sur de vouloir supprimer ce todo ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Une fois supprimé, vous ne pourrez pas le récupérer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Fermer</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
      {/*delete modal */}

      {/*update dialog */}
      <Dialog
        style={{ direction: "ltr" }}
        onClose={handleUpdateClose}
        open={UpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Modifier la todo"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="Modifier le todo"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="details"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, details: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Fermer</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
      {/*update dialog */}

      <Container maxWidth="sm">
        <Card style={{ maxHeight: "80vh", overflow: "scroll" }}>
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              My To Do List
            </Typography>
            <Divider />
            {/*Filter buttons */}
            <ToggleButtonGroup
              value={displayedTodosType}
              exclusive
              onChange={(e, newValue) => setDisplayedTodosType(newValue)}
              aria-label="text alignment"
              style={{ marginTop: "30px" }}
              color="primary"
            >
              <ToggleButton value="non-completed">En cours</ToggleButton>
              <ToggleButton value="completed">Terminés</ToggleButton>
              <ToggleButton value="all">Tout</ToggleButton>
            </ToggleButtonGroup>
            {/*Filter buttons */}
            {/*All todos */}
            {todoJsx}
            {/*All todos */}
            {/*Input +dd button */}
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid size={8}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Ajouter une tâche"
                  variant="standard"
                  value={titleInput}
                  onChange={(e) => {
                    setTitleInput(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                size={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#e91e6378",
                    border: " 1px solid #E91E63",
                  }}
                  variant="outlined"
                  onClick={() => {
                    handleAddClick();
                  }}
                  disabled={!titleInput || titleInput.trim() === ""}
                >
                  Ajouter
                </Button>
              </Grid>
            </Grid>
            {/*Input +dd button */}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
