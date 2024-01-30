import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';

import Landing from './views/Landing';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
