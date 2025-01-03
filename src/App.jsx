import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ROUTES from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const routes = createBrowserRouter(ROUTES)
function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
