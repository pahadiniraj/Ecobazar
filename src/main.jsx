import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import Shop from "./Component/Shop/Shop.jsx";
import Pages from "./Component/Pages/Pages.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import { router } from "./Component/Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
