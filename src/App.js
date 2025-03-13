import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
