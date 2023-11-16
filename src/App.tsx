import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Connexion from "./routes/Connexion"
import Home from "./routes/Home";
import Ajouter_music from "./routes/Ajouter_music";
import Modifier_music from "./routes/Modifier_music";
// import Musique from "./composants/Musique";

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element: <Connexion />,
  },
  {
    path:"/home",
    element: <Home />,
  },
  {
    path:"/ajouter_music",
    element: <Ajouter_music />,
  },
  {
    path:"/modifier_music",
    element: <Modifier_music />,
  },

]);

  return (
      <RouterProvider router={router} />
  )
}

export default App