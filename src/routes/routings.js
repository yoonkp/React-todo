import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", // 경로 적음
        element: <MainPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />,
      },
    ],
  },
]);
