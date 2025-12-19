import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";
import MySnackbar from "./components/MySnackBar";
//others:
import { v4 as uuidv4 } from "uuid";
import { ToastContext } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"],
  },
  palette: {
    primary: {
      main: "#a877b0",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
const initialTodos = [
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "lire un livre",
    details: "le faire auj",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [open, setOpen] = useState(true);
  function showHideToast() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#a877b0",
          height: "100vh",
        }}
      >
        <MySnackbar open={open} />
        <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

/*
Explication du Context API en React
Je vais vous expliquer useContext de manière simple en analysant votre code ! 🎯
Le Problème Sans Context
Imaginez une boîte de todos que vous devez passer de main en main :
App → ToDoList → Todo (prop drilling)
Vous devez passer todos et setTodos à chaque composant, même si certains ne les utilisent pas vraiment.
La Solution : Context API
Le Context est comme un magasin central accessible par tous :
         [TodosContext - Magasin Central]
              ↓           ↓
            App      ToDoList → Todo
Tous les composants peuvent prendre directement du magasin !

Étape par Étape dans Votre Code
1️⃣ Créer le Magasin (todosContext.js)
javascriptexport const TodosContext = createContext([]);
Analogie : Vous créez un magasin vide. [] = valeur par défaut (rarement utilisée).

2️⃣ Remplir le Magasin (App.js)
javascriptconst [todos, setTodos] = useState(initialTodos);

<TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
  <ToDoList />
</TodosContext.Provider>
Ce qui se passe ici :

Provider = Le propriétaire du magasin qui met les produits en rayon
value = Les produits disponibles : todos (la liste) et setTodos (pour modifier)
Tous les enfants de Provider peuvent accéder au magasin


3️⃣ Utiliser les Produits (ToDoList.js et Todo.js)
javascriptconst { todos, setTodos } = useContext(TodosContext);
Ce qui se passe :

useContext(TodosContext) = "Je vais chercher dans le magasin TodosContext"
{ todos, setTodos } = "Je prends ces deux choses"


Visualisation Complète
javascript// 1. CRÉATION DU MAGASIN
createContext([]) → TodosContext

 2. REMPLISSAGE (App.js)
<Provider value={{ todos, setTodos }}>
  │
  ├─ <ToDoList />
  │    │
  │    └─ useContext(TodosContext) ✅ Accès direct !
  │    │
  │    └─ <Todo />
  │         │
  │         └─ useContext(TodosContext) ✅ Accès direct aussi !
</Provider>

Les Avantages
❌ Sans Context (Prop Drilling)
javascript<ToDoList todos={todos} setTodos={setTodos} />
  └─ <Todo todo={t} todos={todos} setTodos={setTodos} />
✅ Avec Context
javascript<ToDoList /> // Pas de props !
  └─ <Todo todo={t} /> // Juste le todo nécessaire !

Résumé Simple
ConceptAnalogieCodecreateContextCréer un magasin videcreateContext([])ProviderMettre des produits en rayon<Provider value={...}>useContextAller chercher dans le magasinuseContext(TodosContext)
*/
