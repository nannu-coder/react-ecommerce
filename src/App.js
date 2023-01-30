import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  CheckOut,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
