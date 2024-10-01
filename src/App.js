import React from 'react';
import './App.css'; // Import your CSS file
import './tailwind.css'
import Home from './pages/homepage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SecondPage from './pages/page2';
import ThirdPage from './pages/thirdpage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/page2',
    element:<SecondPage/>
  },
  {
    path:'/page3',
    element:<ThirdPage/>
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
