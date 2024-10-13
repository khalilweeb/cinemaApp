import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './components/navigation/nav';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/home';
import Watchlater from './components/Watchlater/Watchlater';
import Liked from './components/Liked/Liked';
import List from './components/Mylist/Mylist';
import Popular from './components/Populair/popular';


import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

{
  path: '/',
  element: <Nav/>,
  children : [
    {
      path: "home",
      element: <Home />

    },
    {
      path: "liked",
      element: <Liked />

    },
    {
      path: "list",
      element: <List />

    },  
    {
      path: "watchLater",
      element: <Watchlater />

    },
    {
      path: "popular",
      element: <Popular />

    }
  ]
}


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
