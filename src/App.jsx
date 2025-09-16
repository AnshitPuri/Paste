import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import PasteEditor from "./components/PasteEditor";
import Paste from "./components/Paste";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "PasteEditor",
        element: <PasteEditor />,
      },
      {
        path: "pastes",
        element: <Paste />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
      <Analytics/>
    </div>
  );
}

export default App;
