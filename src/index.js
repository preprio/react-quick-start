import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ArticlePage from "./ArticlePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "./services/apollo-client";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:slug",
    element: <ArticlePage />,
  }
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>
);
