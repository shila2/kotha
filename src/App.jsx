import React from 'react'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Registration from './components/pages/Registration';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Registration />}
    >
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App