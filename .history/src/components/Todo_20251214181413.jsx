import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//Icons:
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todosContext";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Todo({ todo, handleCheck }) {
  const [UpdateDialog, setUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });
  const { todos, setTodos } = useContext(TodosContext);
  //event handlers:
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      // if (t.id === todo.id) {
      //   return false;// exclude this todo => expl : 2!==2 => false => on l'exclut de la nouvelle liste
      // } else {
      //   return true;// keep this todo
      // }
      return t.id !== todo.id; // keep only todos that do not match the id to be deleted(on garde seulement les todos qui ne correspondent pas à l'id à supprimer)
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  function handleUpdateClose() {
    setUpdateDialog(false);
  }
  function handleUpdateConfirm() {
    //logic to update the todo
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: updatedTodo.title, details: updatedTodo.details };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setUpdateDialog(false);
  }
  function handleUpdateClick() {
    setUpdateDialog(true);
  }
  //event handlers
  return (
    <>
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
      <Card
        className="todocard"
        style={{ color: "white", background: "#c990d3a3", marginTop: 5 }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {todo.details}
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
              {/*check icon button */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: todo.isCompleted ? "#4CAF50" : "orange",
                  background: todo.isCompleted ? "#4CAF50" : "white",
                  border: "solid 3px #388E3C",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*check icon button */}
              {/*update button */}
              <IconButton
                onClick={handleUpdateClick}
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: "#FFA726",
                  background: "white",
                  border: "solid 3px #FFA726",
                }}
              >
                <EditIcon />
              </IconButton>
              {/*update button */}
              {/*delete button */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                color="primary"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid 3px red",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
              {/*delete button */}
            </Grid>
            {/*Action buttons */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

/*
Je vais t'expliquer la logique derrière l'utilisation de localStorage avec getItem dans useEffect et setItem dans les event handlers.
Pourquoi getItem dans useEffect ?
javascriptuseEffect(() => {
  const savedData = localStorage.getItem('myData');
  if (savedData) {
    setData(JSON.parse(savedData));
  }
}, []); // [] = une seule fois au chargement
Raison : On veut récupérer les données sauvegardées dès que le composant se charge (monte). C'est comme ouvrir un fichier au démarrage de l'application.

Le useEffect avec [] s'exécute une seule fois après le premier rendu
On charge les données précédemment sauvegardées
Ça initialise l'état de notre composant avec les données persistées

Pourquoi setItem dans les event handlers ?
javascriptconst handleChange = (newValue) => {
  setData(newValue); // Met à jour React
  localStorage.setItem('myData', JSON.stringify(newValue)); // Sauvegarde
};
Raison : On veut sauvegarder chaque fois que l'utilisateur fait une action (clic, saisie, etc.).

Chaque modification doit être persistée immédiatement
Si l'utilisateur ferme la page, ses changements sont sauvegardés
C'est comme une sauvegarde automatique

Exemple complet
javascriptfunction TodoApp() {
  const [todos, setTodos] = useState([]);

  * LECTURE au chargement (une fois)
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  * ÉCRITURE à chaque ajout (événement)
  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  * ÉCRITURE à chaque suppression (événement)
  const deleteTodo = (id) => {
    const newTodos = todos.filter(t => t.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return ;

Le cycle de vie

Page se charge → useEffect lit localStorage → initialise l'état
Utilisateur agit → event handler → met à jour l'état + sauvegarde dans localStorage
Page se ferme puis se rouvre → retour à l'étape 1
*/
