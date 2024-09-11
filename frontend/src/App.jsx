import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import { countriesLoader } from "./loaders/countries.loader";
import CountryPage from "./pages/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, loader: countriesLoader },
      { path: "/:code", element: <CountryPage />, loader: countriesLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
