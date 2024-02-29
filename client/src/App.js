import { Route, Routes, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={Accueil}></Route>
          <Route path="/actualites" Component={Actualites}></Route>
          <Route path="/agenda" Component={Agenda}></Route>
          <Route path="/gbessiaTele" Component={GbessiaTele}></Route>
          <Route path="/galerie" Component={Galerie}></Route>
          <Route path="/gbessia-histoire" Component={Historique}></Route>
          <Route path="/demographie" Component={Demographie}></Route>
          <Route path="/tourisme" Component={Tourisme}></Route>
          <Route path="/plan-acces" Component={PlanAcces}></Route>
        </Routes>
      </AnimatePresence>

    </>)

}

export default App;
