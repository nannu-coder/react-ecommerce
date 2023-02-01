import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilterProductProvider from "./Context/FilterProduct";
import { ProductProvider } from "./Context/ProductProvider";
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
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <ProductProvider>
      <FilterProductProvider>
        <RouterProvider router={router} />
      </FilterProductProvider>
    </ProductProvider>
  );
}

export default App;
