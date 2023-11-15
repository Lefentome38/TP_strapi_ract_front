import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Connexion from "./routes/Connexion"
import Home from "./routes/Home";

function App() {

// async function logMovies() {
//   const response = await fetch("http://localhost:1337/api/chanteurs");
//   const movies = await response.json();
//   console.log(movies);
// }
// logMovies()



// async function aaa() {
//   const response = await fetch(`http://localhost:1337/api/chanteurs`)
//   const data = await response.json()
//   const addresses: string[] = data.features.map(
//       (feature: any) => feature.properties.label
//   )
//   console.log(addresses);
// }
// aaa()

const router = createBrowserRouter([
  {
    path:"/",
    element: <Connexion />,
  },
  {
    path:"/home",
    element: <Home />,
  },

]);

  return (
      <RouterProvider router={router} />
  )
}

export default App