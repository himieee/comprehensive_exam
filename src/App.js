import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Instructions from "./Components/Instructions";

const App = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "instructions",
        element: <Instructions />,
      },
    ],
  },
]);

export default App;
