import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/contactus", element: <ContactUs /> },
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
