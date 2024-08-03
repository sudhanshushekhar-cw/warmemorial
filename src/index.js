import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form/Form'
// css files 
import './css/index.css';
import './css/index.css'
import './css/utils.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import { Bricks } from './components/Bricks';
import Blogs from './components/Blogs';
import Wars from './components/Wars';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Bricks />} />
      <Route path='add-warrior' element={<Form />} />
      <Route path='wars' element={<Wars />} />
      <Route path='blogs' element={<Blogs />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

