import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/main/_index";
import TodoPage from "./pages/todo";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
