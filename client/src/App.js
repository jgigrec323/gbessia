import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Agenda from "./pages/Agenda";
import GbessiaTele from "./pages/GbessiaTele";
import Galerie from "./pages/Galerie";
import Historique from "./pages/Historique";
import Demographie from "./pages/Demographie";
import Tourisme from "./pages/Tourisme";
import PlanAcces from "./pages/PlanAcces";

function App() {
  return <Routes>
    <Route path="/" Component={Accueil}></Route>
    <Route path="/actualites" Component={Actualites}></Route>
    <Route path="/agenda" Component={Agenda}></Route>
    <Route path="/gbessiaTele" Component={GbessiaTele}></Route>
    <Route path="/galerie" Component={Galerie}></Route>
    <Route path="/gbessia-histoire" Component={Historique}></Route>
    <Route path="/demographie" Component={Demographie}></Route>
    <Route path="/tourisme" Component={Tourisme}></Route>
    <Route path="/plan-acces" Component={PlanAcces}></Route>
  </Routes>;
}

export default App;
