import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./Context/CartProvider";
import FilterProductProvider from "./Context/FilterProduct";
import { ProductProvider } from "./Context/ProductProvider";
import { Auth0Provider } from "@auth0/auth0-react";
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
import UserProvider from "./Context/UserProvider";

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
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
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
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductProvider>
          <FilterProductProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </FilterProductProvider>
        </ProductProvider>
      </UserProvider>
    </Auth0Provider>
  );
}

export default App;
