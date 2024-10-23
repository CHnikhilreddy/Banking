import './App.css';
import Routerarr from './routers'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(Routerarr);

function App() {
    if (!router) {
      return <div>Error: Router is not defined!</div>;
    }else{
      console.log("router is defined")
    }
  
    return (
      <RouterProvider router={router} />
    );
}

export default App;