import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Componants/LayOut/LayOut";
import { ApiContextProvider } from "./Context/ApiContext";

export default function App() {
  const routers = createBrowserRouter([
    { path: "", element: <LayOut />, children: [{ index: true }] },
  ]);

  return (
    <>
      <ApiContextProvider>
        <RouterProvider router={routers} />
      </ApiContextProvider>
    </>
  );
}
