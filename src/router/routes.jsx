import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/newUser",
        element: <NewUser />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/newproduct",
        element: <NewProduct />,
      },
    ],
  },
]);
