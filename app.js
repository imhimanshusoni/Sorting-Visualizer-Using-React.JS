import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import HomePage from "./src/pages/homepage";
import Bubble from "./src/pages/bubble";
import Selection from "./src/pages/selection";
import Insertion from "./src/pages/insertion";
import Merge from "./src/pages/merge";
import Quick from "./src/pages/quick";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
  const generateRandomArray = (n, min = 0, max = 100) => {
    let arr = [];
    for (let i = 0; i < n; ++i) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
  };
  const [arrLen, setArrLen] = useState(7);
  const [arr, setArr] = useState(generateRandomArray(arrLen, 10, 50));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/bubble",
      element: (
        <Bubble
          arr={arr}
          setArr={setArr}
          generateRandomArray={generateRandomArray}
          arrLen={arrLen}
          setArrLen={setArrLen}
        />
      ),
    },
    {
      path: "/selection",
      element: (
        <Selection
          arr={arr}
          setArr={setArr}
          generateRandomArray={generateRandomArray}
          arrLen={arrLen}
          setArrLen={setArrLen}
        />
      ),
    },
    {
      path: "/insertion",
      element: (
        <Insertion
          arr={arr}
          setArr={setArr}
          generateRandomArray={generateRandomArray}
          arrLen={arrLen}
          setArrLen={setArrLen}
        />
      ),
    },
    {
      path: "/merge",
      element: (
        <Merge
          arr={arr}
          setArr={setArr}
          generateRandomArray={generateRandomArray}
          arrLen={arrLen}
          setArrLen={setArrLen}
        />
      ),
    },
    {
      path: "/quick",
      element: (
        <Quick
          arr={arr}
          setArr={setArr}
          generateRandomArray={generateRandomArray}
          arrLen={arrLen}
          setArrLen={setArrLen}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

root.render(<App />);
