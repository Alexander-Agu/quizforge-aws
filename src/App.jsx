import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import Menu from "./pages/menu/Menu"
import Game from "./pages/game/Game";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>404 Page not found</h1>
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/game/:levelId",
      element: <Game />
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
