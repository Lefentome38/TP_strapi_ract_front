import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Connexion from "./routes/Connexion"
import Home from "./routes/Home";
import Musique from "./composants/Musique";

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
  // {
  //   path:"/musique",
  //   element: <Musique />,
  // },

]);

  return (
      <RouterProvider router={router} />
  )
}

export default App