import {
   RouterProvider, 
   createBrowserRouter, 
  //  createRoutesFromElements, 
  //  Route
   } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Home />},
      {path: "/products", element: <Products />}
    ]
  }

]);

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinations)

function App() {
  return <RouterProvider router={router} />
}

export default App;
