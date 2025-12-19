import { createContext, useState, useContext } from "react";
import MySnackbar from "./components/MySnackBar";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <MySnackbar open={open} message={message} />

      {children}
    </ToastContext.Provider>
  );
};
export const useToast = () => useContext(ToastContext);

/*
 Pourquoi créer un contexte pour le Toast/Snackbar ?
Problème sans contexte
Sans contexte, si tu veux afficher un message toast depuis n'importe quel composant, tu devrais :

Passer des props à travers plusieurs niveaux de composants (prop drilling)
Dupliquer la logique du snackbar dans chaque composant

Solution avec contexte
Le contexte permet de centraliser la logique et de la rendre accessible partout dans l'application.
📋 Explication ligne par ligne
javascript// 1️⃣ Créer le contexte (le "canal de communication")
const ToastContext = createContext({});

Crée un contexte vide qui servira à partager les données
C'est comme créer un "canal radio" que tous les composants peuvent écouter

 2️⃣ Le Provider (le "fournisseur" de données)
export const ToastProvider = ({ children }) => {

ToastProvider est un composant qui enveloppe toute l'application
children = tous les composants enfants (toute ton app)

   3️⃣ États locaux pour gérer le snackbar
  const [open, setOpen] = useState(false);      // Ouvert/Fermé
  const [message, setMessage] = useState("");   // Texte à afficher

Ces états contrôlent l'affichage du snackbar

 4️⃣ Fonction pour afficher le toast
  function showHideToast(message) {
    setOpen(true);           // Ouvre le snackbar
    setMessage(message);     // Définit le message
    setTimeout(() => {
      setOpen(false);        // Ferme automatiquement après 2 secondes
    }, 2000);
  }

Cette fonction sera partagée à tous les composants enfants

5️⃣ Fournir les données via le Provider
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <MySnackbar open={open} message={message} />
      {children}
    </ToastContext.Provider>
  );

value={{ showHideToast }} : on partage la fonction showHideToast
<MySnackbar /> : le snackbar est rendu une seule fois au niveau du Provider
{children} : tous les composants de l'app

 6️⃣ Hook personnalisé pour utiliser le contexte
export const useToast = () => useContext(ToastContext);
```
- Permet d'accéder facilement à `showHideToast` depuis n'importe quel composant

## 🏗️ Architecture de l'application
```
App
 └── ToastProvider (Provider du contexte)
      ├── MySnackbar (rendu une seule fois ici)
      └── children (tous les composants de l'app)
           ├── ToDoList
           │    └── Todo
           └── AutreComposant
🔄 Flux de données
1. Setup initial (dans App.js ou index.js)
javascriptimport { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <ToastProvider>
      <ToDoList />
      * autres composants *
    </ToastProvider>
  );
}
2. Utilisation dans un composant (ex: ToDoList.jsx)
javascriptimport { useToast } from "../contexts/ToastContext";

function ToDoList() {
  const { showHideToast } = useToast(); // ✅ On récupère la fonction

  function handleAddClick() {
    ... logique d'ajout
    showHideToast("Ajout avec succès !"); // ✅ On l'utilise
  }

  return <div>...</div>;
}
```

### 3. Le Snackbar s'affiche automatiquement
```

🎨 Avantages de cette architecture
✅ 1. Un seul Snackbar pour toute l'app
// ❌ Sans contexte : dupliquer dans chaque composant
function ToDoList() {
  const [open, setOpen] = useState(false);
  return <><Snackbar open={open} />...</>;
}

// ✅ Avec contexte : un seul Snackbar dans le Provider
<ToastProvider>   Snackbar ici 
  <ToDoList />   Pas de Snackbar ici 
  <Todo />        Pas de Snackbar ici 
</ToastProvider>
✅ 2. Accès facile depuis n'importe où
// N'importe quel composant peut afficher un toast
function Todo() {
  const { showHideToast } = useToast();
  return <button onClick={() => showHideToast("Cliqué !")}>Clic</button>;
}
*/
