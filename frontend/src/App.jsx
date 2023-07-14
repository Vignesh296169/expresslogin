import Login from "./pages/Login"
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Private from "./pages/Private";
function App() {
  const router = createBrowserRouter([{path:"/",element:<Login/>},{path:"/private",element:<Private/>}])
  return(
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App