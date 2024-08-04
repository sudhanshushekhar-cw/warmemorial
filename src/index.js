// dependencies 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form/Form'

// css files 
import './css/utils.css'
import './css/index.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// components
import App from './App';
import { Bricks } from './components/Bricks';
import Blogs from './components/Blogs';
import Wars from './components/Wars';


// route handling
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Bricks />} />
      <Route path='add-warrior' element={<Form />} />
      <Route path='wars' element={<Wars />} />
      <Route path='blogs' element={<Blogs />} />
    </Route>
  )
);

// app rendering
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

