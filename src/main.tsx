import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AccordionPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accordion",
    element: <AccordionPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
